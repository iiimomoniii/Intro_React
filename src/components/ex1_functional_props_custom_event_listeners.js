import React from 'react'

export default function ex1_functional_props_custom_event_listeners({handleSubmit}) {
  return (
    <div >
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input type='text' name='username' id='username'/>
        <br/>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password'></input>
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
