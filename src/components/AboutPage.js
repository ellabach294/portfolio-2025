import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router";
import styled, { ThemeProvider } from "styled-components";

import { colorTheme } from "./Themes";
import media from "./ResponsiveDevices";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import GobackButton from "../subComponents/GobackButton";
import ParticleComponentDark from "../subComponents/ParticleComponentDark";

import headshotImg from "../assets/images/heashot-1.png";
import signature from "../assets/images/signature.png";

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.textBlack};
  width: 100vw;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 8rem 0px;
  align-items: center;

  h2,
  h3,
  h4 {
    font-family: "Ubuntu", serif;
    font-weight: 700;
  }

  ${media.md`
    flex-direction: row;
    justify-content: flex-start;
    margin: 0 8rem;
    padding: 0;
  `}
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.textBlack};
  color: ${(props) => props.theme.textBlack};
  background-color: ${(props) => props.theme.textWhite};
  padding: 2rem;
  width: 60vw;
  height: auto;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  margin: 8rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    color: ${(props) => props.theme.textWhite};
    background-color: ${(props) => props.theme.textBlack};
    border: 1px solid ${(props) => props.theme.textWhite};
  }
`;

const Title = styled.h2`
  font-size: calc(1em + 1vw);
  text-align: center;
`;

const Decscription = styled.div`
  color: ${(props) => props.theme.textBlack};
  font-size: calc(0.5em + 1vw);
  padding: 0.5rem 0;
  padding-right: 2rem;

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ${Main}:hover & {
    color: ${(props) => props.theme.textWhite};
    background-color: ${(props) => props.theme.textBlack};
  }

  ${media.md`
    font-size: calc(0.2em + 1vw);
    padding-right: 2rem;
  `}
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.textWhite};
  position: absolute;
  top: 1rem;
  right: 20%;
  text-decoration: none;
  z-index: 1;
`;

const Image = styled.img`
  ${media.md`
position: absolute;
width: 18vw;
top: 18%;
right: 18%;
`}

  ${media.lg`
top: 18%;
right: 20%;
`}
`;

const Signature = styled.img`
  position: absolute;
  bottom: 10%;
  z-index: 10;

  ${media.lg`
  top: 70%;
  right: 18%;
`}

  ${media.xl`
  right: 25%;
`}
`;

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

const AboutPage = () => {
  return (
    <ThemeProvider theme={colorTheme}>
      <AnimatePresence mode="wait">
        <Box
          variants={container}
          initial="hidden"
          animate="show"
        >
          <GobackButton />
          <LogoComponent />
          <SocialIcons />
          <Contact to="/contact">
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Say hi...
            </motion.h2>
          </Contact>
          <ParticleComponentDark />

          <Main>
            <Title>My Journey in Web Development </Title>

            <Decscription>
              <p>Hello and welcome to my tech haven!</p>
              <p>
                My name is Ella Bach, and I am a web design and development
                student at NAIT, working towards a career as a full-stack
                developer. I am currently on the Dean's Honour List with a GPA
                of 4.0. I bring to my work a combination of technical expertise
                and customer-focused experience.
              </p>

              <p>
                I was born and raised in Ho Chi Minh City, Vietnam, and migrated
                to Australia when I was 17, starting my path of self-discovery
                and development. I obtained a Bachelor of Arts in Hospitality
                and Tourism Management and worked in customer service for almost
                ten years, especially enjoying my role as a corporate travel
                agent. Moved to Vancouver in 2017 and continues my career path
                in the hospitality industry, I enrolled in the Post-Graduate
                diploma in Hospitality Marketing at Douglas College. However,
                the challenges of the COVID-19 pandemic brought unexpected
                barriers for job hunting, and it motivated me to shift my focus.
              </p>

              <p>
                As a person who loves to learn new things and explore different
                path, I began self-learning design and coding, create a
                WordPress site to start selling my DIY Supplies, Figure Toys,
                and Custom Stickers. In 2021, I made the decision to further my
                technology skills by enrolling in NAIT's Digital Media and IT
                with Web Design and Development Concentration. The more I study
                the world of technology, the more I realize how strong it is and
                I need to keep learning to keep up with global innovation.
              </p>

              <p>
                Join me on this exciting journey in coding, where each project
                brings fresh ideas to life. Let's innovate together and create
                something extraordinary!
              </p>
            </Decscription>

            <Image className="pic" src={headshotImg} alt="Profile Headshot" />
          </Main>
          <Signature
            className="signature"
            src={signature}
            alt="Ella Bach Signature"
            width={200}
            height={200}
          />
        </Box>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default AboutPage;
