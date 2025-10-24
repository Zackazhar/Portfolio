import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgFigma } from "react-icons/cg";
import unity from "../../Assets/unity.png";
import unreal from "../../Assets/unreal.png";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={unity} alt="Unity" style={{ width: "90px", height: "90px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={unreal} alt="Unreal" style={{ width: "90px", height: "110px" }} />
      </Col>
    </Row>
  );
}

export default Techstack;
