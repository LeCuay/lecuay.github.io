import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CodeSquareSVG from 'components/svg/CodeSquareSVG';

const About: FC = () => {
  return (
    <Container>
      <Row className="justify-content-around">
        <h2 id="about" className="text-center fw-light">
          Sobre mí
        </h2>
        <hr className="me-5" />
        <Col>
          <CodeSquareSVG />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
