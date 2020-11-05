import React, { useState } from 'react';
import { postData } from '../lib/api';
import { countriesArr } from '../countries/countriesArr'

const InputPage = () => {
    const [country, setCountry] = useState('')
    const [numberOfUsers, setNumberOfUsers] = useState(0)


    const submitChanges = () => {
        const obj = { country: country, users: numberOfUsers }
        postData(obj)
    }

    const changeSelect = (event) => {
        setCountry(event.target.value)
    }

    const changeNumber = (event) => {
        setNumberOfUsers(parseInt(event.target.value))
    }

    return (
        <form onSubmit={() => submitChanges()} className="form-container">
            <div className="form-section-wrapper">
                <div>Country:</div>
                <select defaultValue={'DEFAULT'} onChange={(event) => changeSelect(event)} className="form-select">
                    <option value="DEFAULT" disabled hidden>Choose here</option>
                    {countriesArr.map(country => <option key={country}>{country}</option>)}
                </select>
            </div>
            <div className="form-section-wrapper">
                <div>Number Of Users:</div>
                <input type="number" min="0" placeholder="0" onChange={(event) => changeNumber(event)} className="input-users" />
            </div>
            <button type="Submit" value="Submit" className='submit-button'>Submit</button>
        </form>
    );
};


export default InputPage;