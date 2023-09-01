import React from 'react'
//Destructuring variable
export default function ex1_destructuring({usernameHint, passwordHint}) {
  const product = {name : "angular", price : 10};
  //Destructuring variable
  const { name, price} = product;
  return (
    <div>
        <h1>{name}</h1>
        <h1>{price}</h1>
    </div>
  )
}

//Structuring variable
// export default function ex1_destructuring({usernameHint, passwordHint}) {
//   //vaiable
//   const product = {name : "angular", price : 10};
//   return (
//     <div>
//         <h1>{product.name}</h1>
//         <h1>{product.price}</h1>
//     </div>
//   )
// }
