import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import media from "./ResponsiveDevices";
import styled from "styled-components";
import LiIcon from "../subComponents/LiIcon";
import { ExperiencesData } from "../data/ExperiencesData";

// Styled Components
const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 8rem;
  z-index: 1;
`;

const Title = styled.h3`
  color: ${(props) => props.theme.textYellow};
  font-weight: bold;
  font-size: calc(1.25rem + 1vw);
  text-align: center;

  ${media.md`
    font-size: calc(4em + 1vw);
  `}
`;

const TimelineContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;

  ${media.md`
    width: 75%;
  `}

  ${media.lg`
    width: 60%;
  `}
`;

const Timeline = styled(motion.div)`
  position: absolute;
  

  ${media.sm`
    position: absolute;
    left: 2.25rem;
    top: 0;
    width: 4px;
    height: 100%;
    background-color: ${(props) => props.theme.textYellow};
    transform-origin: top;
  `}
`;

const DetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${media.md`
    margin-left: 1rem;
  `}
`;

const DetailItem = styled.li`
  margin: 1rem auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.md`
    width: 60%;
  `}
`;

const MotionDiv = styled(motion.div)`
  color: ${(props) => props.theme.textWhite};

  h4 {
    font-size: calc(0.5rem + 1vw);
    font-weight: bold;
    margin: 0;

    span {
      color: ${(props) => props.theme.textYellow};
    }
  }

  span {
    font-style: italic;
    font-weight: medium;
    display: block;
    margin: 0.5rem 0;
  }

  p {
    font-size: calc(0.2rem + 0.8vw);

    ${media.md`
      font-size: calc(0.1rem + 0.8vw);
    `}
  }
`;

// Details Component
const Details = ({ position, company, time, address, work }) => {
  const ref = useRef(null);

  return (
    <DetailItem ref={ref}>
      <LiIcon reference={ref} />
      <MotionDiv
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h4>
          {position} <span>@{company}</span>
        </h4>
        <span>
          {time} | {address}
        </span>
        <p>{work}</p>
      </MotionDiv>
    </DetailItem>
  );
};

// Experiences Component
const ExperiencesComponents = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Use transform for smoother timeline scaling
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Wrapper>
      <Title>My Experiences</Title>
      <TimelineContainer ref={ref}>
        <Timeline style={{ scaleY: pathLength }} />
        <DetailsList>
          {ExperiencesData.map((experience) => (
            <Details
              key={experience.id}
              position={experience.position}
              company={experience.company}
              time={experience.time}
              address={experience.address}
              work={experience.work}
            />
          ))}
        </DetailsList>
      </TimelineContainer>
    </Wrapper>
  );
};

export default ExperiencesComponents;
