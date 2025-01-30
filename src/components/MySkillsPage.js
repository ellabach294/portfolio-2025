import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";

import { colorTheme } from "./Themes";
import media from "./ResponsiveDevices";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import GobackButton from "../subComponents/GobackButton";
import { NavLink } from "react-router";
import ParticleComponent from "../subComponents/ParticleComponent";

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.textWhite};
  width: 100vw;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 8rem 0px;
  justify-content: space-evenly;
  align-items: center;

  h2,
  h3,
  h4 {
    font-family: "Ubuntu", serif;
    font-weight: 700;
  }
  >:nth-child(6) {
      margin-bottom: 4rem;
    }

  ${media.md`
    flex-direction: row;
    height: 100vh;
    padding: 0;

    >:nth-child(6) {
      margin-bottom: 0;
    }
  `}
`;


const Main = styled.div`
  border: 2px solid ${(props) => props.theme.textBlack};
  color: ${(props) => props.theme.textBlack};
  background-color: ${(props) => props.theme.textWhite};
  opacity: 0.9;
  padding: 2rem;
  width: 50vw;
  height: max-content;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.md`
    margin-top: 8rem;
    width: 30vw;
    height: 75vh;
  `}
`;

const Title = styled.h2`
  font-size: calc(1em + 1vw);
  text-align: center;
`;
const Decscription = styled.div`
  color: ${(props) => props.theme.textBlack};
  font-size: calc(0.5em + 1vw);
  padding: 0.5rem 0;

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ${media.md`
    font-size: calc(0.1em + 1vw);
  `}
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.textBlack};
  position: absolute;
  top: 1rem;
  right: calc(1rem + 3vw);
  text-decoration: none;
  z-index: 1;
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

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={colorTheme}>
      <AnimatePresence mode="wait">
      <Box
        variants={container}
        initial="hidden"
        animate="show"
      >
        <GobackButton theme="light" />
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <Contact to="/contact">
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Say hi...
          </motion.h2>
        </Contact>
        <ParticleComponent theme="light" />

        <Main>
          <Title>Designer & Front End Developer</Title>

          <Decscription>
            I specialize in designing responsive and user-friendly interfaces
            that transform frustration to innovation. By combining
            minimalistic design with modern technologies, I deliver engaging
            and accessible web experiences.
          </Decscription>

          <Decscription>
            <strong>Skills</strong>
            <ul>
              <li>HTML5, CSS3, SCSS</li>
              <li>JavaScript, jQuery</li>
              <li>React.js, Next.js</li>
              <li>Responsive Design (Mobile-first Approach)</li>
              <li>Accessibility (WCAG Compliance)</li>
              <li>Figma, Adobe Illustrator, Adobe Photosho</li>
              <li>TailwindCSS, Bootstrap, Bulma UI</li>
              <li>Version Control (Git/Git Hub)</li>
            </ul>
          </Decscription>
        </Main>
        <Main>
          <Title>Back-End Development</Title>

          <Decscription>
            I focus on building secure, scalable, and efficient back-end
            system that seamlessly connect with front-end applications. From
            database to APIs, I build reliable solutions tailored to your
            needs.
          </Decscription>

          <Decscription>
            <strong>Skills</strong>
            <ul>
              <li>PHP (CodeIgniter)</li>
              <li>Node.js</li>
              <li>MySQL, MongoDB</li>
              <li>RESTful APIs</li>
              <li>
                PAuthentication and Authorization (Ion Auth, OAuth, Clerk)
              </li>
              <li>CMS (WordPress, Joomla, Drupal)</li>
              <li>Deployment Tools (Vercel, cPanel, Netlify)</li>
            </ul>
          </Decscription>
        </Main>
      </Box>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default MySkillsPage;
