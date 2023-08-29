import React from 'react'

export default ()=>{

  const var1 = 0;
  const var2 = "hello";
  const var3 = true;
  const var4 = false;
  return (
  <div>
      <h1>Number {var1}</h1> 
      <h1>String {var2}</h1> 
      <h1>Boolean {var3 == true && "true"}</h1> 
      <h1>Boolean Condition{var4 ? <h1>Yes</h1> : <h1>No</h1>}</h1>
    </div>
  )
  
}