import {useState} from 'react';
import styled from 'styled-components';
import {theme_default} from "@/styles/theme.ts";
import NavBarButton from "@/components/UI/Buttons/NavBarButton.tsx";

interface NavBarProps {
  open: boolean;
}

const createStyledNavBar = (theme: typeof theme_default) => styled.div<NavBarProps>`
  position: relative;
  display: flex;
  height: 100vh;
  width: 400px;
  background-color: ${theme.lightPrimaryColor};
  transform: translateX(${props => props.open ? '0' : '-100%'});
  transition: transform 0.5s ease-in-out;
`

const StyledNavBar = createStyledNavBar(theme_default);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlerOpen = () => {
    setIsOpen(prevState => !prevState)
  }

  return <StyledNavBar open={isOpen}>
    NavBar
    {
      //links
    }
    <NavBarButton handler={handlerOpen}/>
  </StyledNavBar>
}

export default NavBar