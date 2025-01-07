import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import media from "./ResponsiveDevices";

import myImage from "../assets/images/personal-image.webp";
import AnimatedJobPosition from "./AnimatedJobPosition";
import { ArrowRightUpIcon } from "./AllSvgs";

const Box = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 70vw;
  height: 70vh;
  display: flex;
  flex-direction: column;

  z-index: 1;

  ${media.md`
  width: 65vw;
  height: 70vh;
  flex-direction: row;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.textWhite} 50%,
        ${(props) => props.theme.textWhite} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.textWhite} 50%,
        ${(props) => props.theme.textWhite} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.textWhite};
  `}

`;

const SubBox = styled.div`
  width: 100%;
  position: relative;
  display: flex;

  .pic {
    display:none; 
  }

  ${media.md`
    width: 100%;

    .pic {
      display: block;
      position: absolute;
      margin-top: 6rem;
      width: 100%;
      bottom: 20%;
      left: 10%;
      height: auto;
      border-radius: 50%;
      box-shadow: 0 0 1.5rem #e9b44b, inset 0 0 1.5rem #e9b44b;
    }
  `}

  ${media.lg`
    .pic {
      bottom: 0;
      left: 20%;
    }
  `}
`;

const MotionImage = motion.img;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${media.md`
  padding: 2rem;
  justify-content: center;
  gap: 1rem;
    `}

  h1 {
    color: ${(props) => props.theme.textYellow};
    font-size: 2rem;
    margin-top: 0;

    ${media.md`
      font-size: 3rem;
      `}
  }

  h3 {
    font-size: 1.25rem;
    ${media.md`
      font-size: 1.75rem;
      `}
  }

  p {
    color: ${(props) => props.theme.textWhite};
    line-height: 1.5;
    font-size: 0.9rem;

    ${media.md`
      font-size: 1rem;
      `}
  }
`;
const DownloadBtn = styled.a`
  width: 35%;
  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  background: ${(props) => props.theme.textYellow};
  border: 2px solid ${(props) => props.theme.textYellow};

  color: ${(props) => props.theme.textBlack};

  border-radius: 10px;

  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.textWhite};
    border: 2px solid ${(props) => props.theme.textRed};
    color: ${(props) => props.theme.textRed};
  }
`;

const Intro = () => {
    return (
        <div>
            <Box>
                <SubBox>
                    <Text>
                        <h1>Hi, I'm Ella</h1>
                        <AnimatedJobPosition />
                        <p>
                            Welcome to my tech haven! I'm a passionate coder and recently
                            graduated from the Northern Alberta Institute of Technology with a
                            diploma in Digital Media and IT, focusing on Web Design and
                            Development. Let's explore the digital world together!
                        </p>
                        <DownloadBtn href="/Ella-Bach-Resume.pdf" download>
                            Resume{" "}
                            <ArrowRightUpIcon width={13} height={13} fill="currentColor" />
                        </DownloadBtn>
                    </Text>
                </SubBox>

                <SubBox>
                    <div>
                        <MotionImage
                            className="pic"
                            src={myImage}
                            alt="Profile"
                            initial={{ y: 0 }}
                            animate={{
                                y: [0, -10, 0],
                                transition: {
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                        />
                    </div>
                </SubBox>
            </Box>
        </div>
    );
};

export default Intro;
