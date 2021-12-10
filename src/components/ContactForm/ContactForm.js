import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const ContactForm = styled.div`
  width: 100%;
  height: 96%;
  position: relative;
  display: flex;
  padding-right: 200px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 100px;
  margin-right: 200px;
  transition: 0.5s;
`;

const TitleContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-right: 2rem;
  margin-left: 40px;
  margin-right: 40px;
`;

const Title = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  font-size: 2.5vw;
  height: 50%;
`;

const SubmitForm = styled.div`
  width: 70%;
`;

const SubmitFormRow = styled.div`
  display: flex;
  padding-bottom: 1rem;
`;

const FormField = styled.div`
  width: 50%;
  margin: 0 10px;
`;

const LableField = styled.label`
  font-family: Arial;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  margin: 0 5px;
`;

const InputField = styled.input.attrs((props) => ({
  type: 'email',
}))`
  width: 100%;
  border-bottom: 1px gray solid;
`;

const TextareaField = styled.textarea`
  border-bottom: 1px gray solid;
  width: 100%;
  height: 80px;
  padding: 12px 20px;
  margin: 10px;
  background-color: #fff;
  font-size: 16px;
  resize: none;
`;

const SubmitButton = styled.button`
  ${tw`
        absolute
        bg-blue-700
        font-normal
        top-3/4
        left-1/4
        left-auto
        -translate-x-1/2
        text-white
        py-2
        px-8
        ml-0
        mt-14
        rounded
        items-center
        text-2xl
        duration-200
        hover:text-gray-400
    `};
`;

function ContactUs() {
  return (
    <ContactForm>
      <TitleContainer>
        <Title>
          <h1>
            Questions?
            <br /> We are here to help!
          </h1>
        </Title>
      </TitleContainer>

      <SubmitForm>
        <SubmitFormRow>
          <FormField>
            <LableField>
              <p>Name</p>
              <br />
            </LableField>
            <InputField></InputField>
          </FormField>
          <FormField>
            <LableField>
              <p>Email</p>
              <br />
            </LableField>
            <InputField></InputField>
          </FormField>
        </SubmitFormRow>
        <SubmitFormRow>
          <FormField>
            <LableField>
              <label>Message</label>
              <br />
            </LableField>
            <TextareaField></TextareaField>
          </FormField>
        </SubmitFormRow>
        <SubmitButton>
          <button type='submit'>Send</button>
        </SubmitButton>
      </SubmitForm>
    </ContactForm>
  );
}

export default ContactUs;
