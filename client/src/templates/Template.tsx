import React, {ReactNode} from 'react';
import NavBar from "@/components/NavBar/NavBar.tsx";

type Props = {
  children: ReactNode;
};

const Template: React.FC<Props> = ({children}) =>
  <div className='template'>
    <NavBar/>

    {children}
  </div>
;

export default Template;