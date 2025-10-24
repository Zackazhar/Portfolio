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
            Currently looking for a position in the gaming industry.
            <br />
            I have just completed BSC Hons in Computer Games Development in APU.
            <span className="purple"> (September 2025).</span>
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
            "Gaming is a blessing"{" "}
          </p>
          <footer className="blockquote-footer">zackazhar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}   

export default AboutCard;
