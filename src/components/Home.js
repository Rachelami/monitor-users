import React, { useEffect, useState } from 'react';
import { getData } from "../lib/api";

const Home = () => {
    const [users, setUsers] = useState(false)

    useEffect(() => {
        async function getAllData() {
            const data = await getData();
            console.log(data.data)
            sumAllUsers(data.data)
        }
        getAllData();
    }, []);

    const sumAllUsers = (data) => {
        let sumUsers = 0
        for (let i = 0; i < data.length - 1; i++) {
            if (typeof data[i].users === 'number') {
                sumUsers = sumUsers + data[i].users
            } else if (!isNaN(data[i].users) && typeof data[i].users !== 'object') {
                const changeToInt = parseInt(data[i].users)
                if (Number.isInteger(changeToInt)) {
                    sumUsers = sumUsers + changeToInt
                }
            }
        }
        setUsers(sumUsers)
    }

    return (
        <div>
            Home
            <div>Total Users: {users}</div>
            <div></div>
        </div>
    );
};


export default Home;