import React from "react";
import { Row, Col, Container, ListGroup, Card, Button } from "react-bootstrap";

function Products() {
  return (
    <Container fluid>
      <Row className={"g-0 mt-3"}>
        <Col xs={3} className={"pe-4"}>
          <ListGroup className={"shadow-sm rounded-3"}>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={9}>
          <Row xs={1} sm={2} md={4} className={"g-4 justify-content-around"}>
            <Col className={"mb-2"}>
              <Card>
                <Card.Img
                  variant="top"
                  src={"https://i.pravatar.cc/100?u=" + makeId()}
                  style={{ height: "8rem", objectFit: "cover", objectPosition: "center" }}
                />
                <Card.Body>
                  <Card.Title>عنوان کالا</Card.Title>
                  <Card.Text>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className={"mb-2"}>
              <Card>
                <Card.Img
                  variant="top"
                  src={"https://i.pravatar.cc/100?u=" + makeId()}
                  style={{ height: "8rem", objectFit: "cover", objectPosition: "center" }}
                />
                <Card.Body>
                  <Card.Title>عنوان کالا</Card.Title>
                  <Card.Text>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className={"mb-2"}>
              <Card>
                <Card.Img
                  variant="top"
                  src={"https://i.pravatar.cc/100?u=" + makeId()}
                  style={{ height: "8rem", objectFit: "cover", objectPosition: "center" }}
                />
                <Card.Body>
                  <Card.Title>عنوان کالا</Card.Title>
                  <Card.Text>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className={"mb-2"}>
              <Card>
                <Card.Img
                  variant="top"
                  src={"https://i.pravatar.cc/100?u=" + makeId()}
                  style={{ height: "8rem", objectFit: "cover", objectPosition: "center" }}
                />
                <Card.Body>
                  <Card.Title>عنوان کالا</Card.Title>
                  <Card.Text>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className={"mb-2"}>
              <Card>
                <Card.Img
                  variant="top"
                  src={"https://i.pravatar.cc/100?u=" + makeId()}
                  style={{ height: "8rem", objectFit: "cover", objectPosition: "center" }}
                />
                <Card.Body>
                  <Card.Title>عنوان کالا</Card.Title>
                  <Card.Text>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className={"mb-2"}>
              <Card>
                <Card.Img
                  variant="top"
                  src={"https://i.pravatar.cc/100?u=" + makeId()}
                  style={{ height: "8rem", objectFit: "cover", objectPosition: "center" }}
                />
                <Card.Body>
                  <Card.Title>عنوان کالا</Card.Title>
                  <Card.Text>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className={"mb-2"}>
              <Card>
                <Card.Img
                  variant={"top"}
                  src={"https://i.pravatar.cc/100?u=" + makeId()}
                  style={{ height: "8rem", objectFit: "cover", objectPosition: "center" }}
                />
                <Card.Body>
                  <Card.Title>عنوان کالا</Card.Title>
                  <Card.Text>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Products;

function makeId() {
  let result = "";
  let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for ( let i = 0; i < 10; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}