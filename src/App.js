import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Map from './components/Map'
import InputPage from './components/InputPage'
import { Switch, Route } from "react-router-dom"
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// am4core.useTheme(am4themes_animated);

function App() {

  return (
    <>
      <Header />
      
      <div className="app-container">
        <Navbar />
        <Switch>

          <Route exact path="/home">
            <div className="homepage">
            <Home />
            <Map/>
            </div>
          </Route >

          <Route exact path="/page">
            <InputPage />
          </Route >

        </Switch>
      </div>
    </>
  );
}

export default App;
