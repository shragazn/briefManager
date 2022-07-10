import "styled-components";

declare module "styled-components" {
  export type BadgeLevel =
    | "primary"
    | "secondary"
    | "user"
    | "sucssess"
    | "error"
    | "warning";
  export interface Font {
    family: string;
    size: string;
    weight: string;
  }
  export interface DefaultTheme {
    colors: {
      background: {
        paper: string;
        main: string;
        sub: string;
      };
      icon: {
        main: string;
        container: string;
      };
      text: {
        primary: string;
        secondary: string;
      };

      //      buttons     //
      primary: {
        main: string;
        text: string;
      };
      user: {
        main: string;
        text: string;
      };
      sucssess: {
        main: string;
        text: string;
      };
      error: {
        main: string;
        text: string;
      };
      warning: {
        main: string;
        text: string;
      };
      secondary: {
        main: string;
        text: string;
      };
    };
    font: {
      h1: Font;
      h2: Font;
      h3: Font;
      main: Font;
    };
  }
}
