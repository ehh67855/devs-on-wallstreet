import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import HomePageContents from './HomePageContents';
import ImageCarousel from '../Carousel/ImageCarousel';
import { HOME_INFO } from '../../Information';
import { IMAGES_INFO } from '../../Information';



const HomePage = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1>Devs on Wall Street</h1>
          <hr></hr>
            <HomePageContents HOME_INFO={HOME_INFO}></HomePageContents>
            <br></br>

          <p>
            <strong>#dow #fintech</strong>
          </p>
       
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;