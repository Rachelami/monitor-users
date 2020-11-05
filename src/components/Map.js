import React from 'react';
import { Chart } from "react-google-charts";

const Map = ({ geoMapData }) => {

    return (
        <div className="map-border">
            <Chart
                width={'80vw'}
                height={'auto'}
                chartType="GeoChart"
                data={geoMapData}
                // mapsApiKey="YOUR_KEY_HERE"
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    );
};


export default Map;