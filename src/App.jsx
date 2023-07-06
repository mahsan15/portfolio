import Hero from "./components/Hero";
import Who from "./components/Who";
import Contact from "./components/Contact";
import Works from "./components/Works";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Hire } from "./components/Hire";
import { Worker } from "@react-pdf-viewer/core";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpg");
  &::-webkit-scrollbar {
    display: none;
  }
`;
function App() {
  return (
    <BrowserRouter>
      <Container>
        <Hero />
        <Who />
        <Works />
        <Hire />
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"></Worker>
        ;
        <Contact />
      </Container>
    </BrowserRouter>
  );
}

export default App;
