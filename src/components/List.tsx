import React, {useState} from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const List = (props) => {

  return (
    <ul>
      {todoList.map((item, index) => {
        return (
          <li key={index}>
            <input type="checkbox" onChange={(e) => e.target.checked}/>
            <p>{item.content}</p>
            {/* 지우기 아이콘 */}
            <FaRegTrashAlt />
          </li>
        )
      })}
    </ul>
  );
};

export default List;
