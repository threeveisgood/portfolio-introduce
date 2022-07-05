import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    black: string;
    lightSlate: string;
    green: string;
    transition: {
      normal: string;
    };
    fontSize: {
      xs: string;
      lg: string;
    };
    media: {
      phone: string;
      tabPort: string;
    };
    boderRadius: string;
  }
}
