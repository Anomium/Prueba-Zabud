import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import login from './component/login';
import RegisCarro from './component/RegisCarro'
import listaCarros from './component/listaCarros'
import RegisUser from './component/RegisUser'

function App() {
  
  return (
    <div className="App">
      <Router>
        <Redirect to="/login"/>
        <Route path="/login" exact component={login}/>
        <Route path="/regisCarro" exact component={RegisCarro}/>
        <Route path="/listCarros" exact component={listaCarros}/>
        <Route path="/registUser" exact component={RegisUser}/>
      </Router>
    </div>
  );
}

export default App;
