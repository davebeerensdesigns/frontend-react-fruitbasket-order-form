import * as React from 'react';



export function Product({value, setValue, name, id}) {
    return (
        <div className="card">
            <span className="name">{name}</span>
            <div className="counter-group">
                <button
                    className="minus"
                    onClick={() => {
                        if(value > 0) { setValue(value - 1) };
                    }}
                >
                    -
                </button>
                <span className="number">{value}</span>
                <button
                    className="plus"
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