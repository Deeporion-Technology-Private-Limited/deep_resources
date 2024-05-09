import React from 'react';

interface IInputProps{
  name:string;
  inputType: string;
  placeholder: string;
}

const Input = (props:IInputProps) => {
  return (
    <div>
     <input name="myInput"placeholder={props.placeholder} type={props.inputType}/>
    </div>
  )
}

export default Input
