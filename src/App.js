import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import InputPage from './components/InputPage'
import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      
      <div className="app-container">
        <Navbar />
        <Switch>

          <Route exact path="/home">
            <Home />
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
