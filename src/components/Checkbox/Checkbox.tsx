import { FC } from 'react';

type PropsType = {
  title: string
  checked?: boolean
  name: string
  handleCheck: () => void
}

const Checkbox: FC<PropsType> = ({ title, checked, name, handleCheck }) => {

  return (
    <div className='checkbox'>
      <label
        className={`checkbox__label ${checked ? 'checkbox__label_type_checked' : ''}`}
      >
        <input
          onChange={() => handleCheck()}
          checked={checked}
          name={name}
          type='checkbox'
          className='checkbox__input'
        />
      </label>
      <p className='checkbox__title'>
        {title}
      </p>
    </div>
  )
};

export default Checkbox;