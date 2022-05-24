import * as React from 'react';



export function Product({value, setValue, name, id}) {
    return (
        <div className={`products__card ${id}`}>
            <span className='products__name'>{name}</span>
            <div className='products__counter'>
                <button
                    className='btn btn__minus'
                    onClick={() => {
                        if(value > 0) { setValue(value - 1) };
                    }}
                >
                    -
                </button>
                <span className='products__number'>{value}</span>
                <button
                    className='btn btn__plus'
                    onClick={() => {
                        setValue(value + 1);
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
}