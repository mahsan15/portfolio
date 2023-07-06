import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Books from "./Books";
import styled from "styled-components";

const Desc = styled.div`
  width: 600px;
  height: 110px;
  padding: 20px;
  background-image: linear-gradient(
    to left,
    rgba(255, 0, 0, 0),
    rgba(15, 10, 222, 1)
  );
  color: white;
  border-radius: 80px;
  position: absolute;
  bottom: 100px;
  left: 900px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;

  @media only screen and (max-width: 768px) {
    top: 30px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    width: 350px;
    height: 135px;
    font-size: 12px;
    padding: 10px;
  }
`;

const Listitems = styled.li`
  display: inline-block;
  margin-left: 50px;
  margin-right: 50px;
  background-color: blue;
  border-radius: 80px;
  padding: 10px;

  transition: 0.3s;
  transition: transform 250ms;

  &:hover {
    background-color: #00008b;
    transform: translateY(-5px);
  }

  @media only screen and (max-width: 768px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const Links = styled.a`
  color: white;
  text-decoration: none;
`;

const Project4 = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.8}>
          <Books />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        <h2>My-Book-List App (Mobile Ionic Angular) – Solo Project</h2>
        <br />
        Cross platform app tracks your reading habits, tracks and find info
        about books using open library API. <br />
        <b>Tech Stack:</b> NodeJS, Mongoose, ExpressJs, React, JavaScript,
        Redux, Bootstrap, HTML, CSS, Railway
        <br />
        <ul>
          <Listitems>
            <Links
              href="https://github.com/mahsan15/Ionic-Angular-Book-App"
              target="_blank"
            >
              Source Code
            </Links>
          </Listitems>
          <Listitems>
            {" "}
            <Links
              href="https://www.youtube.com/watch?v=u2PSow16mnw"
              target="_blank"
            >
              Walkthrough
            </Links>
          </Listitems>
        </ul>
      </Desc>
    </>
  );
};

export default Project4;
