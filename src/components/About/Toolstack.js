import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,

} from "react-icons/si";
import blender from "../../Assets/blender.png";
import aseprite from "../../Assets/aseprite.png";
import gamegen from "../../Assets/gamegen.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={blender} alt="Blender" style={{ width: "130px", height: "140px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode style={{ width: "80px", height: "80px" }}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={aseprite} alt="Aseprite" style={{ width: "200px", height: "100px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={gamegen} alt="Game-N-Gen" style={{ width: "140px", height: "140px" }} />
      </Col>
    </Row>
  );
}

export default Toolstack;
