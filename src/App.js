import React from 'react';
import Home from './Components/Home.js';
import Loginn from './Components/Login/Loginn.js';
import Yourarticles from './Components/Yourarticles/Yourarticles';
import Navigation from './Components/Home/Navigation';
import Request from './Components/Request/Request';
import Alert from './Components/Alert/Alert';
import Addarticle from './Components/Addarticle/Addarticle';
import Newuser from './Components/Login/Newuser';
import HODhome from './Components/HOD/HODhome';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <Route path="/" component={Home} exact />
          <Route path="/Yourarticles" component={Yourarticles} />
          <Route path="/Addarticle" component={Addarticle} />
          <Route path="/Request" component={Request} />
          <Route path="/Alert" component={Alert} />
          <Route path="/Addarticle" component={Addarticle} />
      </BrowserRouter>
  );
}

export default App;
