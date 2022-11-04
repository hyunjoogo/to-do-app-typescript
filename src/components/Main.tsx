import React, {useState} from 'react';
import List from "./List";
import AddTodo from "./add-todo";

const Main = () => {
  const [todoList, setTodoList] = useState([{
    isDone: false,
    content: "",
  }])

  return (
    <div>
      <List todoList={todoList} setTodoList={setTodoList}/>
      <AddTodo/>
    </div>
  );
};

export default Main;
