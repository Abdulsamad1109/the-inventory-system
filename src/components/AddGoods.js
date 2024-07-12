import React, { useContext, useState } from 'react'
import { productsContext } from '../App'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AddGoods = () => {
  let {name,setName,price,setPrice,qty,setQty} = useContext(productsContext)
  
    

    const addGoods = async(e)=>{
      e.preventDefault()
        setName("")
        setPrice("")
        setQty("")

        try {
          await axios.post("http://127.0.0.1:7001/goods/addGoods", {name,price,qty})
          alert("Good added successfully")
        } catch (error) {
          alert("failed to add good")
        }
        // let result = await axios.get("http://127.0.0.1:7001/goods/see-goods")
        // console.log(result);

    }

  return (
    <div className='font-sans m-0 p-0 bg-white'>
       <header className='flex items-center justify-between mb-10 p-4 bg-slate-700 text-white'>
        <Link to="/" className='text-xl font-bold'>Home</Link>
            <h1 className='text-xl font-bold'>
            Inventory system
            </h1>
        <Link to="/adminlogin" className='text-xl font-bold'>Log out</Link>
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
