import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Map from './components/Map'
import InputPage from './components/InputPage'
import { Switch, Route } from "react-router-dom"
import { getData } from "./lib/api";
import { countriesArr } from './countries/countriesArr'

function App() {
  const [geoMapData, setGeoMapData] = useState([])
  const [allApiCountriesData, setAllApiCountriesData] = useState([])

  useEffect(() => {
    async function getAllData() {
      const data = await getData();
      const arr = [['Country', 'Users']]
      setAllApiCountriesData(data.data)
      data.data.map(cityInfo => {
        if (countriesArr.includes(cityInfo.country)) {
          if (typeof cityInfo.users === 'number') {
            arr.push([cityInfo.country, cityInfo.users])
          } else if (!isNaN(cityInfo.users) && typeof cityInfo.users !== 'object') {
            arr.push([cityInfo.country, parseInt(cityInfo.users)])
          }
        }
      })
      setGeoMapData(arr)
    }
    getAllData();
  }, []);


  return (
    <>
      <div className="app-container">
        <Navbar />

        <div className="homepage">
          <Header />
          <Switch>

            <Route exact path="/">
              <Home geoMapData={geoMapData} />
              <Map geoMapData={geoMapData} />
            </Route >

            <Route exact path="/page">
              <InputPage allApiCountriesData={allApiCountriesData} />
            </Route >

          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
