import React, {Children, cloneElement} from 'react';
import {useFormContext} from 'react-hook-form';
import {classNames} from '../../lib/helper';

export default function Select(
    {
        label,
        helperText,
        id,
        placeholder,
        readOnly = false,
        options,
        validation,
        ...rest
    }) {
    const {
        register,
        formState: {errors},
    } = useFormContext();

    return (
        <>
            <label htmlFor={id}
                   className='form-field__label'>
                {label}
            </label>
            <div className='form-field__wrapper'>
                <select
                    {...register(id, validation)}
                    {...rest}
                    name={id}
                    id={id}
                    className={classNames(
                        readOnly
                            ? 'readonly'
                            : errors[id]
                                ? 'form-field__invalid'
                                : '',
                        'form-field'
                    )}
                    aria-describedby={id}
                >
                    {placeholder && (
                        <option value=''
                                disabled
                                hidden>
                            {placeholder}
                        </option>
                    )}
                    {options.map(({label, value}) => {
                        return (
                            <option key={value} value={value}>{label}</option>
                        );
                    })}
                </select>

                {errors[id] && (
                    <span className='form-field__icon form-field__icon-error'>
                        !
                    </span>
                )}
            </div>
            <div className='form-field__meta'>
                {helperText !== '' && (
                    <p className='form-field__helper'>{helperText}</p>
                )}
                {errors[id] && (
                    <span className='form-field__error'>{errors[id].message}</span>
                )}
            </div>
        </>
    );
}