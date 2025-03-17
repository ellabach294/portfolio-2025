//GoBack Button

import React from "react";
import styled from "styled-components";
import { GobackBtn } from "../components/AllSvgs";
import { NavLink, useLocation } from "react-router-dom";

const Goback = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: ${(props) =>
        props.theme === "light" ? "#FAF9F5" : "#1D1E22"};
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  cursor: pointer;

  &:hover {
    box-shadow: 0 0 8px 6px
      ${(props) =>
        props.theme === "light"
            ? "rgba(155, 43, 32, 0.2)"
            : "rgba(233, 180, 75, 0.2)"};

    svg {
      fill: ${(props) => (props.theme === "light" ? "#9b2b20" : "#e9b44b")};
    }
  }

  svg {
    fill: ${(props) => (props.theme === "light" ? "#1D1E22" : "#FAF9F5")};
    transition: fill 0.3s ease;
  }

  & > *:first-child {
    color: inherit;
  }
`;

const GobackButton = (props) => {
    const location = useLocation();

    const goBackPath = () => {
        if (location.pathname.startsWith("/projects/")) {
            return "/projects";
        }
        return "/";
    };
    return (
        <Goback theme={props.theme}>
            <NavLink to={goBackPath()} role="link">
                <GobackBtn
                    width={40}
                    height={40}
                    fill="currentColor"
                    aria-label="Go back Button"
                />
            </NavLink>
        </Goback>
    );
};

export default GobackButton;
