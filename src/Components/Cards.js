import React from "react";
import moment from "moment";
import { Col, Row, Card } from "react-bootstrap";

function Cards({ toggle, galleyList }) {
  function MediaComponent({ type, link }) {
    return (
      <>
        {type === "video/mp4" ? (
          <video controls width="100%" autoPlay={false}>
            <source src={link} type="video/mp4" />
          </video>
        ) : (
          <Card.Img variant="top" src={link} />
        )}
      </>
    );
  }

  return (
    <>
      {galleyList?.length > 0 ? (
        <Row xs={1} md={toggle ? 3 : 1} className="g-4 cards">
          {galleyList?.map((item, idx) => (
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title className="text">{item?.title || ""}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted ">
                    {moment(new Date(parseInt(item.datetime * 1000))).format(
                      "DD/MM/yy hh:mm a"
                    )}
                    {/* {new Date(parseInt(item.datetime * 1000)).toLocaleString()} */}
                  </Card.Subtitle>
                </Card.Body>
                {item?.images?.length > 0 ? (
                  <MediaComponent
                    type={item?.images[0].type}
                    link={item?.images[0].link}
                  />
                ) : (
                  <MediaComponent type={item?.type} link={item?.link} />
                )}
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <></>
      )}
    </>
  );
}

export default Cards;
