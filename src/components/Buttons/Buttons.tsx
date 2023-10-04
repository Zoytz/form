import { ReactElement } from 'react';

const Buttons = ({children}: {children: ReactElement[]}) => {
  return (
    <div className='buttons'>
      {children}
    </div>
  )
};

export default Buttons;