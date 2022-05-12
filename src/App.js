import React, {useState} from 'react';
import './App.css';

import {Product} from './components/Product/Product';

import {FormProvider, useForm} from 'react-hook-form';

import Input from './components/Input/Input';
import Select from './components/Select/Select';
import Radio from './components/Radio/Radio';
import TextArea from './components/TextArea/TextArea';
import Checkbox from './components/Checkbox/Checkbox';

function App() {

    const [strawberryValue, setStrawberryValue] = useState(0);
    const [bananaValue, setBananaValue] = useState(0);
    const [appleValue, setAppleValue] = useState(0);
    const [kiwiValue, setKiwiValue] = useState(0);
    const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = React.useState(false);

    const methods = useForm({mode: 'all'});
    const {handleSubmit} = methods;
    const onSubmit = (data) => {
        const checkoutData = {
            userData: data,
            productData: {
                strawberry: strawberryValue,
                banana: bananaValue,
                apple: appleValue,
                kiwi: kiwiValue
            }
        }
        console.log(checkoutData);
        setIsSuccessfullySubmitted(true);
        methods.reset();
    };

    return (
        <>
            <header>
                <h1>Fruitmand bezorgservice</h1>
            </header>
            <main>
                <section className='products'>
                    <h2>Producten</h2>
                    <Product
                        name='🍓 Aardbeien'
                        id='strawberry'
                        value={strawberryValue}
                        setValue={setStrawberryValue}
                    />
                    <Product
                        name='🍌 Bananen'
                        id='banana'
                        value={bananaValue}
                        setValue={setBananaValue}
                    />
                    <Product
                        name='🍏 Appel'
                        id='apple'
                        value={appleValue}
                        setValue={setAppleValue}
                    />
                    <Product
                        name='🥝 Kiwis'
                        id='kiwi'
                        value={kiwiValue}
                        setValue={setKiwiValue}
                    />
                    <button
                        className='btn btn__block btn__danger'
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
                <section className='checkout'>
                    <h2>Bestelformulier</h2>
                    <FormProvider {...methods}>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className='form'
                        >
                            <div className='form-field__group'>
                                <Input
                                    id='firstName'
                                    label='Voornaam'
                                    placeholder='John'
                                    validation={{
                                        required: 'Voornaam is verplicht'
                                    }}
                                />
                            </div>
                            <div className='form-field__group'>
                                <Input
                                    id='lastName'
                                    label='Achternaam'
                                    placeholder='Doe'
                                    validation={{
                                        required: 'Achternaam is verplicht'
                                    }}
                                />
                            </div>
                            <div className='form-field__group'>
                                <Input
                                    type='number'
                                    id='age'
                                    label='Leeftijd'
                                    placeholder='18'
                                    validation={{
                                        required: 'Leeftijd is verplicht',
                                        min: {
                                            value: 18,
                                            message: 'Minimaal 18 jaar'
                                        }
                                    }}
                                />
                            </div>
                            <div className='form-field__group'>
                                <Input
                                    id='zipcode'
                                    label='Postcode'
                                    placeholder='1234 AA'
                                    validation={{
                                        required: 'Postcode is verplicht',
                                        pattern: {
                                            value: /^(?:NL-)?(\d{4})\s*([A-Z]{2})$/i,
                                            message: 'Ongeldige postcode'
                                        }
                                    }}
                                />
                            </div>
                            <div className='form-field__group'>
                                <Select
                                    id='frequency'
                                    label='Bezorgfrequentie'
                                    defaultValue='weekly'
                                    options={[
                                        {
                                            value: 'weekly',
                                            label: 'iedere week'
                                        },
                                        {
                                            value: 'biWeekly',
                                            label: 'om de week'
                                        },
                                        {
                                            value: 'monthly',
                                            label: 'iedere maand'
                                        }
                                    ]}
                                />
                            </div>
                            <div className='form-field__group'>

                                <Radio
                                    id='timeSpan'
                                    label='Tijdvak'
                                    validation={{
                                        required: 'Tijdvak is verplicht',
                                    }}
                                    options={[
                                        {
                                            label: 'overdag',
                                            value: 'day'
                                        },
                                        {
                                            label: 'avond',
                                            value: 'evening'
                                        }
                                    ]}
                                />
                            </div>

                            <div className='form-field__group'>
                                <TextArea
                                    id='notes'
                                    label='Opmerking'
                                />
                            </div>

                            <div className='form-field__group'>
                                <Checkbox
                                    id='agreements'
                                    label='Ik ga akkoord met de voorwaarden'
                                    validation={{
                                        required: 'U dient akkoord te gaan met de voorwaarden',
                                    }}
                                />
                            </div>


                            <input className='btn btn__primary'
                                   type='submit'
                                   value='Verstuur'
                            />
                        </form>
                    </FormProvider>

                    {isSuccessfullySubmitted && (
                        <div className='alert alert__succes'>Formulier succesvol verzonden!</div>
                    )}
                </section>
            </main>
        </>
    );
}

export default App;
