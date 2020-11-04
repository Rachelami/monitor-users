import React, { useEffect, useState } from 'react';

const Home = ({ geoMapData }) => {
    const [totalUsers, setTotalUsers] = useState(0)

    useEffect(() => {
        let sumUsers = 0
        geoMapData.map(users => {
            if (typeof users[1] === 'number') {
                sumUsers = sumUsers + users[1]
            }
        })
        setTotalUsers(sumUsers)
    }, []);

    return (
        <div>
            <div>Total Users: {totalUsers}</div>
        </div>
    );
};


export default Home;