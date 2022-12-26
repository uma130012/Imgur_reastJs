import React, { useState } from "react";
import { Container, Row, Button, Col, Navbar } from "react-bootstrap";
import Cards from "./Cards";
import { Formik, Form } from "formik";

function Gallery() {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const onSubmit = (value) => {
    console.log(value);
  };
  const initialValues = {
    search: "",
  };

  return (
    <>
      <Navbar expand="lg" sticky="top" className="nav">
        <Container className="header">
          <Row>
            <Col lg={10}>
              <Formik onSubmit={onSubmit} initialValues={initialValues}>
                {(formik) => {
                  return (
                    <Form className="inputForm">
                      <input
                        className="searchInput"
                        type="text"
                        name="search"
                        placeholder="Search here.."
                        value={formik.values?.search || ""}
                        onChange={(e) => {
                          e.preventDefault();
                          formik.setFieldValue("search", e.target.value);
                        }}
                      />
                      <span />
                      <Button disabled={!formik.dirty} type="submit">
                        Search
                      </Button>
                    </Form>
                  );
                }}
              </Formik>
            </Col>
            <Col lg={2} className="toggleBtn">
              <Button variant="info" onClick={onToggle}>
                {toggle ? "Grid" : "List"}
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Container>
        <Cards toggle={toggle} />
      </Container>
    </>
  );
}

export default Gallery;
