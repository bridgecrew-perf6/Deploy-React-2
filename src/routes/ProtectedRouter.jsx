import React from 'react';

import {Navigate, Outlet} from 'react-router-dom'

  const useAuth=()=>{
      const user = localStorage.getItem('userInfo')
      if(user){
        return true
      } else {
        return false
      }
    }

const  ProtectedRouter=() =>{

  const auth= useAuth()

  return auth? <Outlet/> : <Navigate to="/login"/>
}

export default ProtectedRouter;