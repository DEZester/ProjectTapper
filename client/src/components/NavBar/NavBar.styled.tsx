import {theme_default} from "@/styles/theme.ts";
import styled from "styled-components";
import {motion} from "framer-motion";

export namespace S {
  export const createStyledNavBar = (theme: typeof theme_default) => styled(motion.div)`
    position: relative;
    display: flex;
    height: 100vh;
    width: 400px;
    background-color: ${theme.lightPrimaryColor};
  `
}