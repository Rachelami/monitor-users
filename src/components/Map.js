import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

const Map = ({ geoMapData }) => {
    const [updateMap, setUpdateMap] = useState(0)

    useEffect(() => {
        setTimeout(() => setUpdateMap(updateMap + 1), 60000);
    }, [updateMap]);

    return (
        <div className='map-border'>
            <Chart
                width={'70vw'}
                height={'auto'}
                chartType='GeoChart'
                data={geoMapData}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    );
};


export default Map;