import { createContext, useContext, useState } from 'react';
import './App.css';
import AddGoods from './components/AddGoods';
import { Route, Routes, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Carts from './components/Carts';
import AdminLogin from './components/AdminLogin';
import AdminRegistration from './components/AdminRegistration';

export const productsContext = createContext()
function App() {
  
  let [products, setProducts] = useState([])
  let [name, setName] = useState("")
  let [price, setPrice] = useState("")
  let [qty, setQty] = useState("")
  let [carts, setCarts] = useState([])

  
  return (
    <div className='font-sans'>

      
      <productsContext.Provider value={{products,setProducts,name,setName,price,setPrice,qty,setQty,carts,setCarts}}>
        {/* <nav className=' p-4 flex space-x-4 text-emerald-600 '>
          <Link to='/'>Home</Link>
          <Link to='/addgoods'>AddGoods</Link>
          <Link to='/adminregistration'>Register Admin</Link>
          <Link to='/adminlogin'>Admin login</Link>
        </nav> */}

        <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/addgoods' element={<AddGoods/>}></Route>
        <Route path='/cart' element={<Carts/>}></Route>
        <Route path='/adminlogin' element={<AdminLogin/>}></Route>
        <Route path='/adminregistration' element={<AdminRegistration/>}></Route>
        </Routes>
      </productsContext.Provider>
    </div>
  );
}


export default App;
