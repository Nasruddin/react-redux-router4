import React from 'react';
import { Link } from 'react-router-dom';
import API from '../API';


const TodoDetail = (props) => {
  const todoDetail = API.get(
    parseInt(props.match.params.number, 10)
  )
  if (!todoDetail) {
    return <div>Sorry not todo was found!</div>
  }
  return (
    <div className="ui tall stacked segment">
      <h1>{todoDetail.name} (#{todoDetail.number})</h1>
      <h2>Status: {todoDetail.status}</h2>
      <button className="ui button">
        <Link to="/todos">Back</Link>
      </button>
    </div>
  );
}

export default TodoDetail;
