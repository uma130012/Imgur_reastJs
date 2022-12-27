import React, { useState, useEffect } from "react";
import { Container, Row, Button, Col, Navbar } from "react-bootstrap";
import Cards from "./Cards";
import { Formik, Form, Field } from "formik";
import { apiCallGet } from "../axios/Axios";

function Gallery() {
  const [toggle, setToggle] = useState(false);
  const [galleyList, setGalleryList] = useState([]);

  const onToggle = () => {
    setToggle(!toggle);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = (value) => {
    if (value.search && value.search.length > 0) {
      fetchGallery(value.search);
    }
    console.log(value);
  };

  const initialValues = {
    search: "",
  };

  useEffect(() => {
    fetchGallery("");

    return () => {
      fetchGallery("");
    };
  }, []);

  const fetchGallery = (query) => {
    let url;
    if (query) {
      url = `/3/gallery/search/top/week/0?q=${query}`;
    } else {
      url = "/3/gallery/top/week/0";
    }

    apiCallGet(url).then(async (response) => {
      let data = await response?.data;
      if (response.success === true) {
        setGalleryList(data);
      }
    });
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
                {toggle ? "List" : "Grid"}
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Container>
        <Cards toggle={toggle} galleyList={galleyList} />
      </Container>
    </>
  );
}

export default Gallery;
