import { css } from "styled-components";

const device = {
    xs: "400px",
    sm: "600px",
    md: "900px",
    lg: "1280px",
    xl: "1440px",
    xxl: "1920px",
};

const media = {
    xs: (...args) => css`
    @media (min-width: ${device.xs}) {
        ${css(...args)};
    }
    `,
    sm: (...args) => css`
    @media (min-width: ${device.sm}) {
        ${css(...args)};
    }
    `,
    md: (...args) => css`
    @media (min-width: ${device.md}) {
        ${css(...args)};
    }
    `,
    lg: (...args) => css`
    @media (min-width: ${device.lg}) {
        ${css(...args)};
    }
    `,
    xl: (...args) => css`
    @media (min-width: ${device.xl}) {
        ${css(...args)};
    }
    `,
    xxl: (...args) => css`
    @media (min-width: ${device.xxl}) {
        ${css(...args)};
    }
    `,
};

export default media;
