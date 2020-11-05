import React, { useEffect, useState } from 'react';
import { getData, postData, updateData } from '../lib/api';
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
        <div>

            <form onSubmit={() => submitChanges()}>
                Country:
                <select defaultValue={'DEFAULT'} onChange={(event) => changeSelect(event)}>
                    <option value="DEFAULT" disabled hidden>Choose here</option>
                    {countriesArr.map(country => <option key={country}>{country}</option>)}
                </select>

                <input type="number" min="1" onChange={(event) => changeNumber(event)} />
                <button type="Submit" value="Submit" >submit</button>
            </form>

        </div >
    );
};


export default InputPage;