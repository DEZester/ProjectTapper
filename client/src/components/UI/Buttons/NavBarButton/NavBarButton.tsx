import React from "react";
import {S} from "./NavBarButton.styled";

type Props = {
  handler: () => void
}

const NavBarButton: React.FC<Props> = ({handler}) => <S.NavBarButton onClick={handler}>Off</S.NavBarButton>

export default NavBarButton