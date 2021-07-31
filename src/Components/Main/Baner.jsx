import React from 'react';
import './Baner.style.css';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Baner() {
   return (
      <>
         <Container className={"px-3"} fluid>
            <Row className={"my-3"}>
               <Col lg={8} className={"baner__section--right baner__section mb-md-0 mb-4"} >
                  <Link to="/" className="baner__content">
                     {/* <img className={"baner__cover"} src="https://picsum.photos/400/300" alt={"lorem picsum"} /> */}
                     <Carousel className={"baner__carousel"}>
                        <Carousel.Item>
                           <img
                              className="d-block w-100"
                              src="https://picsum.photos/500/400"
                              alt="First slide"
                           />
                           <Carousel.Caption>
                              <h3>First slide label</h3>
                              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                           </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                           <img
                              className="d-block w-100"
                              src="https://picsum.photos/501/401"
                              alt="Second slide"
                           />

                           <Carousel.Caption>
                              <h3>Second slide label</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                           </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                           <img
                              className="d-block w-100"
                              src="https://picsum.photos/502/402"
                              alt="Third slide"
                           />

                           <Carousel.Caption>
                              <h3>Third slide label</h3>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                           </Carousel.Caption>
                        </Carousel.Item>
                     </Carousel>
                  </Link>
               </Col>
               <Col lg={4} className={"baner__section--left baner__section"}>
                  <Row className={'h-100'}>
                     <Col xs={12} className={"baner__section--top baner__section"}>
                        <div className={"baner__content"} >
                           <img className={"baner__cover"} src="https://picsum.photos/401/301" alt={"lorem picsum"} />
                        </div>
                     </Col>
                     <Col xs={12} className={"baner__section--bottom baner__section"}>
                        <div className={"baner__content"} >
                           <img className={"baner__cover"} src="https://picsum.photos/402/302" alt={"lorem picsum"} />
                        </div>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Container>
      </>
   );
}

export default Baner;
