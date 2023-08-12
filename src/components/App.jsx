import React, { useState } from "react";
import Input from "./Input";
import List from "./List";

function App() {
  const [items, setItems] = useState([]);

  

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    
  }

  function removeItem(id){
    setItems((prevValues) => {
      return items.filter((item, index) => {
        return index !== id
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
     <Input onClicked={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <List key={index} id={index} todoItem = {todoItem} onClicked = {removeItem}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
