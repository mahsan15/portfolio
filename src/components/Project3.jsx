import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Study from "./Study";
import styled from "styled-components";

const Desc = styled.div`
  width: 600px;
  height: 150px;
  padding: 20px;
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 1)
  );
  color: white;
  border-radius: 80px;
  position: absolute;
  top: 100px;
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
  background-color: red;
  border-radius: 80px;
  padding: 10px;

  transition: 0.3s;
  transition: transform 250ms;

  &:hover {
    background-color: #8b0000;
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

const Project3 = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.8}>
          <Study />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        <h2>Prime Calendar (Angular) - Group Project</h2>
        <br />
        <b>Collaborators:</b> Dolma Bhuti. Bobby li, Qiuyu Zhang, Danqi Zhao
        <br />
        This web app will allow students to learn effective time management and
        to stay on top of their responsibilities. Features inlcude; scheduling
        of classes, organized exportable class notes, login data saved using
        mangoose
        <br />
        <b>Tech Stack:</b> Angular, Typescript, MongoDB, NodeJS, HTML/CSS.y
        <br />
        <br />
        <ul>
          <Listitems>
            <Links
              href="https://github.com/qzhang125/PrimeCalendar-Server.git"
              target="_blank"
            >
              Backend
            </Links>
          </Listitems>
          <Listitems>
            {" "}
            <Links
              href="https://github.com/DolmaBhuti/Prime_Calendar.git"
              target="_blank"
            >
              FrontEnd
            </Links>
          </Listitems>
          <Listitems>
            {" "}
            <Links
              href="https://fascinating-meringue-45e4dd.netlify.app/"
              target="_blank"
            >
              Try it out
            </Links>
          </Listitems>
        </ul>
      </Desc>
    </>
  );
};

export default Project3;
