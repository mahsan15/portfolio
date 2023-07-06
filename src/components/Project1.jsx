import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Burger from "./Burger";
import styled from "styled-components";

const Desc = styled.div`
  width: 700px;
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
  right: 100px;
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
  border-radius: 10px;

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

const Project1 = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.8}>
          <Burger />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        <h2>Bronx-Burgers (React NodeJs) – Solo Project</h2>
        <br />
        Utilizing mongoose, user data with its cart items and burger details are
        stored. CRUD of user, burger models, Bycrypt to hash passwords, Logging
        in fills the cart of the customer, Search bar, Click on burger for
        details, Responsive design. <br />
        <b>Tech Stack:</b> NodeJS, Mongoose, ExpressJs, React, JavaScript,
        Redux, Bootstrap, HTML, CSS, Railway
        <br />
        <br />
        <ul>
          <Listitems>
            <Links
              href="https://github.com/mahsan15/BackEnd-BronxBurger"
              target="_blank"
            >
              Backend
            </Links>
          </Listitems>
          <Listitems>
            {" "}
            <Links
              href="https://github.com/mahsan15/FrontEnd-BronxBurger"
              target="_blank"
            >
              FrontEnd
            </Links>
          </Listitems>
          <Listitems>
            {" "}
            <Links
              href="https://bronxburger-production.up.railway.app/"
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

export default Project1;
