import React, { useEffect, useState } from 'react';
import { getData } from "../lib/api";

const Home = ({ geoMapData }) => {
    const [users, setUsers] = useState(0)

    useEffect(() => {
        let sumUsers = 0
        geoMapData.map(user => {
            if (typeof user[1] === 'number') {
                sumUsers = sumUsers + user[1]
            }
        })
        setUsers(sumUsers)
    }, []);

    return (
        <div>
            Home
            <div>Total Users: {users}</div>
            <div></div>
        </div>
    );
};


export default Home;