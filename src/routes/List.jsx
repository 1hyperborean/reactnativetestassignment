import React from 'react'

export default function List({ itemName, itemBody }) {
  return (
    <div>
      <h2>{itemName}</h2>
      <p>{itemBody}</p>
    </div>)
}
