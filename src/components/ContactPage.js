
import React from 'react'
import styled from 'styled-components'
import {AnimatePresence, motion} from "framer-motion"

import media from "./ResponsiveDevices";
import LogoComponent from '../subComponents/LogoComponent'
import GobackBtn from '../subComponents/GobackButton'
import SocialIcons from '../subComponents/SocialIcons'
import ContactForm from './ContactForm';

const MainContainer = styled(motion.div)`
background-color: #f8f8f8; /* Off-white color */
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.1) 2px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 2px, transparent 1px);
  background-size: 50px 50px;
  width: 100vw;
  height: auto;

h2, h3, h4, h5, h6 {
  font-family: "Ubuntu", serif;
  font-weight: 500;
}
`

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.8)`};
width: 100vw;
height: auto;

overflow: hidden;

${media.md`
height: 100vh;
`}
`

const Center = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 8rem 1rem;
`
const Title = styled.h2`
color: ${props => props.theme.textRed};
width: 100%;
text-align: center;
font-size: calc(2em + 1vw);
margin-bottom: 4rem;
`
const Grid = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr;
grid-gap: calc(1rem + 2vw);

${media.md`
  grid-template-columns: repeat(6, minmax(calc(5rem + 8vw), 1fr));
`}
`
const Content = styled.div`
  ${media.md`
    grid-column: 2 / span 2;
    `}


  h3 {
    color: ${props => props.theme.textRed};
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 0;
  }

  p {
    font-size: 1rem;
    margin: 1rem 0;
  }
`

const Form = styled.div`
width: 100%;

${media.md`
grid-column: 4 / span 2;
`}
`

const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }
}

const ProjectsPage = () => {

  return (
    <AnimatePresence mode='wait'>
      <MainContainer
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Container>
          <LogoComponent theme="light" />
          <GobackBtn theme="light"/>
          <SocialIcons theme="light"/>
          <Center>
            <Title>Get In Touch</Title>
            <Grid>
              <Content>
                <h3>Let's Talk</h3>
                <p>
                I'm always excited to explore new collaborations and opportunities! Whether you have a project idea, need assistance, or simply want to connect, feel free to reach out.
                </p>
                <p>Email :  ellabach294@gmail.com</p>
                <p>Phone:  +1 825-436-6499</p>
                <p>Location :  Edmonton, Alberta, Canada</p>
              </Content>

              <Form>
                <ContactForm />
              </Form>
            </Grid>
          </Center>

        </Container>
      </MainContainer>
    </AnimatePresence>
  )
}

export default ProjectsPage