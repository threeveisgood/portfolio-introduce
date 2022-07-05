import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  black: "#282729",
  lightSlate: "#ccd6f6",
  green: "#64ffda",
  transition: {
    normal: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
  },
  fontSize: {
    xs: "1.3rem",
    lg: "1.8rem",
  },
  media: {
    phone: "@media only screen and (max-width: 480px)",
    tabPort: "@media only screen and (max-width: 768px)",
  },
  boderRadius: "0.4rem",
};
