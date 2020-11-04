import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import { getData } from "../lib/api";
import { countriesArr } from '../countries/countriesArr'


const Map = ({geoMapData}) => {

    return (
        <Chart
            width={'500px'}
            height={'300px'}
            chartType="GeoChart"
            data={geoMapData}
            // Note: you will need to get a mapsApiKey for your project.
            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
            mapsApiKey="YOUR_KEY_HERE"
            rootProps={{ 'data-testid': '1' }}
        />
    );
};


export default Map;