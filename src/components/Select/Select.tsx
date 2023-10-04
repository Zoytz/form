import arrowUp from '../../images/arrowUp.png';
import arrowDown from '../../images/arrowDown.png';
import { ChangeEvent, FC } from 'react';

type PropsType = {
  selectedOption: string
  handleChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement>) => void
  handleOpenSelect: () => void
  handleCloseSelect: () => void
  isSelectOpen: boolean
};

const Select: FC<PropsType> = ({
  handleChange,
  selectedOption,
  handleCloseSelect,
  handleOpenSelect,
  isSelectOpen }) => {

  const handleSelect = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(e);
    handleCloseSelect();
  };

  return (
    <div className='select'>
      <p className='select__title'>
        Dropdown Title
      </p>
      <div
        onClick={isSelectOpen ? handleCloseSelect : handleOpenSelect}
        className={`select__dropdown ${isSelectOpen ? 'select__dropdown_type_active' : ''}`}
      >
        <p className='select__dropdown-title'>
          {
            selectedOption ?
              selectedOption :
              'Dropdown option'
          }
        </p>
        <img
          src={isSelectOpen ? arrowUp : arrowDown}
          alt='Стрелка'
          className='select__dropdown-image'
        />

        <div className={`select__radios ${isSelectOpen ? 'select__radios_type_open' : ''}`}>
          <label className='select__radio-label'>
            Dropdown option
            <input
              disabled
              name='select'
              value='Dropdown option'
              type='radio'
              className='select__radio'
            />
          </label>
          <label className='select__radio-label'>
            Dropdown option 1
            <input
              required
              checked={selectedOption === 'Dropdown option 1'}
              name='select'
              onChange={handleSelect}
              value='Dropdown option 1'
              type='radio'
              className='select__radio'
            />
          </label>
          <label className='select__radio-label'>
            Dropdown option 2
            <input
              required
              checked={selectedOption === 'Dropdown option 2'}
              name='select'
              onChange={handleSelect}
              value='Dropdown option 2'
              type='radio'
              className='select__radio'
            />
          </label>
        </div>
      </div>

    </div>
  )
};

export default Select;