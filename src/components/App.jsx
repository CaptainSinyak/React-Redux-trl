import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main from './main/Main';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.less';
import Card from './card/card';
import Error from './main/Error';

const App = () => {
  const dispatch = useDispatch()
  
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/card/:username/:reponame" component={Card} />
          <Route path="/error" component={Error} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;