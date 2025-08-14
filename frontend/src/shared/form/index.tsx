import React from 'react';
import s from './FormInput.module.scss';

interface FormInputProps {
  label: string;
  name: string;
  type?: string ;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
}) => {
  return (
    <div className={s.form}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={error ? s.inputError : ''}
      />
      {error && <div className={s.errorText}>{error}</div>}
    </div>
  );
};
