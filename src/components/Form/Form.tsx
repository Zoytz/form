import { FormEvent, useState } from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import Button from '../Button/Button';
import Buttons from '../Buttons/Buttons';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';
import InputError from '../InputError/InputError';
import InputHint from '../InputHint/InputHint';
import Label from '../Label/Label';
import Radio from '../Radio/Radio';
import Select from '../Select/Select';
import Swich from '../Swich/Swich';

const Form = () => {

  const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const {
    values,
    handleChange,
    errors,
    isFormValid,
    resetForm } = useFormWithValidation();

  const handleToggleRememberMe = () => {
    setIsRememberMeChecked(prev => !prev);
  };

  const handleCheckToggle = () => {
    setIsToggleOn(prev => !prev);
  };

  const handleOpenSelect = () => {
    setIsSelectOpen(true);
  };

  const handleCloseSelect = () => {
    setIsSelectOpen(false);
  };

  const handleResetForm = () => {
    resetForm();
    setIsRememberMeChecked(false);
    setIsToggleOn(false);
    console.log(values)
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify({ ...values, isToggleOn, isRememberMeChecked }));
    handleResetForm();
    console.log(values)
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <Label title='Username'>
        <Input
          value={values.userName || ''}
          handleChange={handleChange}
          name='userName'
          type='text'
          placeholder='Enter username'
          error={errors.userName}
          required={true}
        />
        {
          errors.userName ?
            <InputError>
              {errors.userName}
            </InputError>
            :
            <InputHint>
              Username is required
            </InputHint>
        }
      </Label>
      <Label title='Password'>
        <Input
          value={values.password || ''}
          handleChange={handleChange}
          name='password'
          type='password'
          placeholder='Enter password'
          error={errors.password}
          required={true}
        />
        {
          errors.password ?
            <InputError>
              {errors.password}
            </InputError>
            :
            <InputHint>
              Your password is between 4 and 12 characters
            </InputHint>
        }
      </Label>
      <Label title='Input Text Label' >
        <Input
          value={values.textLabel || ''}
          handleChange={handleChange}
          name='textLabel'
          type='text'
          placeholder='Enter Text Label'
          error={errors.textLabel}
          required={true}
        />
        {
          errors.textLabel ?
            <InputError>
              {errors.textLabel}
            </InputError>
            :
            <InputHint>
              Text Label is required
            </InputHint>
        }
      </Label>
      <Checkbox
        handleCheck={handleToggleRememberMe}
        name='checkbox'
        checked={isRememberMeChecked}
        title='Remember me'
      />
      <Swich
        handleCheckToggle={handleCheckToggle}
        checked={isToggleOn}
      />
      <Radio
        checked={Number(values.radio) === 1}
        handleChange={handleChange}
        title='Radio selection 1'
        value='1'
      />
      <Radio
        checked={Number(values.radio) === 2}
        handleChange={handleChange}
        title='Radio selection 2'
        value='2'
      />
      <Radio
        checked={Number(values.radio) === 3}
        handleChange={handleChange}
        title='Radio selection 3'
        value='3'
      />
      <Select
        handleChange={handleChange}
        selectedOption={values.select}
        handleOpenSelect={handleOpenSelect}
        handleCloseSelect={handleCloseSelect}
        isSelectOpen={isSelectOpen}
      />
      <Buttons>
        <Button
          disabled={false}
          handleResetForm={handleResetForm}
          title='Cancel'
          type='button'
        />
        <Button
          disabled={!isFormValid}
          title='Next'
          styleType='next'
          type='submit'
        />
      </Buttons>
    </form>
  )
};

export default Form;