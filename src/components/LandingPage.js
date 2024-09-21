import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../App';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ShoppingCartIcon } from '@heroicons/react/16/solid';

const LandingPage = () => {
    const { products, setProducts, carts, setCarts } = useContext(productsContext);
    const [numberOfGoods, setNumberOfGoods] = useState(0)



    const addToCart = async(i) => {
        const allCarts = products[i];
        setCarts([...carts, allCarts]);
        setNumberOfGoods(numberOfGoods+1)
    
    
    };


    const displayGoods = async () => {
        try {
            const dResult = await axios.get('http://127.0.0.1:7001/goods/see-goods');
            setProducts(dResult.data.allGoods);
        } catch (error) {
            console.log('fetching failed', error);
        }
    };

    useEffect(() => {
        displayGoods();
    }, []);

    return (
        <div className="font-sans">
            <header className="flex items-center justify-between mb-10 p-4 bg-slate-700 text-white">
                <div className=' space-x-2'>
                <Link to="/adminlogin" className="text-lg font-bold">
                    Log In
                </Link>
                <Link to="/adminregistration" className="text-lg font-bold bg-lightcoral text-white px-3 py-2 rounded">
                    Sign Up
                </Link>
                </div>
                <h1 className='text-xl font-bold'>INVENTORY SYSTEM</h1>
                <Link to="/cart" className="bg-lightcora text-white px-3 py-2 relative rounded">
                    <ShoppingCartIcon className='h-8 w-8 text-lightcoral'/>
                    <span className='absolute top-1 right-1 w-5 h-5 bg-white text-lightcoral text-sm rounded-full flex items-center justify-center'>
                        {
                            numberOfGoods
                        }
                    </span>
                </Link>
            </header>
            <div className="border border-slate-700 mx-56 flex flex-wrap justify-center p-4">
                {products.map((product, i) => (
                    <div key={i} className="border border-slate-700 p-4 m-4 text-center bg-white shadow-lg">
                        <h1 className="font-extrabold text-slate-700 text-lg">{product.name}</h1>
                        <h2 className="text-slate-700">${product.price}</h2>
                        <h3 className="text-slate-700">{product.qty} qty left</h3>
                        <button onClick={() => addToCart(i)} className="bg-lightcoral text-white px-3 py-2 mt-2 rounded">
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LandingPage;

































// import React, { useContext, useEffect } from 'react'
// import { useState } from 'react'
// import { productsContext } from '../App'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

// const LandingPage = () => {
//     let {products, setProducts,carts,setCarts} = useContext(productsContext)

//     const myCart =(i)=>{
//         console.log(i);
//         let allCarts = products[i]
//         setCarts([...carts, allCarts])
//     }


//     const displayGoods = async()=>{
//       try {
//         let dResult = await axios.get("http://127.0.0.1:7001/goods/see-goods")
//         console.log(dResult.data.allGoods);
//         setProducts(dResult.data.allGoods)
//       } catch (error) {
//         console.log("fetching failed", error);
//       }
//     }
   

//     useEffect(()=>{
//       displayGoods()
//     },[])

//   return (
//     <div className=' font-sans'>
//         <header className='flex items-center justify-end mr-3 mb-2'>
//         <Link to="/cart" className='bg-green-800 text-white px-1 mt-1 flex item'>MY CART</Link>
//         </header>
//       <div className='border border-green-700 flex align-center mx-auto justify-center '>
//       {
//         products.map((product, i)=><span key={i} className='border border-green-700 py-2 px-2 mx-4 my-5 text-center'>
//           <h1 className='font-extrabold text-blue-950 text-l'>{product.name}</h1>
//           <h1>${product.price}</h1>
//           <h1>{product.qty} qty left</h1>
//           <button onClick={()=>myCart(i)} className='bg-green-800 text-white px-1 mt-1'>Add to cart</button>
//           </span>)
//       }
//       </div>

//     </div>
//   )
// }

// export default LandingPage
