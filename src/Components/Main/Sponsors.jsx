import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Sponsors.style.css";

function Sponsors() {
  return (
    <>
      <div className={"a-sponsors"}>
        <Container fluid>
          {/* <h3 className={"a-sponsors__title"} >اسپانسر&zwnj;های ما</h3> */}
          <Row className={"a-sponsors__row"}>
            <Col xs={12} sm={6} md={3} className={"mb-3 mb-md-0"}>
              <div className={"a-sponsors__item"}>
                <div className={"a-sponsors__image"}>
                  <img src={"https://i.pravatar.cc/100?u={" + makeId()} alt={"lorem picsum"}/>
                </div>
                <Link to={"}/"} className={"a-sponsors__link"}/>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3} className={"mb-3 mb-md-0"}>
              <div className={"a-sponsors__item"}>
                <div className={"a-sponsors__image"}>
                  <img src={"https://i.pravatar.cc/100?u={" + makeId()} alt={"lorem picsum"}/>
                </div>
                <Link to={"}/"} className={"a-sponsors__link"}/>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3} className={"mb-3 mb-md-0"}>
              <div className={"a-sponsors__item"}>
                <div className={"a-sponsors__image"}>
                  <img src={"https://i.pravatar.cc/100?u={" + makeId()} alt={"lorem picsum"}/>
                </div>
                <Link to={"}/"} className={"a-sponsors__link"}/>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3} className={"mb-3 mb-md-0"}>
              <div className={"a-sponsors__item"}>
                <div className={"a-sponsors__image"}>
                  <img src={"https://i.pravatar.cc/100?u={" + makeId()} alt={"lorem picsum"}/>
                </div>
                <Link to={"}/"} className={"a-sponsors__link"}/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Sponsors;

function makeId() {
  let result = "";
  let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for ( let i = 0; i < 10; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}