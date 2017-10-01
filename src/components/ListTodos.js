import React from 'react';
import { Link } from 'react-router-dom';
import API from '../API';

const ListToDos = () => (
    <ul>
      {
        API.all().map(todo => (
          <li key={todo.number}>
            <Link to={`/todos/todo-detail/${todo.number}`}>{todo.name}</Link>
          </li>
        ))
      }
    </ul>
)

export default ListToDos;
