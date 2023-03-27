import React from 'react';
import './Todo.css';

const Todo = (props) => {
    const { id, userId, title, completed } = props.todo;
    console.log(completed)
    return (
        <div className='todo'>
            <h2>Id: {id}</h2>
            <h3>UserId: {userId}</h3>
            <h3>Title: {title}</h3>
            <p>Is Completed? : {completed ? 'completed' : 'Not Completed'}</p>
        </div>
    );
};

export default Todo;