import {FC} from 'react';
import NavBar from "@/components/NavBar/NavBar";
import {theme_default} from "@/styles/theme.ts";
import {S} from "@/templates/Templates.styled.tsx";
import MainContent from "@/components/MainContent/MainContent.tsx";

const StyledTheme = S.createStyledTheme(theme_default);


const Template: FC = () => (
  <StyledTheme>
    <NavBar/>
    <MainContent/>
  </StyledTheme>
);

export default Template;