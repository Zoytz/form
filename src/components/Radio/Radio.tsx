import { ChangeEvent, FC } from 'react';

type PropsType = {
  title: string
  checked?: boolean
  value: string
  handleChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement>) => void
};

const Radio: FC<PropsType> = ({ title, checked, value, handleChange }) => {
  return (
    <div className='radio'>
      <label className='radio__label'>
        <input
          required
          checked={checked}
          onChange={handleChange}
          value={value}
          name='radio'
          type='radio'
          className='radio__input'
        />
        {
          checked ?
            <span className='radio__circle'>
            </span> :
            null
        }

      </label>
      <p className='radio__title'>
        {title}
      </p>
    </div>
  )
};

export default Radio;