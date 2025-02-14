import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import media from "../ResponsiveDevices";

import LogoComponent from "../../subComponents/LogoComponent";
import SocialIcons from "../../subComponents/SocialIcons";
import GoBackButton from "../../subComponents/GobackButton";

import homepage from "../../assets/images/chinese-drama/homepage-demo.webp";
import dashboard from "../../assets/images/chinese-drama/user-dashboard.png";
import detail from "../../assets/images/chinese-drama/detail.png";

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

const Grid = styled.div`
display: flex;
flex-direction: column;

${media.md` 
flex-direction: row;
gap: 2rem;
`}
`
const OrderItemList = styled.ol`
  li {
    font-weight: bold;
    ul {
      margin-bottom: 1rem;

      li {
        font-weight: normal;
        
      }
    }
  }
`;

const ListItem = styled.ul`
li {
    padding: 5px 0;
  }
`;

const ChineseCatalogue = () => {
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
          <MainTitle>Chinese Drama Catalogue Website Application</MainTitle>
          <SubTitle>
            Case Study: Building a CRUD App with PHP and MySQL
          </SubTitle>
          <Img className="banner" src={homepage} />
          <Buttons>
            <Btn
              target="_blank"
              to="https://github.com/ellabach294/chinese-catalogue"
            >
              Github Repo
            </Btn>
            <Btn target="_blank" to="https://ellabach.me/chinese-drama/public/">
              Demo Website
            </Btn>
          </Buttons>
        </Title>

        <MainContent>
          <Main>
            <ContentTitle>Project Overview</ContentTitle>

            <Description>
              <p>
                This project aimed to create an interactive and user-friendly
                Chinese Drama Catalogue website for drama enthusiasts. The
                platform allows users to explore dramas, leave ratings and
                reviews, and manage drama information through comprehensive CRUD
                (Create, Read, Update, and Delete) functionality.
              </p>
            </Description>

            <ContentTitle>Target Audience</ContentTitle>

            <Description>
              <p>
                The platform is designed for Chinese Drama Enthusiasts who enjoy
                discovering, reviewing, and sharing their thoughts about dramas.
              </p>
            </Description>
          </Main>

          <Main>
            <ContentTitle>Key Features</ContentTitle>
            <OrderItemList>
              <li>
                CRUD Functionality
                <ul>
                  <li>
                    Registered users can Add, Edit, or Delete dramas from the
                    catalogue.
                  </li>
                  <li>
                    Dramas can be categorized by release year, broadcast
                    network, and genre.
                  </li>
                </ul>
              </li>

              <li>
                Search and Sorting
                <ul>
                  <li>
                    Basic and advanced search options enable users to filter
                    dramas by keywords, release year, broadcast network, and
                    categories.
                  </li>
                  <li>
                    Sorting options include alphabetical order (A-Z, Z-A) or by
                    release year.
                  </li>
                </ul>
              </li>

              <li>
                Rating and Reviews
                <ul>
                  <li>
                    Registered users can rate dramas from 1 to 5 stars, with
                    half-star precision.
                  </li>
                  <li>
                    Users can write detailed reviews to share their opinions
                  </li>
                </ul>
              </li>

              <li>
                Responsive Design
                <ul>
                  <li>
                    Built with Bootstrap, the application adapts seamlessly to
                    different devices, ensuring a consistent and intuitive user
                    experiences.
                  </li>
                </ul>
              </li>

              <li>
                Secure User Roles
                <ul>
                  <li>
                    Only registered users can interact with critical features,
                    such as submitting dramas, writing reviews, or ratings.
                  </li>
                </ul>
              </li>
            </OrderItemList>
          </Main>

          <Grid>
            <Img src={dashboard} />
            <Img src={detail} />
          </Grid>

          <Main>
            <ContentTitle>Challenges & Solutions</ContentTitle>

            <Description>
              <p> Star Rating and Review System</p>
              <ul>
                <li>
                  <span>Challenge:</span> Dynamically rendering accurate star
                  ratings, including half-stars, based on user reviews.
                </li>
                <li>
                  <span>Solution:</span> Structured the database with three key
                  tables:
                  <ul>
                    <li>drama_catalogue_dtb - Stores drama details</li>
                    <li>user_dtb - Manages registered users</li>
                    <li>user_rating_dtb - Tracks ratings and reviews</li>
                  </ul>
                </li>
              </ul>
              <p>
                This relationships ensured accurate data retrieval for the
                homepage and user dashboard.
              </p>
            </Description>
          </Main>

          <Main>
            <ContentTitle>Learning Outcomes</ContentTitle>

            <Description>
              This project enhanced my skills in : 
              <ListItem>
                <li>
                Planning & Structuring - Created a directory structure and database schema to support dynamic CRUD operations
                </li>
                <li>
                Dynamic PHP Development - Gained proficiency in implementing advanced featured like star ratings and user reviews.
                </li>
                <li>
                Bootstrap Integrations - Developed a fully responsive application with a consistent design across devices
                </li>
                <li>
                Problem-solving - Researched and implemented practical solutions for real-world challenges, such as rendering half-star ratings dynamically.
                </li>
              </ListItem>
            </Description>
          </Main>

        </MainContent>
      </Container>
    </MainContainer>
  );
};

export default ChineseCatalogue;
