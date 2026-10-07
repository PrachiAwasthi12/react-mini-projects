import React from 'react'
import { useState } from 'react'

const Login = () => {
  return (
    <div>
        <h1>Login</h1>
    <form>
        User Name:
        <input type="text"
        value={uname}
        placeholder="Enter your name"
        onChange={(e)=>setUname(e.target.value)}
        /><br/>
        Password:
        <input type="password"
        value={pass}
        placeholder="Enter your password"
        onChange={(e)=>setPass(e.target.value)}
        /><br/>
        <button type="submit" onClick={handleSubmit}>Login</button>
        <button type="reset" onClick={handleReset}>Reset</button>
    </form>
    </div>
  )
}

export default Login