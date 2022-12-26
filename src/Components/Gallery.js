import React from "react";
import { Container, Row, Button, Col, Form, Stack } from "react-bootstrap";

function Gallery() {
  return (
    <Container>
      <Row style={{ backgroundColor: "red" }}>
        <Col lg={6}>sm=8</Col>
        <Col lg={6}>sm=4</Col>
        {/* <Col xs={10}>
          <input type="text" name="name"></input>
        </Col>
        <Col xs={2}>
          <Button variant="info">List</Button>
        </Col> */}
      </Row>
    </Container>
  );
}

export default Gallery;
