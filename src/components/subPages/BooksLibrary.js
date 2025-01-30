import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

import media from "../ResponsiveDevices";
import LogoComponent from "../../subComponents/LogoComponent";
import SocialIcons from "../../subComponents/SocialIcons";
import GobackButton from "../../subComponents/GobackButton";

import homepage from "../../assets/images/books-library/homepage.webp";
import aboutpage from "../../assets/images/books-library/about-page.webp";
import detailpage from "../../assets/images/books-library/details-page.webp";
import search from "../../assets/images/books-library/search.webp"
import phonemockup from "../../assets/images/books-library/phone-mockup.webp";

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

  ${media.sm`
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
  display: flex;
  flex-direction: column;
`;

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

const Grid = styled.div`
  display: flex;
  flex-direction: column;

  ${media.md` 
flex-direction: row;
gap: 2rem;
`}
`;

const BooksLibrary = () => {
    return (
        <div>
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
                        <MainTitle>Boundless Books Library App</MainTitle>
                        <SubTitle>
                            Side Project: React-based book library with SCSS styling and
                            OpenLibrary API
                        </SubTitle>

                        <Img className="banner" src={homepage} alt="the screenshot homepage of the book library app"/>
                        <Buttons>
                            <Btn
                                target="_blank"
                                to="https://github.com/ellabach294/boundless-books-library-app"
                            >
                                Github Repo
                            </Btn>
                            <Btn
                                target="_blank"
                                to="https://boundless-books-library.vercel.app/"
                            >
                                Demo Website
                            </Btn>
                        </Buttons>
                    </Title>

                    <MainContent>
                        <Main>
                            <ContentTitle>Project Overview</ContentTitle>
                            <Description>
                                <p>
                                    The Book Library App is designed to provide users with an
                                    easy-to-use interface for accessing books. It includes
                                    features such as:
                                </p>
                                <ul>
                                    <li>A hero banner with search functionality.</li>
                                    <li>
                                        Pagination to display 9 books at a time on the home page and
                                        in search results.
                                    </li>
                                    <li>
                                        Detailed book cards showing cover, title, author, number of
                                        editions and first published year.
                                    </li>
                                    <li>
                                        Links to detailed pages for each book with additional
                                        information.
                                    </li>
                                </ul>
                            </Description>
                        </Main>

                        <Main>
                            <ContentTitle>Key Features</ContentTitle>
                            <OrderItemList>
                                <li>
                                    Home Page
                                    <ul>
                                        <li>Displays trending books with pagination.</li>
                                        <li>
                                            Search funtionality by title keywords with pagination.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    About Page
                                    <ul>
                                        <li>Simple description of the project's purpose</li>
                                    </ul>
                                </li>
                                <li>
                                    BookCard components
                                    <ul>
                                        <li>
                                            Shows book details and a link to view more information
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    BookDetails components
                                    <ul>
                                        <li>
                                            Displays detailed book information including book covers,
                                            book descriptions, author, first published date and
                                            publisher.
                                        </li>
                                    </ul>
                                </li>
                            </OrderItemList>

                            <Grid>
                                <Img src={aboutpage} alt="about page of book library"/>
                                <Img src={detailpage} alt="book details page" />
                            </Grid>
                        </Main>

                        <Main>
                            <ContentTitle>Technology Used</ContentTitle>
                            <Description>
                                <ul>
                                    <li>Frontend: React for component-based UI, React Router for navigation, SCSS for styling.</li>
                                    <li>Backend API: OpenLibrary API for fetching book data.</li>
                                </ul>
                            </Description>
                        </Main>

                        <Main>
                            <ContentTitle>Challenges and Solutions</ContentTitle>
                            <OrderItemList>
                                <li>Data Fetching
                                    <ul>
                                        <li>Using different URL endpoints to fetch various data from OpenLibrary</li>
                                        <li>Utilizing Boomerang to navigate the JSON file and extract the required data, while referencing API documentation to find the correct endpoints</li>
                                    </ul>
                                </li>
                                <li>Handling API Responses
                                    <ul>
                                        <li>Properly parse JSON responses while handling potential errors to ensure data integrity.</li>
                                        <li>Use console.log to debug issues when fetching data, identifying errors, and locating the correct data keys within the JSON file.</li>
                                        <li>When working with authors, research and implement the correct method to fetch and display objects nested inside an array.</li>
                                    </ul>
                                </li>
                                <li>SCSS Styling
                                    <ul>
                                        <li>Create reusable styles for consistent design across components such as color variables, font family, font weight, card design, flex component, etc.</li>
                                        <li>Using media queries to design the app reponsive in different devices.</li>
                                    </ul>
                                </li>
                            </OrderItemList>

                            <Grid>
                                <Img src={phonemockup} alt="the phone mockup of this app for the responsive devices"/>
                                <Img src={search} alt="Searching features display on the homepage"/>
                            </Grid>
                        </Main>

                        <Main>
                            <ContentTitle>Learning Outcomes</ContentTitle>
                            <Description>
                                <ul>
                                    <li>Gained proficiency in React component development.</li>
                                    <li>Learned to implement pagination and search functionality.</li>
                                    <li>Acquired skills in integrating external APIs for data fetching.</li>
                                    <li>Mastered the use of SCSS for responsive design.</li>
                                </ul>
                            </Description>
                        </Main>
                    </MainContent>
                </Container>
            </MainContainer>
        </div>
    );
};

export default BooksLibrary;
