import {ReactNode, FC} from 'react';
import styled from "styled-components";
import NavBar from "@/components/NavBar/NavBar";
import {theme_default} from "@/styles/theme.ts";

interface Props {
  children: ReactNode;
}

const createStyledTheme = (theme: typeof theme_default) => styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: ${theme.thirdColor};
`;

const StyledTheme = createStyledTheme(theme_default);

const Template: FC<Props> = ({children}) => (
  <StyledTheme>
    <NavBar/>
    {children}
  </StyledTheme>
);

export default Template;