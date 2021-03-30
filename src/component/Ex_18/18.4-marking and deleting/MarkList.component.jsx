import React, { useState } from 'react';

const MarkList = ({ items }) => {
  const [list, setList] = useState(items.map(item => ({ number: item, isChecked: false })));
  console.log(list);

  const renderedItems = items.map((item, index) => {
    return (
      <div  key={index} style={{ padding: "2px" }}>
        <input type="checkbox" name={index} style={{ height: "10px", margin: "5px" }} />
        <label style={{}}>
          {item}
        </label>
      </div>
    )
  })
  return (
    <div>
      <input type="button" value="Delete" />
      <input type="button" value="Reset" />
      {renderedItems}
    </div>
  );
}
export default MarkList;