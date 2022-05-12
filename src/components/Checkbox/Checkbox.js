import {useFormContext} from 'react-hook-form';
import {classNames} from '../../lib/helper';


export default function Checkbox(
    {
        label,
        placeholder = '',
        helperText = '',
        id,
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

            <div className='form-field__wrapper'>
                <label htmlFor={id}
                       className='form-field__select-label'>
                    <input
                        {...register(id, validation)}
                        {...rest}
                        type='checkbox'
                        name={id}
                        id={id}
                        readOnly={readOnly}
                        className={classNames(
                            readOnly
                                ? 'readonly'
                                : errors[id]
                                    ? 'form-field__invalid'
                                    : '',
                            'form-checkbox'
                        )}
                        placeholder={placeholder}
                        aria-describedby={id}
                    />
                    {label}
                </label>
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