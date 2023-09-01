import React from 'react'
//Destructuring props => {usernameHint, passwordHint}
export default function ex1_destructuring({usernameHint, passwordHint}) {
  return (
    <div>
        <form>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' id='username' placeholder={usernameHint}/>
            <br/>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' id='password' placeholder={passwordHint}/>
        </form>
    </div>
  )
}

//Structuring
// export default function ex1_destructuring(props) {
//     return (
//       <div>
//           <form>
//               <label htmlFor='username'>Username</label>
//               <input type='text' name='username' id='username' placeholder={props.usernameHint}/>
//               <br/>
//               <label htmlFor='password'>Password</label>
//               <input type='text' name='password' id='password' placeholder={props.passwordHint}/>
//           </form>
//       </div>
//     )
//   }
