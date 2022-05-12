import {useFormContext} from 'react-hook-form';
import {classNames} from '../../lib/helper';

export default function TextArea(
    {
        label,
        placeholder = '',
        helperText = '',
        id,
        rows = 3,
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
            <label htmlFor={id}
                   className='form-field__label'>
                {label}
            </label>
            <div className='form-field__wrapper'>
                <textarea
                    {...register(id, validation)}
                    rows={rows}
                    {...rest}
                    name={id}
                    id={id}
                    readOnly={readOnly}
                    className={classNames(
                        readOnly
                            ? 'readonly'
                            : errors[id]
                                ? 'form-field__invalid'
                                : '',
                        'form-field'
                    )}
                    placeholder={placeholder}
                    aria-describedby={id}
                />
                {errors[id] && (
                    <span className='form-field__icon form-field__icon-error'>
                        !
                    </span>
                )}
            </div>
            <div className='form-field__meta'>
                {helperText !== '' && (
                    <small className='form-field__helper'>{helperText}</small>
                )}
                {errors[id] && (
                    <span className='form-field__error'>{errors[id].message}</span>
                )}
            </div>
        </>
    );
}