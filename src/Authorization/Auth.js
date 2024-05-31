import React from 'react'
import { Navigate } from 'react-router-dom'
const RequiresAuth = ({ children }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    return (
        isLoggedIn ? children : <Navigate to="/login"  />
    )
}
export default RequiresAuth