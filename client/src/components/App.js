import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Header';
import NotFound from './NotFound';
import Signin from './Signin';
import Signup from './Signup';

const App = () =>  (
      <BrowserRouter>
            <Header />
            <main>
                  <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/signin" component={Signin} />
                        <Route component={NotFound}/>
                  </Switch>
            </main>
      </BrowserRouter>
      
   
);


export default App;
