import {useFormContext} from 'react-hook-form';


export default function Radio(
    {
        label,
        placeholder = '',
        helperText = '',
        id,
        options,
        readOnly = false,
        validation,
        ...rest
    }) {
    const {
        register,
        formState: {errors},
    } = useFormContext();

    return (
        <>
            <label className='form-field__label'>
                {label}
            </label>
            {options.map(({label, value}) => {
                return (
                    <span className='form-field__radio' key={label}>
                            <input
                                {...register(id, validation)}
                                {...rest}
                                type='radio'
                                name={id}
                                id={value}
                                readOnly={readOnly}
                                aria-describedby={value}
                            />
                            <label htmlFor={value}
                                   className='form-field__select-label'>
                                {label}
                            </label>
                        </span>
                );
            })}
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