import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Trunks from "./Trunks";
import styled from "styled-components";

const Desc = styled.div`
  width: 600px;
  height: 130px;
  padding: 20px;
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 1)
  );
  color: white;
  border-radius: 80px;
  position: absolute;
  top: 80px;
  right: 40px;
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
margin-left: 70px;
margin-right: 70px;
background-color: red;
border-radius: 80px;
padding: 10px;

transition: 0.3s;
transition: transform 250ms;

&:hover{
    background-color: #8B0000;
    transform: translateY(-5px);
}
  }
`;
const Links = styled.a`
  color: white;
  text-decoration: none;
`;

const Project5 = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.004}>
          <Trunks />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        <h2>Portfolio (React ThreeJs) – Solo Project</h2>
        <br />
        <b>YOU ARE ON IT!</b>
        <br />
        This is my personal portfolio made using React with elements of three js
        to showcase my experience, projects and more about me. :) <br />
        <b>Tech Stack:</b> NodeJS, ThreeJs, Javascript, HTML, CSS
        <br />
        <br />
        <ul>
          <Listitems>
            <Links
              href="https://github.com/mahsan15/portfolio/tree/react-mini"
              target="_blank"
            >
              Source Code
            </Links>
          </Listitems>
        </ul>
      </Desc>
    </>
  );
};

export default Project5;
