import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import media from "./ResponsiveDevices";

import styled from "styled-components";
import LiIcon from "../subComponents/LiIcon";
import { OthersData } from "../data/OthersData";

// Styled Components
const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  z-index: 1;
`;

const Title = styled.h3`
color: ${props => props.theme.textYellow};
  font-weight: bold;
  font-size: calc(1.5em + 1vw);
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
  margin-left: 0.5rem;

  ${media.md`
    margin-left: 1rem;
    `}
`;

const DetailItem = styled.li`
  margin: 1rem auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.md`
    width: 60%;
    `}
`;

const MotionDiv = styled(motion.div)`
    color: ${props => props.theme.textWhite};
  h4 {
    color: ${(props) => props.theme.textYellow};
    font-size: calc(0.7em + 1vw);
    font-weight: bold;
    margin: 0;
  }

  span {
    font-style: italic;
    font-weight: medium;
    display: block;
    margin: 0.5rem 0;
  }

  p {
    font-size: calc(0.5em + 1vw);

    ${media.md`
        font-size: calc(0.1em + 1vw);
        `}
  }
`;

const Details = ({ event, type, time, info }) => {
  const ref = useRef(null);

  return (
    <DetailItem ref={ref}>
      <LiIcon reference={ref} />
      <MotionDiv
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h4>
          {event}
        </h4>
        <span>
          {type} | {time}
        </span>
        <p>{info}</p>
      </MotionDiv>
    </DetailItem>
  );
};

const OthersComponent = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <Wrapper>
      <Title>Volunteer and Hobbies</Title>
      <TimelineContainer ref={ref}>
        <Timeline style={{ scaleY: scrollYProgress }} />
        <DetailsList>
          {OthersData.map((other) => (
            <Details
              key={other.id}
              event={other.event}
              type={other.type}
              time={other.time}
              info={other.info}
            />
          ))}
        </DetailsList>
      </TimelineContainer>
    </Wrapper>
  );
};

export default OthersComponent;
