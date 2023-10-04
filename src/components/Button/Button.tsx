import { FC } from 'react';

type PropsType = {
  title: string
  styleType?: string
  handleResetForm?: () => void
  type: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean
};

const Button: FC<PropsType> = ({ title, styleType, handleResetForm, type, disabled }) => {
  return (
    <button
      disabled={disabled ? disabled : false}
      type={type}
      className={`button ${styleType ? 'button_type_next' : ''} ${!disabled ? '' : 'button_type_disabled'}`}
      onClick={handleResetForm}
    >
      {title}
    </button>
  )
};

export default Button;