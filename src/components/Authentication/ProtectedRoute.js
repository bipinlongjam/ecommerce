import React from 'react'
import { useCart } from '../../context/CartContext'
import { Navigate, Route, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, ...rest }) => {

   const authCtx = useCart();
   const navigate = useNavigate()

  return (
    // <Route
    // {...rest}
    // render={(props)=>{
    //     authCxt.isLoggedIn ? (
    //         <Component {...props}/>
    //     ):(
    //         navigate('/login')
    //     )
    // }}
    
    // />
    <Route
      {...rest}
      element={authCtx.isLoggedIn ? <Element /> : <Navigate to="/login" replace />}
    />
    
  )
}

export default ProtectedRoute