import React from 'react'

export default function ex1_props(props) {
  return (
    <div>
        {props.showLabel && <h1>CountLabel: </h1>}
        <h1 style={{color: props.color}}>{props.count}</h1>
    </div>
  )
}
