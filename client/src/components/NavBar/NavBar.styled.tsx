import {theme_default} from "@/styles/theme.ts";
import {NavBarProps} from "@/components/NavBar/NavBar.tsx";
import styled from "styled-components";

export namespace S {
  export const createStyledNavBar = (theme: typeof theme_default) => styled.div<NavBarProps>`
    position: relative;
    display: flex;
    height: 100vh;
    width: 400px;
    background-color: ${theme.lightPrimaryColor};
  `
}