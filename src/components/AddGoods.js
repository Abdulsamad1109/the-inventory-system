import React, { useContext, useState } from 'react'
import { productsContext } from '../App'
import axios from 'axios'

const AddGoods = () => {
  let {name,setName,price,setPrice,qty,setQty} = useContext(productsContext)
  
    

    const addGoods = async()=>{
        setName("")
        setPrice("")
        setQty("")

        await axios.post("http://127.0.0.1:7001/goods/addGoods", {name,price,qty})

        let result = await axios.get("http://127.0.0.1:7001/goods/see-goods")
        console.log(result);

    }

  return (
    <div className='font-sans m-0 p-0 bg-white'>
       <header className='bg-slate-800 text-white text-4xl font-bold p-4 text-center'>
            <h1>
            Inventory system
            </h1>
        </header>
      <div className='p-8 max-w-xl mx-auto bg-white shadow-custom'>
      <form className='flex flex-col'>
      <input value={name} onInput={(e)=>{setName(e.target.value)}} className='mb-6 p-2 border border-gray-300 rounded-lg outline-none' placeholder='name'/>
      <input value={price} onInput={(e)=>{setPrice(e.target.value)}} className='mb-6 p-2 border border-gray-300 rounded-lg outline-none' placeholder='price'/>
      <input value={qty} onInput={(e)=>{setQty(e.target.value)}} className='mb-6 p-2 border border-gray-300 rounded-lg outline-none' placeholder='quantity'/>
      <button onClick={addGoods} className='border rounded-lg bg-coral text-white h-10'>Add Goods</button>
      </form>
      </div>
    </div>
  )
}

export default AddGoods
