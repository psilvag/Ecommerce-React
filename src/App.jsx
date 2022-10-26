import './App.css'
import { Route, Routes } from 'react-router-dom'

import Header from './components/shared/Header'
import Login from './pages/Login'
import Home from './pages/Home'
import ProductId from './pages/ProductId'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'


function App() {
  //DOCUMENTACION REAL
  //https://documenter.getpostman.com/view/5028918/UVypxw3W#8d80d26a-7c0a-4283-a272-253ae4144624

  
  // useEffect(() => {
  //   const URL=`https://ecommerce-api-react.herokuapp.com/api/v1/users`
    
  //   // WE CREATE THE ACCOUNT AND THEN WE COMMENT
       
  //   // const data={
  //   //   firstName:'Pablo',
  //   //   lastName:'Silva',
  //   //   email:'psilvag@gmail.com',
  //   //   password:'pepito1234',
  //   //   phone:'7504859443',
  //   //   role:'admin'
  //   // }

  //   axios.post(URL,data)
  //   .then(res=>console.log(res.data))
  //   .catch(err=>console.log(err))
  // }, [])
  
  return (
    <div className="App">
      
      <Header/>
     
      <Routes>
               
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductId/>}/>

        <Route element={<ProtectedRoutes/>}>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/purchases' element={<Purchases/>}/>
        </Route>
       
      </Routes>
    
      

    </div>
  )
}

export default App
