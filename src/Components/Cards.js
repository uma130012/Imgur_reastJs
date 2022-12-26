import React from "react";
import { Col, Row, Card } from "react-bootstrap";

function Cards({ toggle }) {
  return (
    <Row xs={1} md={toggle ? 3 : 1} className="g-4 cards">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
            </Card.Body>
            <Card.Img
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Cards;
