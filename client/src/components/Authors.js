import React, { Fragment } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import { authors } from '../json/authors.json'

let authorList = []

for(let i = 0; i < authors.length; i+=2) {
  if(i + 2 <= authors.length) {
    authorList.push(
      <Fragment key={uuidv4()}>
        <Row className='not-mobile align-items-center mb-3'>
          <Col className='mr-5'>
            <a style={{textDecoration: 'none'}} href={`https://www.reddit.com/user/${authors[i].substring(2)}/`} target='__blank'>
              {authors[i]}
            </a>
          </Col>
          <Col>
            <a style={{textDecoration: 'none'}} href={`https://www.reddit.com/user/${authors[i+1].substring(2)}/`} target='__blank'>
              {authors[i+1]}
            </a>
          </Col>
        </Row>
        <Row className='mobile-div align-items-center mb-3'>
          <Col className='text-center'>
            <Row className='justify-content-center mb-3'>
              <a style={{textDecoration: 'none'}} href={`https://www.reddit.com/user/${authors[i].substring(2)}/`} target='__blank'>
                {authors[i]}
              </a>
            </Row>
            <Row className='justify-content-center'>
              <a style={{textDecoration: 'none'}} href={`https://www.reddit.com/user/${authors[i+1].substring(2)}/`} target='__blank'>
                {authors[i+1]}
              </a>
            </Row>
        </Col>
        </Row>
      </Fragment>
    )
  }
  else {
    authorList.push(
      <Fragment>
        <Row className='not-mobile align-items-center mb-3'>
          <Col>
            <a style={{textDecoration: 'none'}} href={`https://www.reddit.com/user/${authors[i].substring(2)}/`} target='__blank'>
              {authors[i]}
            </a>
          </Col>
          <Col></Col>
        </Row>
        <Row className='mobile-div align-items-center mb-3'>
          <Col>
            <a style={{textDecoration: 'none'}} href={`https://www.reddit.com/user/${authors[i].substring(2)}/`} target='__blank'>
              {authors[i]}
            </a>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

const Authors = () => {
  return (
    <Container className='text-center'>
      <Row className='justify-content-center mb-3'>
        <h1 className='mobile-header1'>Authors</h1>
      </Row>
      {authorList}
    </Container>
  )
}

export default Authors
