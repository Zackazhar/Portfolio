import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { CgYoutube } from "react-icons/cg";
import { CgTrophy } from "react-icons/cg";
import { CgFigma } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.itchLink} target="_blank">
          <CgTrophy /> &nbsp;
          {props.isBlog ? "Blog" : "Itch.io"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

        {!props.isBlog && props.youtubeLink && (
          <Button
            variant="primary"
            href={props.youtubeLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgYoutube /> &nbsp;
            {"Youtube"}
          </Button>
        )}

        {!props.isBlog && props.figmaLink && (
          <Button
            variant="primary"
            href={props.figmaLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgFigma /> &nbsp;
            {"Figma view"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
