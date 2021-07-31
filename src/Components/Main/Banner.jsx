import React from "react";
import "./Banner.style.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <Container className={"px-3"} fluid>
        <Row className={"my-3"}>
          <Col lg={8} className={"banner__section--right banner__section mb-md-0 mb-4"}>
            <Link to="/" className="banner__content">
              {/* <img className={"banner__cover"} src={"https://i.pravatar.cc/100?u=" + makeId()} alt={"lorem picsum"} /> */}
              <Carousel className={"banner__carousel"}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={"https://i.pravatar.cc/100?u=" + makeId()}
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
                    src={"https://i.pravatar.cc/100?u=" + makeId()}
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
                    src={"https://i.pravatar.cc/100?u=" + makeId()}
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
          <Col lg={4} className={"banner__section--left banner__section"}>
            <Row className={"h-100"}>
              <Col xs={12} className={"banner__section--top banner__section"}>
                <div className={"banner__content"}>
                  <img
                    className={"banner__cover"}
                    src={"https://i.pravatar.cc/100?u=" + makeId()}
                    alt={"lorem picsum"}
                  />
                </div>
              </Col>
              <Col
                xs={12}
                className={"banner__section--bottom banner__section"}
              >
                <div className={"banner__content"}>
                  <img
                    className={"banner__cover"}
                    src={"https://i.pravatar.cc/100?u=" + makeId()}
                    alt={"lorem picsum"}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Banner;

function makeId() {
  let result = "";
  let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for ( let i = 0; i < 10; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
