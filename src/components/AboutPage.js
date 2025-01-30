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
  opacity: 0.8;
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
              <p>Hello everyone!</p>
              <p>My name is Ella Bach, and I am a web design and development student at NAIT, aiming to become a full-stack developer. Currently on the Dean's Honour List with a GPA of 4.0, I bring technical expertise and customer-focused experience to my work.</p>

              <p>I was born in Ho Chi Minh City, Vietnam, and moved to Australia when I was 17. After completing my Bachelor of Arts in Hospitality and Tourism Management, I worked as a corporate travel agent for over ten years. In Vancouver in 2017, I pursued Hospitality Marketing at Douglas College.</p>

              <p>The COVID-19 pandemic motivated me to explore new fields, leading to my interest in technology. I am passionate about learning and have started self-learning design and coding, creating a WordPress site to sell DIY Supplies, Figure Toys, and Custom Stickers. In 2021, I enrolled in NAIT's Digital Media and IT with Web Design and Development Concentration.</p>

              <p>As I learn more about technology, I realize how wide it is and how important it is to keep studying. I'm looking forward to joining you on this exciting journey—let's make something extraordinary!</p>
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
