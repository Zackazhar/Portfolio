import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Azfar </span>
            from <span className="purple"> Johor.</span>
            <br />
            I am currently unemployed.. sadge.
            <br />
            I have completed BSC Hons in Computer Games Development in APU.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Football/Futsal
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Developing video games is my calling"{" "}
          </p>
          <footer className="blockquote-footer">zackazhar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
