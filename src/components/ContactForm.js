import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
import styled from "styled-components"
import media from './ResponsiveDevices'

const Form = styled.form`
display: flex;
flex-direction: column;
gap: 2rem;
`

const InputContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 0.5rem;
`

const Label = styled.label`
font-size: 1rem;
font-weight: 700;
color: ${props => props.theme.textRed};
`

const Input = styled.input`
border-radius: 10px;
padding: 0.625rem 1rem;
font-size: 1rem;
border: 1px solid ${props => props.theme.textRed};
background-color: ${props => props.theme.textWhite};

${media.md`
width: 100%;
padding: 0.5rem 1rem;
font-size: 0.85rem;
`}
`

const Textarea = styled.textarea`
height: 5rem;
border-radius: 10px;
padding: 0.625rem 1rem;
font-size: 1rem;
border: 1px solid ${props => props.theme.textRed};
background-color: ${props => props.theme.textWhite};

${media.md`
width: 100%;
padding: 0.5rem 1rem;
font-size: 0.85rem;
`}
`

const Button = styled.button`
color: ${props => props.theme.textBlack};
background-color: ${props => props.theme.textWhite};
border: 1px solid ${props => props.theme.textRed};
border-radius: 10px;
font-size: 1rem;
font-weight: 600;
width: 40%;
padding: 0.625rem 1rem;
cursor: pointer;

&:hover {
    background-color:  ${props => props.theme.textYellow};
    border: 1px solid ${props => props.theme.textYellow};
}
`

const ContactForm = () => {
    const [formData, setFormData] = useState({name: "", email: "", message: ""});
    const [status, setStatus] = useState("")

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit =(e) => {
        e.preventDefault();

        setStatus("Sending...")
        console.log(
            "Service ID:", process.env.REACT_APP_EMAILJS_SERVICE_ID,
            "Template ID:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            "Public Key:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        );
        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
                formData, 
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setStatus("Message sent successfully!");
                    setFormData({name : "", email: "", message: ""})
                },
                (error) => {
                    console.error("FAILED...", error);
                    setStatus("Failed to send message. Please try again!")
                }
            )
    }
  return (
    <Form onSubmit={handleSubmit}>
        <InputContainer>
            <Label htmlFor="name">Full Name</Label>
            <Input 
                type="text"
                placeholder="Your Full Name"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
        </InputContainer>

        <InputContainer>
            <Label htmlFor="email">Email Address</Label>
            <Input 
                type="email"
                placeholder="Enter Your Email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
        </InputContainer>

        <InputContainer>
            <Label htmlFor="name">Full Name</Label>
            <Textarea 
                placeholder="Enter Your Message"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
            />
        </InputContainer>

        <Button type="submit">Submit</Button>
        {status && <p>{status}</p>}
    </Form>
  )
}

export default ContactForm