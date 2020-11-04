import React, { useEffect, useState } from 'react';
import { getData, postData } from "../lib/api";
// import { Form, Col, Button } from 'react-bootstrap';
import {countriesArr} from '../countries/countriesArr'

const InputPage = () => {
    const [country, setCountry] = useState(false)
    const [number, setNumber] = useState(false)

    useEffect(() => {
        async function getAllData() {
            const data = await getData();
        }
        getAllData();
    }, []);


    const submitChanges = () => {
        const obj = { country: country, users: number }
        postData(obj)
    }

    const changeSelect = (event) => {
        setCountry(event.target.value)
    }

    const changeNumber = (event) => {
        setNumber(parseInt(event.target.value))
    }

    return (
        <div>
            inputPage
        
            <form onSubmit={() => submitChanges()}>
                Country:
                <select defaultValue={'DEFAULT'} onChange={(event) => changeSelect(event)}>
                <option value="DEFAULT" disabled hidden>Choose here</option>
                {countriesArr.map(country => <option key={country}>{country}</option>)}
                </select>

                <input type="number" min="1" max="999999" onChange={(event) => changeNumber(event)} />
                <button type="Submit" value="Submit" >submit</button>
            </form>


        </div >
    );
};


export default InputPage;