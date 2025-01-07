import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import media from "../ResponsiveDevices";

import LogoComponent from "../../subComponents/LogoComponent";
import SocialIcons from "../../subComponents/SocialIcons";
import GoBackButton from "../../subComponents/GobackButton";

import homepage from "../../assets/images/travel-website/homepage-demo.webp";
import form from "../../assets/images/travel-website/form.webp";
import colorPalette from "../../assets/images/travel-website/color-palete.png";
import typeface from "../../assets/images/travel-website/typeface.png";

const MainContainer = styled.div`
  position: relative;
  background: ${(props) => props.theme.textWhite};
  color: ${(props) => props.theme.textBlack};
  width: 100vw;
  height: auto;
  padding: 4rem 0;
  line-height: 1.5;

  overflow: hidden;

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
  &.design {
    width: 30%;
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

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;

  ${media.md` 
flex-direction: row;
align-items: center;
justify-content: space-around;
gap: 2rem;
`}
`;
const OrderItemList = styled.ol`
  li {
    span {
      font-weight: bold;
    }
  }
`;

const ListItem = styled.ul`
  li {
    padding: 5px 0;
  }
`;

const TravelAgentTheme = () => {
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
          <MainTitle>Customized Travel Agent Website</MainTitle>
          <SubTitle>
          Capstone Project: Custom WordPress Theme
          </SubTitle>
          <Img className="banner" src={homepage} />
          <Buttons>
            <Btn
              target="_blank"
              to="https://github.com/capstone-fall-2024/best-day-ever"
            >
              Github Repo
            </Btn>
            <Btn target="_blank" to="https://travel-agent-project.ellabach.me/">
              Demo Website
            </Btn>
          </Buttons>
        </Title>

        <MainContent>
          <Main>
            <ContentTitle>Project Overview</ContentTitle>

            <Description>
              <p>
                For my capstone project, as a team, we developed a custom
                WordPress theme (classic theme) for a certified US-based travel
                agent specializing in Disney vacations and Norwegian cruises.
                The project aimed to create a visually appealing, user-friendly
                website that aligned with the client’s goal of attracting
                families and couples in North America.
              </p>
            </Description>
          </Main>

          <Main>
            <ContentTitle>Key Features</ContentTitle>
            <OrderItemList>
              <li>
                <span>Quote Form</span> - AJAX-enabled form for requesting
                travel quotes
              </li>
              <li>
                <span>Special Deals</span> - Highlights exclusive promotions
              </li>
              <li>
                <span>Blog</span> - Space for travel tips and updates
              </li>
              <li>
                <span>Testimonial Carousel</span> - Displays client reviews
                dynamically
              </li>
              <li>
                <span>Specialties Carousel</span> - Showcases offerings like
                Disney vacations, cruises, and all-inclusive packages.
              </li>
              <li>
                <span>Categorized Travel Packages</span> - Deals grouped by
                categories for easier navigation
              </li>
              <li>
                <span>Newsletter Subscription</span> - Encourages visitors to
                stay updated
              </li>
            </OrderItemList>
          </Main>

          <Img src={form} />

          <Main>
            <ContentTitle>Technology Stack</ContentTitle>
            <ListItem>
              <li>WordPress: Built as a custom class theme for full control</li>
              <li>
                SCSS: For styling, ensuring maintainability and a polished
                design
              </li>
              <li>
                JavaScript & jQuery: Used to enhance functionality, such as
                carousels and the progress bar for the quote form
              </li>
              <li>
                Plugins: Contact Form 7 for forms, SmashBalloon for Instagram,
                ACF for custom post types, and a Newsletter plugin for email
                lists and subscription.{" "}
              </li>
            </ListItem>
          </Main>

          <Main>
            <ContentTitle>Design Approach</ContentTitle>

            <Grid>
              <Img className="design" src={colorPalette} />
              <Img className="design" src={typeface} />
            </Grid>
          </Main>

          <Main>
            <ContentTitle>Challenges & Solutions</ContentTitle>

            <ListItem>
              <li>
                Color Balance - Tested and refined the tropical palette for
                proper contrast
              </li>
              <li>
                Carousel Functionality - Switched from Slick.js to Swiper.js for
                smoother infinite looping.
              </li>
              <li>
                AJAX Conflicts - Resolved compatibility issues between the
                AJAX-enabled quote form and the JavaScript progress bar.
              </li>
            </ListItem>

            <Description>
              <p>
                This project strengthened my skills in custom WordPress
                development, SCSS styling, and integrating third-party tools
                while delivering a tailored solution that met the client’s
                vision and business needs.
              </p>
            </Description>
          </Main>
        </MainContent>
      </Container>
    </MainContainer>
  );
};

export default TravelAgentTheme;
