import { ChangeEvent, FC } from 'react';

type PropsType = {
  placeholder: string
  type: string
  error?: string
  name: string
  required: boolean
  value: string
  handleChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement>) => void
};

const Input: FC<PropsType> = ({
  placeholder,
  type,
  error,
  name,
  required,
  value,
  handleChange }) => {

  return (
    <input
      onChange={handleChange}
      value={value}
      required={required}
      name={name}
      type={type}
      className={`input ${error ? 'input_type_error' : ''}`}
      placeholder={placeholder}
    />
  )
};

export default Input;