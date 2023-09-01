import React from "react";
import { useState } from "react";

export default function Ex1_useState() {
  const [account, setAccount] = useState({username : "", password : ""});
  return (
    <div>
      <p >#Debug {JSON.stringify(account)}</p>
      <form action="">
        <input type="text" placeholder="Username" 
          onChange={e=>{
            setAccount({username : e.target.value})
          }}
        />
        <br />
        <input type="text" placeholder="Password"
          onChange={e=>{
            setAccount({password : e.target.value})
          }}
        />
        <br/>
        <button type="submit">Submit</button>
        <button>Clear</button>
      </form>
    </div>
  );
}
