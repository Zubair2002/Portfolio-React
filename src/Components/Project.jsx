import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import Synamatic from "../Assets/Videos/symnatic.mp4";
import TeaShop from "../Assets/Videos/tea-shop.mp4";
import TwitterClone from "../Assets/Videos/twitter-clone.mp4";
import { Fade } from "react-awesome-reveal";

const Project = () => {
  return (
    <div className="project" id="projects">
      <Card
        style={{ width: "100%" }}
        bg="dark"
        varient="dark"
        className="project-card"
      >
        <video
          src={Synamatic}
          autoPlay
          controls
          bg="dark"
        />
        <Card.Body>
          <Card.Title>
            <Fade>
              <p>Synamatic</p>
            </Fade>
          </Card.Title>
          <Card.Text>
            <Fade>
              <p>
                <strong>Project Description:</strong>This is a mini e-commerce
                project that introduces a fresh and exciting way to sell Tea!
                It’s a great way to stay refreshed and active all the day by
                ordering different Tea with a single zesty click! Saves you the
                commute time and expense by placing your orders from the comfort
                of your home!
              </p>
            </Fade>
          </Card.Text>
          <Card.Text>
            <Fade>
              <p>
                <strong>Skills Used:</strong> Frontend built in React and Redux,
                Backend built in Django API
              </p>
            </Fade>
          </Card.Text>
          <div className="project-links">
            <Button variant="primary">
              <a href="https://github.com/Zubair2002/synamatic" target="_blank">
                Github Link
              </a>
            </Button>
            <Button variant="primary">
              <a
                href="https://frontend-synamatic.herokuapp.com/"
                target="_blank"
              >
                Website Link
              </a>
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Card
        style={{ width: "100%" }}
        bg="dark"
        varient="dark"
        className="project-card"
      >
        <video
          src={TeaShop}
          autoPlay
          controls
          bg="dark"
        />
        <Card.Body>
          <Card.Title>
            <Fade>
              <p>Tea Shop</p>
            </Fade>
          </Card.Title>
          <Card.Text>
            <Fade>
              <p>
                <strong>Project Description:</strong>This is a mini e-commerce
                project that introduces a fresh and exciting way to sell Tea!
                It’s a great way to stay refreshed and active all the day by
                ordering different Tea with a single zesty click! Saves you the
                commute time and expense by placing your orders from the comfort
                of your home!
              </p>
            </Fade>
          </Card.Text>
          <Card.Text>
            <Fade>
              <p>
                <strong>Skills Used:</strong> Frontend built in React and Redux,
                Backend built in Django API
              </p>
            </Fade>
          </Card.Text>
          <Card.Text>
            <Fade>
              <p>
                <strong>Test Login Account:</strong> <br />
                Email : zubairilyas3599@gmail.com <br />
                Password : 1234
              </p>
            </Fade>
          </Card.Text>
          <div className="project-links">
            <Button variant="primary">
              <a href="https://github.com/Zubair2002/Tea-Shop" target="_blank">
                Github Link
              </a>
            </Button>
            <Button variant="primary">
              <a href="https://teashop-frontend.herokuapp.com/" target="_blank">
                Website Link
              </a>
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Card
        style={{ width: "100%" }}
        bg="dark"
        varient="dark"
        className="project-card"
      >
        <video
          src={TwitterClone}
          autoPlay
          controls
          bg="dark" 
        />
        <Card.Body>
          <Card.Title>
            <Fade>
              <p>Twitter Clone</p>
            </Fade>
          </Card.Title>
          <Card.Text>
            <Fade>
              <p>
                <strong>Project Description:</strong>With this project, we
                created a platform where you can express your thoughts
                anonymously, showcase your pictures, and much more on a single
                website. Post, edit, or delete posts at the convenience of just
                a few touches. This project is based on Twitter and anonymity
                adds to its special features.
              </p>
            </Fade>
          </Card.Text>
          <Card.Text>
            <Fade>
              <p>
                <strong>Skills Used:</strong> Django/ HTML/ CSS/ Cloudinary
              </p>
            </Fade>
          </Card.Text>
          <div className="project-links">
            <Button variant="primary">
              <a
                href="https://github.com/Zubair2002/Twitter-clone"
                target="_blank"
              >
                Github Link
              </a>
            </Button>
            <Button variant="primary">
              <a
                href="https://twitterclone-zubair.herokuapp.com/"
                target="_blank"
              >
                Website Link
              </a>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Project;
