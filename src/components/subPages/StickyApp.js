import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import media from "../ResponsiveDevices";

import LogoComponent from "../../subComponents/LogoComponent";
import SocialIcons from "../../subComponents/SocialIcons";
import GoBackButton from "../../subComponents/GobackButton";

import homepage from "../../assets/images/sticky-app/screenshot.jpg";

const MainContainer = styled.div`
  position: relative;
  background: ${(props) => props.theme.textWhite};
  color: ${(props) => props.theme.textBlack};
  width: 100vw;
  height: auto;
  padding: 4rem 0;
  line-height: 1.5;

  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4 {
    font-family: "Ubuntu", serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.textBlack};
  position: fixed;
  top: 1rem;
  right: calc(1rem + 3vw);
  text-decoration: none;
  z-index: 1;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainTitle = styled.h2`
  color: ${(props) => props.theme.textRed};
  font-size: clamp(2rem, 1.4286rem + 2.8571vw, 4rem);
  margin-bottom: 1rem;
`;

const SubTitle = styled.p`
  color: ${(props) => props.theme.textBlack};
  font-size: clamp(1rem, 1.2143rem + 1.4286vw, 1.5rem);
  font-weight: 600;
`;

const Img = styled.img`
  width: 100%;
  margin-bottom: 1rem;
  &:not(.banner) {
    box-shadow: 0 4px 10px ${(props) => props.theme.textGray};
  }

  ${media.sm`
width: 50%;
&.banner {
    width: 40%;
  }
`}
`;

const Buttons = styled.div`
  display: flex;
  gap: 2rem;
`;

const Btn = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.textRed};
  background: ${(props) => props.theme.textWhite};
  padding: 0.5rem 0.5rem;
  font-size: clamp(0.75rem, 1.2143rem + 1.4286vw, 0.8rem);

  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.textRed};

  &:hover {
    color: ${(props) => props.theme.textGray};
    background: ${(props) => props.theme.textRed};
    border: 1px solid ${(props) => props.theme.textRed};
  }

  ${media.md`
  padding: 0.5rem 1rem;
`}
`;

const MainContent = styled.div`
  display: flex;
  max-width: 1240px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  margin-bottom: 2rem;
  width: 100%;
`;

const ContentTitle = styled.h3`
  color: ${(props) => props.theme.textRed};
  font-size: clamp(1.25rem, 1.2143rem + 1.4286vw, 2rem);
  margin-bottom: 0.5rem;
`;

const Description = styled.div`
display: flex;
flex-direction: column;
span {
          font-weight: bold;
        }
`;

const ListItem = styled.ul`
li {
    padding: 5px 0;
  }
span {
    font-weight: 700;
}
`;

const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 600px;
    aspect-ratio: 16/9;
    margin: 0 auto;
`

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    border: none;
`

const StickyApp = () => {
  return (
    <MainContainer>
      <Container>
        <LogoComponent theme="light" />
        <GoBackButton theme="light" />
        <SocialIcons theme="light" hiddenOnMobile />

        <Contact to="/contact">
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Say hi...
          </motion.h2>
        </Contact>

        <Title>
          <MainTitle>Sticky App - An Electron Desktop App</MainTitle>
          <SubTitle>
            Side Project: Sticky Note build with Electron and Vite for note taking
          </SubTitle>
          <Img className="banner" src={homepage} />
          <Buttons>
            <Btn
              target="_blank"
              to="https://github.com/ellabach294/electron-sticky-note-app"
            >
              Github Repo
            </Btn>
            <Btn target="_blank" to="https://drive.google.com/file/d/1Egfq_Ahd1HA9ZfKKQ-VtQpVWjMzvTzg7/view?usp=drive_link">
              Download for Windows
            </Btn>

          </Buttons>
        </Title>

        <MainContent>
          <Main>
            <ContentTitle>Project Overview</ContentTitle>

            <Description>
              <p>
                Sticky App is a lightweight, cross-platform note-taking application built with Electron, Vite, and TailwindCSS. Designed for efficiency and flexibility, this app allows users to create and manage multiple sticky notes on their desktop. It provides an intuitive and modern user experience, making note-taking seamless and highly customizable.
              </p>
            </Description>

            <ContentTitle>Target Audience</ContentTitle>

            <Description>
              <p>
                Sticky App is ideal for <span>students, professionals, and anyone who needs a quick and organized way to reminders and tasks</span>.
              </p>
            </Description>
          </Main>

          <Main>
            <ContentTitle>Key Features</ContentTitle>
            <ListItem>
              <li><span>Draggable Notes</span> - Move notes freely across the screen for better organization.</li>
              <li><span>Resizable Notes</span> - Adjust note size according to content needs.</li>
              <li><span>Multiple Notes</span> - Open and manage multiple sticky notes simultaneously.</li>
              <li><span>Color Customization</span> - Change note colors to categorize and personalize notes.</li>
              <li><span>Reminder Feature</span> - Set reminders with local system notifications to stay on top of important tasks.</li>
              <li><span>Minimalist UI</span> - A clean and distraction-free interface built with TailwindCSS.</li>
            </ListItem>
          </Main>

          <Main>
            <VideoContainer>
                <Iframe 
                    src="https://www.youtube.com/embed/dxHBQRxLYVo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </VideoContainer>
          </Main>

          <Main>
            <ContentTitle>Challenges & Solutions</ContentTitle>

            <Description>
              <p> Carrying the Color Value Across New Windows in Electron</p>
              <ul>
                <li>
                  <span>Challenge:</span> When opening a new note window, the selected color was not persisting, requiring users to manually select the color again.
                </li>
                <li>
                  <span>Solution:</span> Research Electron's multi-window handling through official documentation, Youtube tutorials, and Stack Overflow discussions. Implemented IPC communication between the main and renderer processes to ensure color consistency across all note window.
                </li>
              </ul>
            </Description>
          </Main>

          <Main>
            <ContentTitle>Learning Outcomes</ContentTitle>

            <Description>
              This project enhanced my skills in : 
              <ListItem>
                <li>
                Gained hands-on experience with Electron for desktop application development.
                </li>
                <li>
                Learned how to handle multi-window communication in Electron.
                </li>
                <li>
                Improved understanding of state management and UI synchronization.
                </li>
                <li>
                Developed skills in trobleshooting and debugging using online resources.
                </li>
                <li>
                Enhanced proficiency in Vite and TailwindCSS for building optimized and modern interfaces    
                </li>
              </ListItem>
            </Description>
          </Main>
        </MainContent>
      </Container>
    </MainContainer>
  );
};

export default StickyApp;
