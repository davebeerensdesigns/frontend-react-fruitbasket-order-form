import React from 'react';
import './App.css';
import {Product} from "./components/Product/Product";

function App() {

    const [strawberryValue, setStrawberryValue] = React.useState(0);
    const [bananaValue, setBananaValue] = React.useState(0);
    const [appleValue, setAppleValue] = React.useState(0);
    const [kiwiValue, setKiwiValue] = React.useState(0);

    return (
        <>
            <header>
                <h1>Fruitmand bezorgservice</h1>
            </header>
            <main>
                <section className="product-list">
                    <Product
                        name="🍓 Aarbeien"
                        id="strawberry"
                        value={strawberryValue}
                        setValue={setStrawberryValue}
                    />
                    <Product
                        name="🍌 Bananen"
                        id="banana"
                        value={bananaValue}
                        setValue={setBananaValue}
                    />
                    <Product
                        name="🍏 Appel"
                        id="apple"
                        value={appleValue}
                        setValue={setAppleValue}
                    />
                    <Product
                        name="🥝 Kiwi's"
                        id="kiwi"
                        value={kiwiValue}
                        setValue={setKiwiValue}
                    />
                    <button
                        className="reset"
                        onClick={() => {
                            setStrawberryValue(0);
                            setBananaValue(0);
                            setAppleValue(0);
                            setKiwiValue(0);
                        }}
                    >
                        Reset
                    </button>
                </section>
            </main>
        </>
    );
}

export default App;
