import React from "react";
import { useState } from "react";

export default function Ex1_useState() {
  const initialState = {username : "", password : ""};
  const [account, setAccount] = useState(initialState);
  return (
    <div>
      <p >#Debug {JSON.stringify(account)}</p>
      <form action="">
        <input type="text" placeholder="Username" value={account.username}
          onChange={e=>{
            {/*set updated username and other value in dictionary of account*/}
            setAccount({...account, username : e.target.value})
          }}
        />
        <br />
        <input type="text" placeholder="Password" value={account.password}
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
        <button onClick={(e)=>{
           {/*no re-fresh*/}
          e.preventDefault();
          {/*clear object*/}
          setAccount(initialState)
        }}>Clear</button>
      </form>
    </div>
  );
}
