import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListTodos from '../ListTodos';
import TodoDetail from '../TodoDetail';

const TodoRoute = () => (
  <Switch>
    <Route exact path="/todos" component={ListTodos}/>
    <Route path="/todos/todo-detail/:number" component={TodoDetail}/>
  </Switch>
)

export default TodoRoute;
