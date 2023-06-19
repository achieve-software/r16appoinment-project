import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
const Doctors = ({ doctors }) => {
  // console.log(doctors)
  return (
    <Container className="p-2">
      <h3 className="display-6" style={{ color: "rgb(166,18,189)" }}>
        Our Doctors
      </h3>
      <Row>
        {doctors.map((dr) => (
          <Col key={dr.id} xs={6} sm={4} md={3}>
          <img src={dr.img} alt={dr.name} className="img-thumbnail" />
          <h5>{dr.name}</h5>
          <h6>{dr.dep}</h6>
          </Col>
        ))}
        
      </Row>
    </Container>
  );
};

export default Doctors;
