import React, {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

const Template: React.FC<Props> = ({children}) =>
  <div>
    {children}
  </div>
;

export default Template;