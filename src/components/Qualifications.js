import React from "react";
import geoImage from "../assets/images/geometric-black-sky.jpg";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import GobackButton from "../subComponents/GobackButton";
import ExperiencesComponents from "./ExperiencesComponent";
import EducationComponent from "./EducationComponent";
import OthersComponent from "./OthersComponent";
import { NavLink } from "react-router";

const MainContainer = styled(motion.div)`
  background-image: url(${geoImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  position: relative;
  overflow: hidden;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Ubuntu", serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.grayRgba}, 0.1)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Contact = styled(motion.create(NavLink))`
  font-size: clamp(0.75rem, 0.5179rem + 0.5357vw, 1rem);
  color: ${(props) => props.theme.textWhite};
  position: fixed;
  top: 2rem;
  right: calc(1rem + 3vw);
  text-decoration: none;
  z-index: 9;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Qualifications = () => {
  return (
    <AnimatePresence mode="wait">
      <MainContainer variants={container} initial="hidden" animate="show">
        <Container>
          <LogoComponent />
          <GobackButton />
          <Contact to="/contact">
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Say hi...
            </motion.h2>
          </Contact>

          <ExperiencesComponents />
          <EducationComponent />
          <OthersComponent />
        </Container>
      </MainContainer>
    </AnimatePresence>
  );
};

export default Qualifications;
