import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import { getData } from "../lib/api";
import { countriesArr } from '../countries/countriesArr'


const Map = () => {
    const [geoMapData, setGeoMapData] = useState(['Country', 'Popularity'])

    useEffect(() => {
        async function getAllData() {
            const data = await getData();
            console.log(data.data)
            const arr = []
            data.data.map(cityInfo => {
                if (countriesArr.includes(cityInfo.country)) {
                    if (typeof cityInfo.users === 'number') {
                        arr.push([cityInfo.country, cityInfo.users])
                    } else if (!isNaN(cityInfo.users) && typeof cityInfo.users !== 'object') {
                            arr.push([cityInfo.country, parseInt(cityInfo.users)])
                    }
                }
            })
            console.log(arr)
            setGeoMapData(arr)
        }
        getAllData();
    }, []);



    return (
        <Chart
            width={'500px'}
            height={'300px'}
            chartType="GeoChart"
            data={[
                ['Country', 'Popularity'],
                ['Germany', 200],
                ['United States', 300],
                ['Brazil', 400],
                ['Canada', 500],
                ['France', 600],
                ['RU', 700],
                ['Australia', 100],
            ]}
            // Note: you will need to get a mapsApiKey for your project.
            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
            mapsApiKey="YOUR_KEY_HERE"
            rootProps={{ 'data-testid': '1' }}
        />
    );
};


export default Map;