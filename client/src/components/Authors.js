import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Container, Row, Col } from "reactstrap";
import { authors } from "../json/authors.json";

const generateJSX = () => {
  let authorsJSX = [];

  for (let i = 0; i < authors.length; i += 2) {
    if (i + 2 <= authors.length) {
      authorsJSX.push(
        <React.Fragment key={uuidv4()}>
          <Row className="not-mobile align-items-center mb-3">
            <Col className="mr-5">
              <a
                style={{ textDecoration: "none" }}
                href={`https://www.reddit.com/user/${authors[i].substring(2)}/`}
                target="__blank"
              >
                {authors[i]}
              </a>
            </Col>
            <Col>
              <a
                style={{ textDecoration: "none" }}
                href={`https://www.reddit.com/user/${authors[i + 1].substring(
                  2
                )}/`}
                target="__blank"
              >
                {authors[i + 1]}
              </a>
            </Col>
          </Row>
          <Row className="mobile-div align-items-center mb-3">
            <Col className="text-center">
              <Row className="justify-content-center mb-3">
                <a
                  style={{ textDecoration: "none" }}
                  href={`https://www.reddit.com/user/${authors[i].substring(
                    2
                  )}/`}
                  target="__blank"
                >
                  {authors[i]}
                </a>
              </Row>
              <Row className="justify-content-center">
                <a
                  style={{ textDecoration: "none" }}
                  href={`https://www.reddit.com/user/${authors[i + 1].substring(
                    2
                  )}/`}
                  target="__blank"
                >
                  {authors[i + 1]}
                </a>
              </Row>
            </Col>
          </Row>
        </React.Fragment>
      );
    } else {
      authorsJSX.push(
        <React.Fragment key={uuidv4()}>
          <Row className="not-mobile align-items-center mb-3">
            <Col>
              <a
                style={{ textDecoration: "none" }}
                href={`https://www.reddit.com/user/${authors[i].substring(2)}/`}
                target="__blank"
              >
                {authors[i]}
              </a>
            </Col>
            <Col></Col>
          </Row>
          <Row className="mobile-div align-items-center mb-3">
            <Col>
              <a
                style={{ textDecoration: "none" }}
                href={`https://www.reddit.com/user/${authors[i].substring(2)}/`}
                target="__blank"
              >
                {authors[i]}
              </a>
            </Col>
          </Row>
        </React.Fragment>
      );
    }
  }

  return authorsJSX;
};

const Authors = () => {
  const [authorList, setAuthorList] = useState([]);

  useEffect(() => {
    setAuthorList(generateJSX());
  }, []);

  console.log("test");

  return (
    <Container className="text-center">
      <Row className="justify-content-center mb-3">
        <h1 className="mobile-header1">Authors</h1>
      </Row>
      {authorList}
    </Container>
  );
};

export default Authors;
