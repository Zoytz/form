const InputError = ({children}: {children: string}) => {
  return (
    <span className='error'>
      { children }
    </span>
  )
};

export default InputError;