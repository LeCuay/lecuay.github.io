import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import About from 'components/About';

const Main: FC = () => {
  return (
    <Container as="main">
      <Row>
        <Col>
          <About />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
