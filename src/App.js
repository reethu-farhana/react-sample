import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route ,Switch} from 'react-router-dom'

import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Clients from './components/pages/Clients';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    // <>
    //   <Router>
    //     <Navbar />
    //     <Routes>
    //       <Route path='/' exact component={Home} />
    //       <Route path='/services' component={Services} />
    //       <Route path='/products' component={Products} />
    //       <Route path='/sign-up' component={SignUp} />
    //     </Routes>
    //   </Router>
    // </>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/clients' component={Clients} />
        <Route exact path='/sign-up' component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
