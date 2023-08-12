import React from "react"

export default function List({todoItem, onClicked, id}){

  return <li onClick={()=> onClicked(id)}>{todoItem}</li>
}