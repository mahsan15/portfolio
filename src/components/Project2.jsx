import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cdmusic from "./Cdmusic";
import styled from "styled-components";

const Desc = styled.div`
  width: 600px;
  height: 130px;
  padding: 20px;
  background-image: linear-gradient(
    to left,
    rgba(255, 0, 0, 0),
    rgba(15, 10, 222, 1)
  );
  color: white;
  border-radius: 80px;
  position: absolute;
  bottom: 150px;
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

const Project2 = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.8}>
          <Cdmusic />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        <h2>Music Biz (ASP.NET) – Solo Project</h2>
        <br />
        Music app, role-based access. Albums, Artists, and Tracks stored in
        MSSQL server using SQL database. The data is associated with one to many
        and one to one relationship between the 3 entities <br />
        <b>Tech Stack:</b> ASP.NET MVC, C#, HTML, Azure, Bootstrap, SQL,
        JavaScript
        <br />
        <br />
        <ul>
          <Listitems>
            <Links
              href="https://github.com/mahsan15/MusicBiz.git"
              target="_blank"
            >
              Source Code
            </Links>
          </Listitems>
          <Listitems>
            {" "}
            <Links
              href="http://muhammadahsan2-001-site1.itempurl.com/"
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

export default Project2;
