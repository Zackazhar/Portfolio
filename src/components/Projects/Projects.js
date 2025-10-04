import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import virus from "../../Assets/virus3.jpg";
import kullervo from "../../Assets/kullervo.png";
import letmecook from "../../Assets/letmecook.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={virus}
              isBlog={false}
              title="Virus Ninja"
              description="A slicing game made with Unity in mobile where players have to collect points while avoiding the sneaky bombs throughout the levels. There are 3 levels available with increasing difficulty."
              itchLink="https://zack77.itch.io/virus-ninja"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kullervo}
              isBlog={false}
              title="Kullervo"
              description="A 2D hack and slash game inspired by Castlevania series made in Unity. Features 6 unique levels with varying game mechanics available in PC."
              itchLink="https://zack77.itch.io/kullervo"
              youtubeLink="https://www.youtube.com/watch?v=SQZFUWQhRlI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={letmecook}
              isBlog={false}
              title="Let Me Cook"
              description="A topdown cooking game inspired by Overcooked made in Unity. Features variety of recipes to complete within the time limit. Playable in PC"
              itchLink="https://github.com/zackazhar/Editor.io"
            />
          </Col>

          {/*<Col md={4} className="project-card">
            <ProjectCard
              //imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/zackazhar/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/zackazhar/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/zackazhar/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
