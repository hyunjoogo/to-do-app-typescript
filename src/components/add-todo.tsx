import React from 'react';

const AddTodo = () => {



  return (
    <div className="add-todo">
      <input
        className="input"
        value=''
        placeholder="AddTodo Todo..."
        onChange={(e) => console.log(e.target.value)}/>
      <button className="button">AddTodo</button>
    </div>
  );
};

export default AddTodo;
