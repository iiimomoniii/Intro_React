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
            {/*set updated username and other value in dictionary of account*/}
            setAccount({...account, username : e.target.value})
          }}
        />
        <br />
        <input type="text" placeholder="Password"
          onChange={e=>{
            {/*set updated password and other value in dictionary of account*/}
            setAccount({...account, password : e.target.value})
          }}
        />
        <br/>
        {/*alert updated account*/}
        <button type="submit" onClick={(e)=>{
          {/*no re-fresh*/}
          e.preventDefault();
          alert(JSON.stringify(account))
        }}>Submit</button>
        <button >Clear</button>
      </form>
    </div>
  );
}
