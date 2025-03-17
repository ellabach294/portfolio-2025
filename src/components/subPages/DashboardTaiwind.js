import React from "react";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import styled from "styled-components";
import media from "../ResponsiveDevices";

import LogoComponent from "../../subComponents/LogoComponent";
import GobackButton from "../../subComponents/GobackButton";
import SocialIcons from "../../subComponents/SocialIcons";

import dashboard from "../../assets/images/dashboard-tailwind/dashboard-mockup.jpg";
import dashboardPage from "../../assets/images/dashboard-tailwind/homepage-desktop.png"

const MainContainer = styled.div`
  position: relative;
  background: ${(props) => props.theme.textBlack};
  color: ${(props) => props.theme.textGray};
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
  color: ${(props) => props.theme.textWhite};
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
  color: ${(props) => props.theme.textYellow};
  font-size: clamp(2rem, 1.4286rem + 2.8571vw, 4rem);
  margin-bottom: 1rem;
`;

const SubTitle = styled.p`
  color: ${(props) => props.theme.textWhite};
  font-size: clamp(1rem, 1.2143rem + 1.4286vw, 1.5rem);
  font-weight: 600;
`;

const Img = styled.img`
  width: 100%;
  margin-bottom: 1rem;

  ${media.md`
width: 50%;
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
    color: ${(props) => props.theme.textBlack};
    background: ${(props) => props.theme.textYellow};
    border: 1px solid ${(props) => props.theme.textYellow};
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
  color: ${(props) => props.theme.textYellow};
  font-size: clamp(1.25rem, 1.2143rem + 1.4286vw, 2rem);
  margin-bottom: 0.5rem;
`;

const Description = styled.div`
  padding: 0 5px;
  span {
    font-weight: bold;
  }
`;

const OrderItemList = styled.ol`
  li {
    padding: 5px 0;
  }
`;

const DashboardTaiwind = () => {
  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <GobackButton />
        <SocialIcons hiddenOnMobile />

        <Contact to="/contact">
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Say hi...
          </motion.h2>
        </Contact>

        <Title>
          <MainTitle>Dashboard TailwindCSS</MainTitle>
          <SubTitle>
            Case Study: UI/UX Design for Web Application Dashboard
          </SubTitle>
          <Img src={dashboard} />
          <Buttons>
            <Btn
              target="_blank"
              to="https://github.com/ellabach294/dashboard-tailwindcss"
            >
              Github Repo
            </Btn>
            <Btn
              target="_blank"
              to="https://dashboard-tailwindcss.ellabach.me/"
            >
              Demo Website
            </Btn>
          </Buttons>
        </Title>

        <MainContent>
          <Main>
            <ContentTitle>Project Overview</ContentTitle>

            <Description>
                <p>This project is a practical exercise in UI/UX design and Tailwind CSS, where I built a prototype dashboard for a team-based project management application. I designed UI components to visualize project progress, messages, and user settings, focusing on creating a clear and responsive user experience. This project allows me to apply dashboard design principles and improve my ability to rapidly develop UIs using Tailwind CSS.</p>
            </Description>
          </Main>

          <Main>
            <ContentTitle>Challenges</ContentTitle>
            <Description>
              <OrderItemList>
                <li>Translating Functionality into Visual Hierarchy
                  <p>Solution: Employed strategic layout, visual cues (e.g, card design, progress bars), and information grouping to prioritize key data and simplify user comprehension.</p>
                </li>

                <li>Achieving responsiveness across diverse screen sizes with TailwindCSS
                  <p>Leveraged Tailwind CSS's responsive utility classes to create a flexible grid system and adaptable component designs, ensuring consistent usability on all devices.</p>
                </li>
              </OrderItemList>
            </Description>
          </Main>

          <Img src={dashboardPage}/>

          <Main>
            <ContentTitle>Learning Outcomes</ContentTitle>
            <Description>
              <OrderItemList>
                <li>Enhanced Tailwind CSS Proficiency
                  <p>Gained practical expertise in utilizing Tailwind's utility classes and customization features for rapid UI development.</p>
                </li>

                <li>Improved Dashboard Design Skills
                  <p>Developed a deeper understanding of dashboard design principles, including information architecture, data visualization, and user flow optimization.</p>
                </li>
              </OrderItemList>
            </Description>
          </Main>
        </MainContent>
      </Container>
    </MainContainer>
  );
};

export default DashboardTaiwind;
