import React from "react";
import { Fade } from "react-awesome-reveal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Zubair from "../Assets/Images/image-2.jpg";
import Github from '../Assets/Images/github-logo.png'
import Linkedin from "../Assets/Images/linkedin-logo.png";



const About = () => {
  return (
    <div className="about" id="about">
      <Card bg="dark" varient="dark" className="about-card">
        <Card.Img variant="top" src={Zubair} />
        <Card.Body>
          <Card.Title>
            <Fade>
              <p>Zubair Alam</p>
              <p>Web Application Developer</p>
            </Fade>
          </Card.Title>
          <Card.Text>
            <Fade>
              <p>
                My Name is Zubair Alam and I am a Full Stack Developer. I am
                proficient to assist with all the skills present the skills
                sections, qualifications needs. My objective is to empower
                people through long-lasting solution designs.
              </p>
            </Fade>
          </Card.Text>
          <div className="btns">
            <a href="https://github.com/Zubair2002" target="_blank">
              <Button>
                <img src={Github} alt="github" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/zubair-alam-97a44a192/" target="_blank">
              <Button>
                <img src={Linkedin} alt="linkedin" />
              </Button>
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
