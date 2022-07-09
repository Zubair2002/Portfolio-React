import React from "react";
import Card from "react-bootstrap/Card";
import reactLogo from "../Assets/Images/react-logo.png";
import reduxLogo from "../Assets/Images/redux-logo.png";
import pythonLogo from "../Assets/Images/python-logo.png";
import jsLogo from '../Assets/Images/js-logo.png';
import htmlLogo from '../Assets/Images/html-5.png';
import cssLogo from '../Assets/Images/css-3.png';


const Skills = () => {
  return (
    <div className="skills" id="skills">
      <Card
        style={{ width: "100%" }}
        bg="dark"
        varient="dark"
        className="skills-card"
      >
        <div className="logos">
          <Card.Img variant="top" src={reactLogo} />
          <Card.Title>React</Card.Title>
        </div>
        <div className="logos">
          <Card.Img variant="top" src={reduxLogo} />
          <Card.Title>Redux</Card.Title>
        </div>
        <div className="logos">
          <Card.Img variant="top" src={pythonLogo} />
          <Card.Title>Python</Card.Title>
        </div>
      </Card>
      <Card
        style={{ width: "100%" }}
        bg="dark"
        varient="dark"
        className="skills-card"
      >
        <div className="logos">
          <Card.Img variant="top" src={jsLogo} />
          <Card.Title>JavaScript</Card.Title>
        </div>
        <div className="logos">
          <Card.Img variant="top" src={htmlLogo} />
          <Card.Title>HTML5</Card.Title>
        </div>
        <div className="logos">
          <Card.Img variant="top" src={cssLogo} />
          <Card.Title>CSS3</Card.Title>
        </div>
      </Card>
    </div>
  );
};

export default Skills;
