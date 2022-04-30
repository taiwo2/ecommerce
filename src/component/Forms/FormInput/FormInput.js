import React from 'react';
import './forminput.scss'

const FormInput = ({handleChange, label, ...otherProps}) => {
  return (
    <div className='formRow'>
      {label && (
        <label>{label}</label>
      )}
      <input className='formInput' {...otherProps}/>
    </div>
  );
};

export default FormInput
