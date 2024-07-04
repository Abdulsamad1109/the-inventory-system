import React from 'react'
import { Link } from 'react-router-dom'

const AdminLogin = () => {
  return (
    <div className='font-sans m-0 p-0 bg-white'>
         <header className='bg-slate-800 text-white text-4xl font-bold p-4 text-center'>
            <h1>
            Inventory system
            </h1>
        </header>
        <main className='p-8 max-w-xl mx-auto bg-white shadow-custom'>
        <form className='flex flex-col'>
        <input className='mb-6 p-2 border border-gray-300 rounded-lg outline-none' placeholder='   email'/>
        <input className='mb-6 p-2 border border-gray-300 rounded-lg outline-none' placeholder='   password'/>
        <button className='border rounded-lg bg-coral text-white h-10'>Log in</button>
        <span className='mb-10 text-center'>No account yet? <Link className='text-emerald-400' to='/adminregistration'>create account</Link></span> 
        </form>
        
        </main>
        
    </div>
  )
}

export default AdminLogin
