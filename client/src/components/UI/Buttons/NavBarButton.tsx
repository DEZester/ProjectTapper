import styled from "styled-components";
import React from "react";

type Props = {
  handler: () => void
}

const Styles = styled.button`
  position: absolute;
  top: 50%;
  right: -40px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;
`

const NavBarButton: React.FC<Props> = ({handler}) => <Styles onClick={handler}>Off</Styles>

export default NavBarButton