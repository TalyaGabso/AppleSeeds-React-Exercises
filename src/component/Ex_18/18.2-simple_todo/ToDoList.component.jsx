import React, { useState } from 'react';

const ToDoList = ({ itemsList }) => {

  // console.log('itemsList: ', itemsList);
  const [list, setList] = useState(itemsList);

  const onCompletedClick = (index) => {
    const newList = [...list];
    newList[index].completed = newList[index].completed ? false : true;
    setList(newList);
  }
  const renderedItems = itemsList.map((item, index) => {
    return (
      <div key={index} onClick={() => onCompletedClick(index)} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
        {item.name}
      </div>)
  })
  return renderedItems
}
export default ToDoList;