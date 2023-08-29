import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Cube } from "./Cube";
import { HashLink as Link } from "react-router-hash-link";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

//RIGHT SIDE

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Subtitle = styled.h2`
  color: Blue;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;

  @media only screen and (max-width: 768px) {
    padding: 25px;
    font-size: 20px;
  }
`;

const Button = styled.div`
  background-color: blue;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;

  transition: 0.3s;
  transition: transform 250ms;

  &:hover {
    background-color: #00008b;
    transform: translateY(-5px);
  }
`;

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

export const Who = () => {
  return (
    <Section id="who">
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [9, 9, 9] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who I am</Subtitle>
          </WhatWeDo>
          <Desc>
            Just a dude who likes to play volleyball, eat spicy food. Oh! also a competent programmer looking for full-time web / software
            developer opportunities with a 3-year diploma in computer
            programming and analysis. employing Angular, React,.Net, Node.js,
            Linux, Bootstrap, and Oop languages, with experience creating and
            unit testing online apps with rest APIS.
          </Desc>
          <Button>
            <Link style={linkStyle} to="#works" smooth>
              See my works
            </Link>
          </Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
