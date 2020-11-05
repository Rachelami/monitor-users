import React, { useState } from 'react';
import { postData, updateData } from '../lib/api';
// import { Form, Col, Button } from 'react-bootstrap';
import { countriesArr } from '../countries/countriesArr'

const InputPage = ({ allApiCountriesData }) => {
    const [country, setCountry] = useState('')
    const [numberOfUsers, setNumberOfUsers] = useState(0)

    // const submitChanges = async () => {
    //     const obj = { country: country, users: numberOfUsers }
    //     let newArray = []
    //     for (let i = 0; i < allApiCountriesData.length - 1; i++) {
    //         if (allApiCountriesData[i].country !== country) {
    //             newArray.push(allApiCountriesData[i])
    //         }
    //     }
    //     newArray.push(obj)
    //     updateData(newArray)
    // }

    const submitChanges = () => {
        const obj = { country: country, users: numberOfUsers }
        // postData({ country: 'test1', users: 123 })
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
            <button type="Submit" value="Submit" className='submit-button'>submit</button>
        </form>
    );
};


export default InputPage;