import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const Navegation = useNavigate()
    const fun(){
        Navegation('/about')
    }
  return (
    <div>
        <h1>Login</h1>
        <button onClick={fun}>Click me</button>
    </div>
  )
}

export default Login