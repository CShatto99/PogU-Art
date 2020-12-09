import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import { art } from "../json/topArt.json";

const shuffle = () => {
  let array = [];
  art.map((item, index) => array.push(index));

  for (let i = art.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const loadMore = (index, randex) => {
  let collage = [];
  let i = index;
  while (i < index + 20) {
    if (i + 2 <= art.length) {
      collage.push(
        <React.Fragment key={uuidv4()}>
          <Row className="not-mobile align-items-center mb-5">
            <Col className="mr-5">
              <img src={art[randex[i]].url} alt="PogU Art" />
            </Col>
            <Col>
              <img src={art[randex[i + 1]].url} alt="PogU Art" />
            </Col>
          </Row>
          <Row className="mobile-div align-items-center mb-5">
            <Col>
              <img className="mb-5 " src={art[randex[i]].url} alt="PogU Art" />
            </Col>
          </Row>
        </React.Fragment>
      );
      i += 2;
    } else {
      collage.push(
        <React.Fragment key={uuidv4()}>
          <Row className="not-mobile align-items-center mb-5">
            <Col>
              <img src={art[randex[i]].url} alt="PogU Art" />
            </Col>
            <Col></Col>
          </Row>
          <Row className="mobile-div align-items-center mb-5">
            <Col>
              <img src={art[randex[i]].url} alt="PogU Art" />
            </Col>
          </Row>
        </React.Fragment>
      );
      i++;
      break;
    }
  }
  return collage;
};

const TopArt = () => {
  const randex = shuffle();
  const [collage, setCollage] = useState(loadMore(0, randex));

  return (
    <Container className="text-center">
      <h1 className="mobile-header1 mb-5">Top Art</h1>
      {collage.length > 0 && collage}
      {collage.length * 2 < art.length && (
        <Button
          className="mb-5"
          size="sm"
          color="primary"
          onClick={() =>
            setCollage(collage.concat(loadMore(collage.length * 2, randex)))
          }
        >
          Load More
        </Button>
      )}
    </Container>
  );
};

export default TopArt;
