import {FC, ReactNode} from 'react';
import {theme_default} from "@/styles/theme.ts";
import {S} from "@/templates/Templates.styled.tsx";

const StyledTheme = S.createStyledTheme(theme_default);

interface PropsChildren {
  children: ReactNode
}

const Template: FC<PropsChildren> = ({children}) => (
  <StyledTheme>
    {children}
  </StyledTheme>
);

export default Template;