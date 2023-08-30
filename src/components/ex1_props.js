import React from 'react'

export default function ex1_props(props) {
  return (
    <div><h1 style={{color: props.color}}>{props.count}</h1></div>
  )
}
