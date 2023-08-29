import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 70px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  padding: 10px;
  transition: 0.5s;
  border-radius: 10px;

  &:hover {
    background-color: blue;
    transform: translateY(-2px);
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
`;

const Button = styled.div`
  width: 100px;
  padding: 10px;
  text-align: center;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 10px;

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

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem>
              <Link style={linkStyle} to="#home" smooth>
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link style={linkStyle} to="#who" smooth>
                About me
              </Link>
            </ListItem>
            <ListItem>
              <Link style={linkStyle} to="#works" smooth>
                Works
              </Link>
            </ListItem>
            <ListItem>
              <Link style={linkStyle} to="#contact" smooth>
                Contact
              </Link>
            </ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>
            <Link style={linkStyle} to="#hire" smooth>
              Hire Now
            </Link>
          </Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
