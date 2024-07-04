import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

const AdminRegistration = () => {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("input firstname"),
        lastName: Yup.string().required("input lastname"),
        email: Yup.string().required("input email").email("input a valid email"),
        password: Yup.string().required("input password").min(7, "password must be more than 8 characters"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password")], "confirmpassword must be the same as password")
    })
    const initialValues = {
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
    }

    const myHandleSubmit = async(values)=>{
        
        let {confirmPassword, ...rest} = values
        await axios.post("http://127.0.0.1:7001/users/register", rest)
        
        // let result = await axios.get("http://127.0.0.1:7001/users/see-users")
        // console.log(result.data);
    }

    // const seeUsers = async()=>{
    //     let result = await axios.get("http://127.0.0.1:7001/users/see-users")
    //     console.log(result);
    // }

    let {handleChange, values: {firstName, lastName, email, password, confirmPassword},
    handleSubmit,errors,
    ...formik} = useFormik({
        initialValues,
        onSubmit: myHandleSubmit,
        validationSchema
    })


  return (
    <div className='font-sans m-0 p-0 bg-white'>
        <header className='bg-slate-800 text-white text-4xl font-bold p-4 text-center'>
            <h1>
            Inventory system
            </h1>
        </header>
        <main className='p-8 max-w-xl mx-auto bg-white shadow-custom'>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <input value={firstName} onChange={handleChange} name="firstName" className='mb-6 p-2 border border-gray-300 rounded-lg  outline-none' placeholder='firstname'/>
                <small className='text-red-700 font-bold'>{errors.firstName}</small>
                <input value={lastName} onChange={handleChange} name="lastName" className='mb-6 p-2 border border-gray-300 rounded-lg  outline-none' placeholder='lastname'/>
                <small className='text-red-700 font-bold'>{errors.lastName}</small>
                <input value={email} onChange={handleChange} name="email" className='mb-6 p-2 border border-gray-300 rounded-lg  outline-none' placeholder='email'/>
                <small className='text-red-700 font-bold'>{errors.email}</small>
                <input value={password} onChange={handleChange} name="password" className='mb-6 p-2 border border-gray-300 rounded-lg  outline-none' placeholder='password'/>
                <small className='text-red-700 font-bold'>{errors.password}</small>
                <input value={confirmPassword} onChange={handleChange} name="confirmPassword" className='mb-6 p-2 border border-gray-300 rounded-lg  outline-none' placeholder='confirmpassword'/>
                <small className='text-red-700 font-bold'>{errors.confirmPassword}</small>
                <input className='border rounded-lg bg-coral text-white h-10' type='submit' value="Register"/>
                <span className='mb-10 text-center'>Already have an account? <Link className='text-emerald-400' to='/adminlogin'>login</Link></span>
            </form>
            
        </main>

        <footer className='bg-slate-800 text-white text-center p-4 bottom-0 w-full fixed'>
        <p>&copy; 2024 Adelani Adeleye Gbadebo</p>
    </footer>
        
    {/* <button onClick={seeUsers}>click</button> */}
    </div>
  )
}

export default AdminRegistration

























// <div className='max-w-md mx-auto my-20 p-7 bg-white rounded-lg shadow-md flex flex-col items-center justify-center'>
// <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
//     <input value={firstName} onChange={handleChange} name="firstName" className='border border-emerald-400 w-60 rounded-lg h-10 outline-none' placeholder='    firstname'/>
//     <small className='text-red-700 font-bold'>{errors.firstName}</small>
//     <input value={lastName} onChange={handleChange} name="lastName" className='border border-emerald-400 w-60 rounded-lg h-10 outline-none' placeholder='    lastname'/>
//     <small className='text-red-700 font-bold'>{errors.lastName}</small>
//     <input value={email} onChange={handleChange} name="email" className='border border-emerald-400 w-60 rounded-lg h-10 outline-none' placeholder='    email'/>
//     <small className='text-red-700 font-bold'>{errors.email}</small>
//     <input value={password} onChange={handleChange} name="password" className='border border-emerald-400 w-60 rounded-lg h-10 outline-none' placeholder='    password'/>
//     <small className='text-red-700 font-bold'>{errors.password}</small>
//     <input value={confirmPassword} onChange={handleChange} name="confirmPassword" className='border border-emerald-400 w-60 rounded-lg h-10 outline-none' placeholder='    confirmpassword'/>
//     <small className='text-red-700 font-bold'>{errors.confirmPassword}</small>
//     <input className='border rounded w-60 bg-emerald-800 text-white h-10' type='submit' value="Register"/>
// </form>
// <span className='mb-10'>Already have an account? <Link className='text-emerald-400' to='/adminlogin'>login</Link></span>
// {/* <button onClick={seeUsers}>click</button> */}
// </div>