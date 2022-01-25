import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CodeSquareSVG from 'components/svg/CodeSquareSVG';
import PaperSquareSVG from 'components/svg/PaperSquareSVG';

const About: FC = () => {
  return (
    <Container>
      <Row className="justify-content-between">
        <h2 id="about" className="text-center text-primary">
          Quién soy
        </h2>
        <hr className="d-none d-xl-block" />
        <Col xs={12} xl={5} className="mt-4">
          <Row className="flex-column">
            <h3 className="text-center text-secondary">Escritor de código</h3>
            <hr className="me-5 d-xl-none" />
            <Col className="d-flex justify-content-around mb-3 mt-lg-3">
              <CodeSquareSVG />
            </Col>
            <Col>
              <h4>
                Apasionado de la informática desde muy joven. A día de hoy
                desarrollador especializado en{' '}
                <a href="https://www.python.org/">Python</a> y{' '}
                <a href="https://es.reactjs.org/">React</a>.
                <br />
                Siempre al tanto de nuevas tecnologías y nuevos retos por pura
                pasión.
              </h4>
              <p className="mt-3">
                A los 16 años conseguí mi primer hito personal al ser capaz de
                modificar el comportamiento de un videojuego.
                <br />
                A los 17 empiezo a trastear con Java haciendo mis primeros
                ejecutables (calculadoras, interfaces, minijuegos, ...).
                <br />
                Un año más tarde descubro Python y conecto enormemente con el
                lenguaje, me fascina hasta el punto de crear sistemas en Java
                para que imiten su comportamiento.
                <br />
                <br />
                En mis 20&#39;s descubro Django, React, HTTP2, WebSockets... Me
                enamoro del desarrollo web y empiezo a trabajar en ello.
                <br />
                Desde el 2019 estoy trabajando en desarrollo web tocando todos
                los palos posibles; UX/UI, BackEnd, FrontEnd, sistemas,
                seguridad...
                <br />
                <br />
                Me apasiona mi trabajo y, cuando amas lo que haces, lo haces
                excelente.
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs={12} xl={5} className="mt-4 mt-lg-5 mt-xl-0">
          <Row className="flex-column">
            <h3 className="text-center text-secondary">Escritor en sí</h3>
            <hr className="me-5 d-xl-none" />
            <Col className="d-flex justify-content-around mb-3 mt-lg-3">
              <PaperSquareSVG />
            </Col>
            <Col>
              <h4>
                Ferviente lector desde los ocho años, apasionado escritor a la
                edad de diez, bibliófilo de corazón.
                <br />
                Soy Poeta, al menos en la práctica privada por introversión
                crónica.
              </h4>
              <p className="mt-3">
                He escrito todo tipo de artículos de opinión sobre temas de
                cultura Pop, ya sean videojuegos, música, anime, fotografía o la
                propia cultura Pop.
                <br />
                He publicado a temprana edad en revistas de bajo perfil he
                estado en la sección de análisis de una cuenta de Anime con más
                de 500k seguidores.
                <br />
                <br />
                Supongo que soy el resultado de la pasión por la palabra escrita
                y la influencia Zoomer.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
