import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import media from "../ResponsiveDevices";

import LogoComponent from "../../subComponents/LogoComponent";
import SocialIcons from "../../subComponents/SocialIcons";
import GoBackButton from "../../subComponents/GobackButton";

import fullPageDemo from "../../assets/images/cooking-recipe/full-page-demo.webp";
import phoneMockup from "../../assets/images/cooking-recipe/phone-mockup.webp";
import devicesMockup from "../../assets/images/cooking-recipe/device-mockup.webp";

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

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${media.md`
flex-direction: row;
justify-content: space-around;
align-items: center;
`}
`;

const OrderItemList = styled.ol`
  li {
    padding: 5px 0;
  }
`;

const ListItem = styled.ul`
  li {
    padding: 5px 0;
  }
`;

const CookingRecipe = () => {
  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <GoBackButton />
        <SocialIcons hiddenOnMobile />

        <Contact to="/contact">
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Say hi...
          </motion.h2>
        </Contact>

        <Title>
          <MainTitle>Anthony Chef Cooking Recipe Landing Page</MainTitle>
          <SubTitle>Case Study: UI/UX Design for Engaging Home Cooks</SubTitle>
          <Img src={fullPageDemo} />
          <Buttons>
            <Btn
              target="_blank"
              to="https://www.figma.com/design/vuhWfXA3y6iv2WADU3VBht/Cooking-Recipe-Landing-Page?node-id=0-1&t=ekXjVMWQpOzwICLz-1"
            >
              Figma Demo
            </Btn>
          </Buttons>
        </Title>

        <MainContent>
          <Main>
            <ContentTitle>Project Overview</ContentTitle>

            <Description>
              <p>
                Anthony Chef, known for his passion for connecting with fellow
                home cooks, envisioned a platform to make recipe collection and
                management seamless. Previously relying on email for
                submissions, Anthony needed a website where users could:
              </p>
              <ul>
                <li>Submit their recipes</li>
                <li>Engage with community activities like quizzes</li>
                <li>
                  Discover new recipes and tips in an organized, user-friendly
                  interface
                </li>
              </ul>
              <p>
                This school project focused on designing a visually appealing
                and functional homepage to meet these goals while showcasing my
                problem-solving and design skills through the design sprint
                process.
              </p>
            </Description>
          </Main>

          <Main>
            <ContentTitle>Target Audience</ContentTitle>
            <Description>
              <p>
                The design is tailored for home cooks and food enthusiasts eager
                to share recipes with Anthony or explore culinary inspiration
                from his curated content.
              </p>
            </Description>
          </Main>

          <Main>
            <ContentTitle>Homepage Features</ContentTitle>

            <Box>
              <Description>
                <OrderItemList>
                  <li>Trending Categories</li>
                  <li>Featured Recipes</li>
                  <li>
                    Join the Community Banner:
                    <ul>
                      <li>Sign Up Button</li>
                      <li>Submit Recipe Button</li>
                    </ul>
                  </li>
                  <li>Introduction about Anthony</li>
                  <li>New Recipes Section</li>
                  <li>Subscription Area</li>
                </OrderItemList>
                <Main>
                  <ContentTitle>Others Features</ContentTitle>
                  <Description>
                    <p style={{ fontWeight: "bold" }}>Recipe Card Design</p>
                    <ListItem>
                      <li>Recipe Tag - Based on the recipe categories</li>
                      <li>Title & Short Description</li>
                      <li>Like Button - Heart Icon</li>
                      <li>See Recipe CTA</li>
                    </ListItem>
                  </Description>
                </Main>
              </Description>

              <Img src={phoneMockup} />
            </Box>
          </Main>

          <Main></Main>

          <Main>
            <ContentTitle>Challenges & Solutions</ContentTitle>

            <Description>
              <ul>
                <li>
                  <span>Challenge:</span> Making the Website more than a recipe
                  hub - encouraging users to explore additional activities with
                  Anthony’s community
                </li>
                <li>
                  <span>Solution:</span> Designed a homepage flow that naturally
                  guides users:
                  <ul>
                    <li>A community banner with engaging calls to action.</li>
                    <li>
                      Weekly quizzes in the navigation menu for easy access.
                    </li>
                    <li>
                      Clear and visible “Submit Recipe” in the navigation and
                      homepage sections.
                    </li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  <span>Challenge:</span> Ensuring the design is responsive and
                  intuitive across devices.
                </li>
                <li>
                  <span>Solution:</span> Created a user-friendly, responsive
                  layout using Figma, incorporating:
                  <ul>
                    <li>Clean separation of categories.</li>
                    <li>onsistent navigation for seamless exploration.</li>
                    <li>Scalable, visually appealing recipe cards.</li>
                  </ul>
                </li>
              </ul>
            </Description>
          </Main>

          <Img src={devicesMockup} />

          <Main>
            <ContentTitle>Process and Learning</ContentTitle>

            <Description>
              <p>
                This project followed the <span>design sprint process,</span>{" "}
                involving:
              </p>
              <ListItem>
                <li>
                  Understanding the Problem: Collaborated on identifying pain
                  points in Anthony’s existing system and goals for the website
                </li>
                <li>
                  Ideation & Testing: Conducted user tests to evaluate homepage
                  flows, improving user engagement and ease of navigation.
                </li>
                <li>
                  Prototyping with Figma: Designated low-fidelity wireframes for
                  the admin dashboard and homepage, followed by high-fidelity
                  designs and an interactive prototype for the homepage.
                </li>
              </ListItem>
            </Description>

            <Description>
              <p>Through this project, I enhanced my skills in:</p>
              <ListItem>
                <li>
                  Problem-solving: Addressing user pain points with effective
                  design solutions.
                </li>
                <li>
                  Prototyping: Crafting intuitive and visually engaging
                  interfaces.
                </li>
                <li>
                  Figma: From wireframes to high-fidelity, responsive designs.
                </li>
              </ListItem>
            </Description>
          </Main>
        </MainContent>
      </Container>
    </MainContainer>
  );
};

export default CookingRecipe;
