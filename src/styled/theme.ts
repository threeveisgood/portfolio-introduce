import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  black: "#282729",
  lightSlate: "#ccd6f6",
  lightNavy: "#112240",
  green: "#64ffda",
  slate: "#8892b0",
  transition: {
    normal: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
    hamBefore: "top 0.1s ease-in 0.25s,opacity 0.1s ease-in",
    hamBeforeActive: "top 0.1s ease-out,opacity 0.1s ease-out 0.12s",
    hamAfter:
      "bottom 0.1s ease-in 0.25s,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19)",
    hamAfterActive:
      "bottom 0.1s ease-out,transform 0.22s cubic-bezier(0.215,0.61,0.355,1) 0.12s",
  },
  fontSize: {
    xs: "1.3rem",
    sm: "1.4rem",
    md: "1.6rem",
    lg: "1.8rem",
    xl: "2rem",
  },
  media: {
    phone: "@media only screen and (max-width: 480px)",
    phoneLg: "@media only screen and (max-width: 600px)",
    tabPort: "@media only screen and (max-width: 768px)",
    tabLand: "@media only screen and (max-width: 1080px)",
  },
  borderRadius: "0.4rem",
  heading: "3.2rem",
};
