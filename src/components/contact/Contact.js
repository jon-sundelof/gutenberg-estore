import React, { useState } from "react";
import styled from "styled-components";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(message, name, email);
    setEmail("");
    setMessage("");
    setName("");
  };

  return (
    <PageWrapper>
      <AboutWrapper>
        <Title>About Us!</Title>
        <AboutText>
          We are a team passionate about making your experience as good as
          possible. We aim to not only give you the best experience but to also
          give you a new perspective of life itself. We hope you will enjoy this
          website as we enjoyed creating it.
        </AboutText>
      </AboutWrapper>
      <FormWrapper>
        <Form onSubmit={onFormSubmit}>
          <ContactUs>Contact Us!</ContactUs>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name..."
            required
          ></Input>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email..."
            required
          ></Input>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message..."
            required
          ></Textarea>
          <ButtonForm>SEND MESSAGE</ButtonForm>
        </Form>
      </FormWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  height: 100vh;
  background-color: #c7dbea;
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const FormWrapper = styled.div`
  /* margin-top: 5%; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
  height: 60vh;
  background-color: #c7dbea;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-top: 5%;
  color: #3d3344;
`;

const ContactUs = styled.h1`
  font-size: 3rem;
  color: #3d3344;
`;

const AboutText = styled.p`
  font-size: 2rem;
  width: 700px;
  color: #3d3344;
  font-family: "Merriweather", serif;
`;

const Form = styled.form`
  height: 450px;
  width: 550px;
  margin-bottom: 2%;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
`;

const Input = styled.input`
  color: rgb(0, 0, 0);
  padding: 12px;
  width: 90%;
  height: 12%;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 2px 2px 3px 3px grey;
  outline: none;
  background: none;
  font-size: 18px;
  font-family: "Merriweather", serif;

  &:placeholder {
    color: rgb(0, 0, 0);
  }

  &:focus {
    background: none;
  }
`;

const Textarea = styled.textarea`
  font-family: "Merriweather", serif;
  color: rgb(0, 0, 0);
  padding: 12px;
  width: 90%;
  height: 30%;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 2px 2px 3px 3px grey;
  outline: none;
  background: none;
  font-size: 18px;
  resize: none;

  &:placeholder {
    color: rgb(0, 0, 0);
  }
`;

const ButtonForm = styled.button`
  font-family: "Merriweather", serif;
  border: 1px solid black;
  outline: none;
  padding: 10px;
  width: 40%;
  height: 12%;
  cursor: pointer;
  font-size: 16px;
  background: none;
  border-radius: 8px;
`;

export default Contact;
