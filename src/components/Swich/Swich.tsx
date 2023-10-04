import { FC } from 'react';

type PropsType = {
  checked: boolean
  handleCheckToggle: () => void
}

const Swich: FC<PropsType> = ({ checked, handleCheckToggle }) => {
  return (
    <div className='swich'>
      <label
        className={`swich__label ${checked ? 'swich__label_type_checked' : ''}`}
      >
        <span
          className={`swich__circle ${checked ? 'swich__circle_type_checked' : ''}`}
        ></span>
        <input
          onChange={handleCheckToggle}
          checked={checked}
          type='checkbox'
          className='swich__input'
        />
      </label>
      <p className='swich__status'>
        {
          checked ?
            'On' :
            'Off'
        }
      </p>
    </div>
  )
};

export default Swich;