import {useState} from 'react';
import {theme_default} from "@/styles/theme.ts";
import NavBarButton from "@/components/UI/Buttons/NavBarButton/NavBarButton.tsx";
import {S} from "@/components/NavBar/NavBar.styled.tsx";

const StyledNavBar = S.createStyledNavBar(theme_default);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handlerOpen = () => {
    setIsOpen(prevState => !prevState)
  }

  return <StyledNavBar
    initial={{x: '-100%'}}
    animate={isOpen ? {x: 0} : {x: "-100%"}} // Or your desired animate logic
    transition={{type: "spring", stiffness: 100, damping: 20}}
  >
    NavBar
    {
      //links
    }
    <NavBarButton handler={handlerOpen}/>
  </StyledNavBar>
}

export default NavBar