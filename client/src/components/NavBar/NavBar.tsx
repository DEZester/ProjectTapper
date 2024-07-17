import {useState} from 'react';
import {theme_default} from "@/styles/theme.ts";
import NavBarButton from "@/components/UI/Buttons/NavBarButton/NavBarButton.tsx";
import {S} from "@/components/NavBar/NavBar.styled.tsx";

export interface NavBarProps {
  open: boolean;
}

const StyledNavBar = S.createStyledNavBar(theme_default);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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