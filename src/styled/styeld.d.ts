import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    black: string;
    lightSlate: string;
    green: string;
    lightNavy: string;
    slate: string;
    transition: {
      normal: string;
      hamBefore: string;
      hamBeforeActive: string;
      hamAfter: string;
      hamAfterActive: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    media: {
      phone: string;
      phoneLg: string;
      tabPort: string;
      tabLand: string;
    };
    borderRadius: string;
  }
}
