import React from "react";
import styled from "styled-components";

// Import the main component
import { Viewer } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

import PDFFile from "../mahsanResume.pdf";

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
  flex: 5;
  position: relative;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

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

const Resume = styled.div`
  justify-content: center;

  position: absolute;

  padding: 1px;
  top: 130px;
  bottom: 135px;
  left: 40px;
  right: 40px;
  margin: auto;

  @media only screen and (max-width: 768px) {
    width: 400px;
    height: 450px;
  }
`;

const Works = styled.div`
  width: 600px;
  height: 150px;
  padding: 20px;
  padding-left: 50px;
  margin: 30px;
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgba(23, 67, 88, 0.5)
  );
  border-radius: 100px;

  top: 80px;
  right: 100px;
  color: white;
  font-size: 14px;
  font-weight: 400;
  text-align: center;

  transition: 0.3s;
  transition: transform 250ms;

  &:hover {
    background-color: #800020;
    transform: translateY(-5px);
  }

  @media only screen and (max-width: 768px) {
    padding: 20px;
    width: 350px;
    font-size: 12px;
    height: 140px;
    align-items: center;
    text-align: center;
    border-radius: 20px;
    );
  

  }
`;

const Button = styled.div`
  width: 140px;
  padding: 10px;
  text-align: center;
  background-image: linear-gradient(
    to left,
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 1)
  );
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

const But = styled.div`
  display: none;
  width: 140px;
  padding: 10px;
  margin: 5px;
  text-align: center;
  background-image: linear-gradient(
    to left,
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 1)
  );
  color: white;
  border: none;
  border-radius: 10px;

  transition: 0.3s;
  transition: transform 250ms;

  &:hover {
    background-color: #00008b;
    transform: translateY(-5px);
  }

  
  @media only screen and (max-width: 768px) {
  display: flex;
    );
`;

const List = styled.ul`
  list-style-type: square;
  text-align: left;

`;

export const Hire = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(PDFFile).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <Section id="hire">
      <Container>
        <Left>
          <Resume>
            <Viewer fileUrl={PDFFile} />
            <Button onClick={onButtonClick}>Download Resume</Button>
          </Resume>
        </Left>
        <Right>
          {" "}
          <Works>
            <h2>Office Assistant </h2>
            <h3> Feb 2019 – Mar 2019 | Attock Piling | Dubai, U.A.E</h3>
            <br />
            <List>
              <li>
                Carried out required office tasks and assistance in employ
                invoicing
              </li>
              <li>Organizing and Data entry of files and documents</li>
              <li>Effective Communication between team to carry out tasks</li>
              <li>Illustrating the fund movement throughout the business</li>
            </List>
          </Works>
          <Works>
            <h2>Lab Assistance</h2>{" "}
            <h3>Feb 2022 - Aug 2022 Seneca College | Toronto, ON</h3>
            <br />
            <List>
              <li>
                Reduced 15% search times for SQL database searches using
                relational data.
              </li>
              <li>
                Modified portal user experience, decreaseing incomplete lab
                submissions by 20%.
              </li>
              <li>
                Developed example projects that helped students understand
                assignments end goal.
              </li>
            </List>
          </Works>
          <Works>
            <h2>Sales Associate </h2>
            <h3>Apr 2022 - Current Hudson’s Bay Company | Toronto, ON</h3>
            <br />

            <List>
              <li>Assisting customers, performing cashier work</li>
              <li>Keep the store organized and in order</li>
              <li>Cashier work – cash, credit, and debit transactions</li>
              <li>
                Attention to detail – stocking, organizing and recovery of the
                store items
              </li>
            </List>
          </Works>
          <But onClick={onButtonClick}>Download Resume</But>
        </Right>
      </Container>
    </Section>
  );
};

export default Hire;
