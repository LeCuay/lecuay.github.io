import React, { CSSProperties } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import BGImage from 'static/img/background.jpg';

const HeaderStyle: CSSProperties = {
  height: '100vh',
  width: '100vw',
  backgroundImage: `url(${BGImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const Header = () => {
  return (
    <Container
      as="header"
      fluid={true}
      className="px-0 mx-0"
      style={HeaderStyle}
    >
      <Row className="g-0 align-items-center h-100">
        <div
          className="d-flex justify-content-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        >
          <h1 className="typewriter text-center text-light py-3">
            Cuay&#39;s Little Garden
          </h1>
        </div>
      </Row>
    </Container>
  );
};

export default Header;
