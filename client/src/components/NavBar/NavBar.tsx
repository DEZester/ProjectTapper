import styled from "styled-components";
import {theme_default} from "@/styles/theme.ts";
import NavBarButton from "@/components/UI/Buttons/NavBarButton.tsx";

const createStyledNavBar = (theme: typeof theme_default) => styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 400px;
  background-color: ${theme.lightPrimaryColor};
`

const StyledNavBar = createStyledNavBar(theme_default);

const NavBar = () => {
  return <StyledNavBar>
    NavBar
    {
      //links
    }
    <NavBarButton/>
  </StyledNavBar>
}

export default NavBar