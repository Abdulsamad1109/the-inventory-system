import React, { useContext, useState } from 'react'
import { productsContext } from '../App'
import axios from 'axios'

const AddGoods = () => {
  let {name,setName,price,setPrice,qty,setQty} = useContext(productsContext)
  
    

    const addGoods = async()=>{
        setName("")
        setPrice("")
        setQty("")

        await axios.post("http://127.0.0.1:7000/goods/addGoods", {name,price,qty})

        let result = await axios.get("http://127.0.0.1:7000/goods/see-goods")
        console.log(result);

    }

    const seeGoods = async()=>{
      let result = await axios.get("http://127.0.0.1:7000/goods/see-goods")
        console.log(result);
    }

  return (
    <div className='max-w-md mx-auto my-20 p-7 bg-white rounded-lg shadow-md flex flex-col items-center justify-center'>
      <div className='flex flex-col space-y-6'>
      <input value={name} onInput={(e)=>{setName(e.target.value)}} className='border border-emerald-400 w-44 rounded-lg h-10 outline-none' placeholder='  name'/>
      <input value={price} onInput={(e)=>{setPrice(e.target.value)}} className='border border-emerald-400 w-44 rounded-lg h-10 outline-none' placeholder='  price'/>
      <input value={qty} onInput={(e)=>{setQty(e.target.value)}} className='border border-emerald-400 w-44 rounded-lg h-10 outline-none' placeholder='  quantity'/>
      <button onClick={addGoods} className='border rounded w-44 bg-emerald-800 text-white h-10'>Add Goods</button>
      </div>
      

      <button onClick={seeGoods}>See Goods</button>
    </div>
  )
}

export default AddGoods
