import React, { useEffect, useState, Suspense, lazy } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import media from "./ResponsiveDevices";
import { NavLink } from "react-router";

import { Projects } from "../data/Projects";

const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const GobackBtn = lazy(() => import("../subComponents/GobackButton"));
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const ProjectComponent = lazy(() => import("./ProjectComponent"));
const AnchorComponent = lazy(() => import("../subComponents/AnchorComponent"));

const MainContainer = styled(motion.div)`
  background-color: #f8f8f8; /* Off-white color */
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  width: 100vw;

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
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.textBlack};
  position: fixed;
  top: 50%;
  left: 1vw;
  transform: rotate(90deg) translate(-50%, 0);
  text-decoration: none;
  z-index: 1;

  ${media.md`
  top: unset;
  left: unset;
  transform: unset;
  bottom: 0;
  right: calc(1rem + 3vw);
`}
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: calc(1rem + 2vw);

  ${media.md`
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  `}

  ${media.lg`
    grid-template-columns: repeat(3, minmax(calc(10rem + 15vw), 1fr));
  `}
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

const ProjectsPage = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);

  return (
    <AnimatePresence mode="wait">
      <MainContainer
        variants={container}
        initial="hidden"
        animate="show"
        exit={{
          opacity: 0,
          transition: { duration: 0.5 },
        }}
      >
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <LogoComponent theme="light" />
            <GobackBtn theme="light" />
            <SocialIcons theme="light" />
            <AnchorComponent numbers={numbers} />
          </Suspense>

          <Center>
            <Grid>
              <Suspense fallback={<div>Loading...</div>}>
                {Projects.map((project) => (
                  <ProjectComponent key={project.id} project={project} />
                ))}
              </Suspense>
            </Grid>
          </Center>

          <Contact to="/contact">
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Say hi...
            </motion.h2>
          </Contact>
        </Container>
      </MainContainer>
    </AnimatePresence>
  );
};

export default ProjectsPage;
