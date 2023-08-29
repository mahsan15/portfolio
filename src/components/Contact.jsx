import React, { useRef, useState } from "react";
import styled from "styled-components";
import Map from "./Map";
import emailjs from "@emailjs/browser";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 20px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #00008b;
  }
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 228px 1px 1px 1px 1px;
  grid-template-rows: 40px;
  grid-column-gap: 60px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 162px 1px 1px 1px 1px;
    grid-column-gap: 30px;
    
  }
`;

const Icon = styled.img`
  border-radius: 10px;
  padding: 8px;
  width: 20px;
  transition: transform 0.3s;
  cursor: pointer;
  &:hover {
    background-color: red;
    transform: scale(1.3);
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bqi2ro2",
        "template_p5bcc6k",
        ref.current,
        "1Jz6NDSjQZV4ucXLp",
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        },
      );
  };

  return (
    <Section id="contact">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Grid>
              <Title>Contact me </Title>
              <a
                href="https://www.linkedin.com/in/muhammad-ahsan-643ab4245/"
                target="_blank"
              >
                <Icon src="./img/linkedin.png" />
              </a>
              <a href="https://github.com/mahsan15" target="_blank">
                <Icon src="./img/github.png" />
              </a>
              <a
                onClick={() =>
                  navigator.clipboard.writeText("ahsant2709@gmailcom")
                }
              >
                <Icon src="./img/email.png" />
              </a>
              <a onClick={() => navigator.clipboard.writeText("+16478363077")}>
                <Icon src="./img/phone.png" />
              </a>
            </Grid>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. I'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
