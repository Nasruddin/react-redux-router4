import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../Home';
import Todos from '../Todos';
import StatusComponent from '../StatusComponent';


const MainRoute = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/todos" component={Todos} />
    <Route path="/status" component={StatusComponent} />
  </Switch>
)

export default MainRoute;
