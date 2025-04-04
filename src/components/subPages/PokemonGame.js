import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import media from "../ResponsiveDevices";

import LogoComponent from "../../subComponents/LogoComponent";
import SocialIcons from "../../subComponents/SocialIcons";
import GoBackButton from "../../subComponents/GobackButton";

import homepage from "../../assets/images/pikachu-project/homepage.png";
import gameplay from "../../assets/images/pikachu-project/gameplay-screen.png";
import gameplayDemo from "../../assets/images/pikachu-project/pokeflip.gif";

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
`;

const ImgBanner = styled.img`
  width: 100%;
  max-width: 30%;
  margin-bottom: 1rem;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: calc(1rem + 2vw);

  ${media.md`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 24px;
  `}
`;

const OrderItemList = styled.ol`
  li {
    font-weight: bold;
    ul {
      margin-bottom: 1rem;

      li {
        font-weight: normal;
        span {
          font-weight: bold;
        }
      }
    }
  }
`;

const ListItem = styled.ul`
  li {
    padding: 5px 0;
  }
`;

const PokemonGame = () => {
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
          <MainTitle>PokeFlip - Pokémon Memory Game</MainTitle>
          <SubTitle>
            Side Project: Interactive Memory Game Built with JavaScript
          </SubTitle>
          <ImgBanner src={homepage} />
          <Buttons>
            <Btn
              target="_blank"
              to="https://github.com/ellabach294/pikachu-memory-game"
            >
              Github Repo
            </Btn>
            <Btn target="_blank" to="https://pokemonflip.netlify.app/">
              Demo Website
            </Btn>
          </Buttons>
        </Title>

        <MainContent>
          <Main>
            <ContentTitle>Project Overview</ContentTitle>

            <Description>
              <p>
                PokeFlip is an engaging and interactive memory card game
                inspired by Pokemon. This project demonstrates my skills in
                JavaScript including logic building, API integration, and
                creating dynamic user interfaces. It is deployed on Netlify for
                easy accessibility.
              </p>
            </Description>
          </Main>

          <Grid>
            <Main>
              <ContentTitle>Key Features</ContentTitle>
              <OrderItemList>
                <li>
                  Dynamic Card Generation
                  <ul>
                    <li>
                      The game dynamically fetches Pokémon data from the Pokémon
                      API to create cards with Pokémon images, names and types.
                    </li>
                    <li>
                      Each game session is unique, offering a randomized
                      selection of Pokémon.
                    </li>
                  </ul>
                </li>

                <li>
                  Interactive Gameplay
                  <ul>
                    <li>
                      Players flip two cards at a time, trying to find matching
                      Pokémon.
                    </li>
                    <li>
                      Matches are highlighted, while incorrect pairs flip back
                      after a brief delay.
                    </li>
                  </ul>
                </li>

                <li>
                  Game Progression
                  <ul>
                    <li>
                      Tracks player progress, including matched pairs and the
                      number of moves made.
                    </li>
                  </ul>
                </li>
              </OrderItemList>
            </Main>

            <Img src={gameplay} />
          </Grid>

          <Main>
            <ContentTitle>Technologies Used</ContentTitle>

            <ListItem>
              <li>HTML - Structure of the game interface</li>
              <li>
                CSS - Styling for a visually appealing and responsive design
              </li>
              <li>
                JavaScript - Game logic, including card matching, shuffle
                functionality, and API integration.
              </li>
              <li>
                Pokémon API - Fetches live Pokémon data for dynamic gameplay.
              </li>
              <li>Netlify - Deployed for easy online access.</li>
            </ListItem>
          </Main>

          <Main>
            <ContentTitle>Challenges & Solutions</ContentTitle>

            <OrderItemList>
              <li>
                API Integration
                <ul>
                  <li>
                    <span>Challenge:</span> Fetching and displaying Pokémon data
                    dynamically while ensuring smooth gameplay.
                  </li>
                  <li>
                    <span>Solution:</span> Used JavaScript’s fetch method to
                    retrieve data, then parsed and displayed it efficiency on
                    the cards.
                  </li>
                </ul>
              </li>

              <li>
                Game Logic
                <ul>
                  <li>
                    <span>Challenge:</span> Implementing accurate card-flipping
                    logic and ensuring a smooth user experience.
                  </li>
                  <li>
                    <span>Solution:</span> Developed a robust game loop that
                    handles flips, checks for matches, and resets incorrect
                    pairs, using clean and reusable JavaScript code.
                  </li>
                </ul>
              </li>
            </OrderItemList>
          </Main>

          <Main>
            <ContentTitle>Learning Outcomes</ContentTitle>

            <Description>
              Through PokéFlip, I strengthened my skills in:
              <ListItem>
                <li>
                  JavaScript Skills: Improved my ability to write modular and
                  efficient code for complex interactions.
                </li>
                <li>
                  API Interaction: Gained hands-on experience working with
                  external APIs to fetch and display live data.
                </li>
                <li>
                  Front End Development: Enhanced my ability to combine HTML,
                  CSS, and JavaScript to create an interactive and engaging user
                  interface.
                </li>
                <li>
                  Deployment: Learned the process of deploying static web
                  application using Netlify.
                </li>
              </ListItem>
            </Description>
          </Main>

          <Img src={gameplayDemo} />
        </MainContent>
      </Container>
    </MainContainer>
  );
};

export default PokemonGame;
