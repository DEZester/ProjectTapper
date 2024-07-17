import {theme_default} from "@/styles/theme.ts";
import styled from "styled-components";

export namespace S {
  export const createStyledTheme = (theme: typeof theme_default) => styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: ${theme.thirdColor};
  `;
}