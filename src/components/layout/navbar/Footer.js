import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-5">
      <Container>
        <Row>
          <Col md="4" className="text-center">
            <h5>Follow Us</h5>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark mx-2">
              <FaFacebook size="2em" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark mx-2">
              <FaTwitter size="2em" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark mx-2">
              <FaInstagram size="2em" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-dark mx-2">
              <FaLinkedin size="2em" />
            </a>
          </Col>
          <Col md="4" className="text-center">
            <h5>Contact Us</h5>
            <p>
              <a href="/contact" className="text-dark">
                Contact Us Page
              </a>
            </p>
          </Col>
          <Col md="4" className="text-center">
            <h5>&copy; 2024 Devs on Wall Street</h5>
            <p>University of Georgia</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
