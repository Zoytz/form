import { FC, ReactElement } from 'react';

type PropsType = {
  title: string
  children: ReactElement[] | ReactElement
  error?: string
};

const Label: FC<PropsType> = ({ title, children, error }) => {
  return (
    <label className={`label ${error ? 'label_type_error' : ''}`}>
      {title}
      {
        children
      }
    </label>
  )
};

export default Label;