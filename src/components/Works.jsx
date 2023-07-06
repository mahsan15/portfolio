import React, { useState } from "react";
import styled from "styled-components";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Project5 from "./Project5";

const data = [
  "Bronx Burger",
  "Music Biz",
  "Prime Calendar",
  "Book Mob App",
  "Portfolio",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  transition: 0.5s;
  transition: transform 250ms;

  @media only screen and (max-width: 768px) {
    font-size: 26px;
    color: white;
    -webkit-text-stroke: 0px;
  }
  &:hover {
    color: white;
    transform: translateY(-15px);
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <Section id="works">
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === data[0] ? (
            <Project1 />
          ) : work === data[1] ? (
            <Project2 />
          ) : work === data[2] ? (
            <Project3 />
          ) : work === data[3] ? (
            <Project4 />
          ) : (
            <Project5 />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
