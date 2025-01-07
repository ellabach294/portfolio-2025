
import React, {lazy, Suspense} from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from "framer-motion"
import { NavLink, useLocation } from 'react-router'
import media from './ResponsiveDevices'

import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'

const Intro = lazy(() => import('./Intro'));

const MainContainer = styled(motion.div)`
background: ${props => props.theme.textWhite};
width: 100vw;
height: 100vh;

position: relative;

h2, h3, h4, h5, h6 {
  font-family: "Ubuntu", serif;
  font-weight: 500;
}

${media.md`
  overflow: hidden;
`}
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled(motion.create(NavLink))`
font-size: clamp(0.75rem, 0.5179rem + 0.5357vw, 1rem);
color: ${props => props.theme.textWhite};
position: absolute;
top: 2rem;
right: calc(1rem + 3vw);
text-decoration: none;
z-index: 1;

${media.md`
  color: ${props => props.theme.textBlack};
  top: 1rem;
`}
`

const Qualifications = styled(motion.create(NavLink))`
font-size: clamp(0.75rem, 0.5179rem + 0.5357vw, 1rem);
color: ${props => props.theme.textGray};
letter-spacing: 1px;
position: absolute;
right: -5%;
top: 50%;
transform: rotate(-90deg) translate(50%, 50%);
text-decoration: none;
z-index: 1;

${media.md`
  color: ${props => props.theme.textBlack};
  right: calc(1rem + 1vw);
`}
`

const Projects = styled(motion.create(NavLink))`
font-size: clamp(0.75rem, 0.5179rem + 0.5357vw, 1rem);
color: ${props => props.theme.textGray};
letter-spacing: 1px;
position: absolute;
top: 50%;
left: -5%;
transform: rotate(90deg) translate(-50%, 0);
text-decoration: none;
z-index: 1;

${media.md`
  color: ${props => props.theme.textWhite};
  left: calc(1rem + 1vw);
`}
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const About = styled(motion.create(NavLink))`
font-size: clamp(0.75rem, 0.5179rem + 0.5357vw, 1rem);
color: ${props => props.theme.textBlack};
letter-spacing: 1px;
text-decoration: none;
z-index: 1;

${media.md`
  color: ${props => props.theme.textWhite};
`}
`

const MySkills = styled(motion.create(NavLink))`
font-size: clamp(0.75rem, 0.5179rem + 0.5357vw, 1rem);
color: ${props => props.theme.textBlack};
letter-spacing: 1px;
text-decoration: none;
z-index: 1;
`

const DarkDiv = styled.div`
position: absolute;
background-color: ${props => props.theme.textBlack};
top: 0;
bottom: 0;

height: 70vh;
right: 0px;
width: 100%;

z-index: 1;

${media.md`
  right: 50%;
  width: 100%;
  height: 100%;
`}
`

const pageVariants = {
  initial: {opacity: 0, y: 50},
  animate: {opacity: 1, y: 0},
  exit: {opacity: 0, y: -20},
  transition: {duration: 0.8}
}


const Main = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">

      <MainContainer 
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <DarkDiv />
          <Container>
            <LogoComponent />
            <SocialIcons />


            <Contact to="/contact">
              <motion.h2
                initial={{
                  y:-200,
                  transition: { type: 'spring', duration: 1.5, delay: 1}
                }}
                animate={{
                  y:0,
                  transition: { type: 'spring', duration: 1.5, delay: 1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
              >
                Say hi...
              </motion.h2>
            </Contact>

            <Qualifications to="/qualifications">
              <motion.h2
                initial={{
                  y:200,
                  transition: { type: 'spring', duration: 1.5, delay: 1}
                }}
                animate={{
                  y:0,
                  transition: { type: 'spring', duration: 1.5, delay: 1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
              >
                Qualifications
              </motion.h2>
            </Qualifications>

            <Projects to="/projects">
              <motion.h2
                initial={{
                  y:200,
                  transition: { type: 'spring', duration: 1.5, delay: 1}
                }}
                animate={{
                  y:0,
                  transition: { type: 'spring', duration: 1.5, delay: 1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
              >
                Projects
              </motion.h2>
            </Projects>

            <BottomBar>
              <About to='/about'>
                <motion.h2
                  initial={{
                    y:200,
                    transition: { type: 'spring', duration: 1.5, delay: 1}
                  }}
                  animate={{
                    y:0,
                    transition: { type: 'spring', duration: 1.5, delay: 1}
                  }}
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                >
                  About.
                </motion.h2>
              </About>

              <MySkills to='skills'>
                <motion.h2
                  initial={{
                  y:200,
                  transition: { type: 'spring', duration: 1.5, delay: 1}
                }}
                animate={{
                  y:0,
                  transition: { type: 'spring', duration: 1.5, delay: 1}
                }}
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                >
                  My Skills.
                </motion.h2>
              </MySkills>
            </BottomBar>

          </Container>
          
          <Suspense fallback={<div>Loading...</div>}>
            <Intro />
          </Suspense>
      </MainContainer>
    </AnimatePresence>
  )
}

export default Main