import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sponsers.style.css';

function Sponsers() {
   return (
      <>
         <div className="a-sponsers ">
            <Container fluid>
               {/* <h3 className={"a-sponsers__title"} >اسپانسر&zwnj;های ما</h3> */}
               <Row className={"a-sponsers__row"}>
                  <Col xs={12} sm={6} md={3} >
                     <div className="a-sponsers__item ">
                        <div className="a-sponsers__image">
                           <img src="https://picsum.photos/403/303" alt="lorem picsum" />
                        </div>
                        <Link to={"/"} className="a-sponsers__link" />
                     </div>
                  </Col>
                  <Col xs={12} sm={6} md={3} >
                     <div className="a-sponsers__item ">
                        <div className="a-sponsers__image">
                           <img src="https://picsum.photos/404/304" alt="lorem picsum" />
                        </div>
                        <Link to={"/"} className="a-sponsers__link" />
                     </div>
                  </Col>
                  <Col xs={12} sm={6} md={3} >
                     <div className="a-sponsers__item ">
                        <div className="a-sponsers__image">
                           <img src="https://picsum.photos/405/305" alt="lorem picsum" />
                        </div>
                        <Link to={"/"} className="a-sponsers__link" />
                     </div>
                  </Col>
                  <Col xs={12} sm={6} md={3} >
                     <div className="a-sponsers__item ">
                        <div className="a-sponsers__image">
                           <img src="https://picsum.photos/402/302" alt="lorem picsum" />
                        </div>
                        <Link to={"/"} className="a-sponsers__link" />
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>
      </>
   );
}

export default Sponsers;
