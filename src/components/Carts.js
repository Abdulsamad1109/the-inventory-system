import React, { useState } from 'react'
import { useContext } from 'react'
import { productsContext } from '../App'
import axios from 'axios'

const Carts = () => {
  let [message, setMessage] = useState("")
  let {carts,setCarts} = useContext(productsContext)


  const checkout = async()=>{
    // let ids = carts.map((cart,i) => cart._id)
    // let qtys = carts.map((cart,i) => cart.qty)

    // let itemsToUpdate ={
    //   ids,
    //   qtys
    // }
    // console.log(itemsToUpdate);

    setCarts([])
    setMessage("YOUR PURCHASE IS SUCCESSFUL")
    
    await axios.post("http://127.0.0.1:7001/goods/updateGoodsQty", )

  }

  return (
    <div className='border border-green-700 mt-10 '>
      <div className='flex align-center mx-auto justify-center'>
      {
        carts.length >0 ? (
        carts.map((cart, i)=><span key={i} className='border border-green-700 py-2 px-2 mx-4 my-5 text-center'>
          <h1 className='font-extrabold text-blue-950 text-l'>{cart.name}</h1>
          <h1>${cart.price}</h1>
          <h1></h1>
          </span>
        )):(<div>{message || "Your cart is empty"}</div>)
          
      }
      </div>
      { carts.length > 0 && (
      <div>
        <button className='border p-2 border rounded-lg bg-coral text-white flex align-center mx-auto justify-center' onClick={checkout}>Check Out</button>
      </div>
      )}
    </div>
  )
}

export default Carts

































// import React, { useState, useContext } from 'react';
// import { productsContext } from '../App';

// const Carts = () => {
//   const [message, setMessage] = useState('');
//   const { carts, setCarts } = useContext(productsContext);

//   const checkout = () => {
//     setCarts([]);
//     setMessage('YOUR PURCHASE IS SUCCESSFUL');
//   };

//   return (
//     <div className='border border-green-700'>
//       <div className='flex align-center mx-auto justify-center'>
//         {carts.length > 0 ? (
//           carts.map((cart, i) => (
//             <span key={i} className='border border-green-700 py-2 px-2 mx-4 my-5 text-center'>
//               <h1 className='font-extrabold text-blue-950 text-l'>{cart.name}</h1>
//               <h1>${cart.price}</h1>
//             </span>
//           ))
//         ) : (
//           <div className='text-green-700 text-center mt-4'>
//             {message || 'YOUR CART IS EMPTY'}
//           </div>
//         )}
//       </div>
//       {carts.length > 0 && (
//         <button
//           className='border text-green-700 flex align-center mx-auto justify-center'
//           onClick={checkout}
//         >
//           Check Out
//         </button>
//       )}
//     </div>
//   );
// };

// export default Carts;

