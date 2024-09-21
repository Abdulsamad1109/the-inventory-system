import axios from 'axios'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { productsContext } from '../App'


const AdminLogin = () => {
  let {loginEmail,setLoginEmail,loginPassword,setLoginPassword} = useContext(productsContext)
  let navigate = useNavigate()



  const logIn = async(e) =>{

    e.preventDefault()

    try {
      let result = await axios.post("http://127.0.0.1:7001/users/login", {loginEmail,loginPassword}, )
      // if (result.data) {
      //   navigate("/addgoods")
      // }
      // console.log(result.data.jwt_token);
      let jwt_token = result.data.jwt_token
      localStorage.setItem("jwt_token", JSON.stringify(jwt_token))

    } catch (error) {
      console.log("login error", error);
    }

  }


  return (
    <div className='font-sans m-0 p-0 bg-white'>
         <header className='bg-slate-700 text-white text-xl font-bold p-4 text-center'>
            <h1>
            Inventory system
            </h1>
        </header>
        <main className='p-8 max-w-xl mx-auto bg-white shadow-custom'>
        <form className='flex flex-col'>
        <input value={loginEmail} onInput={(e)=>{setLoginEmail(e.target.value)}} className='mb-6 p-2 border border-gray-300 rounded-lg outline-none' placeholder='Email'/>
        <input value={loginPassword} onInput={(e)=>{setLoginPassword(e.target.value)}} className='mb-6 p-2 border border-gray-300 rounded-lg outline-none' placeholder='Password'/>
        <button onClick={logIn} className='border rounded-lg bg-coral text-white h-10'>Log in</button>
        <span className='mb-10 text-center'>No account yet? <Link className='text-emerald-400' to='/adminregistration'>create account</Link></span> 
        </form>
        
        </main>
        
    </div>
  )
}

export default AdminLogin
