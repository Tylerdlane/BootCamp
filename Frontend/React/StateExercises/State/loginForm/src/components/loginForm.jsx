import React from 'react'
import { useState } from 'react';

const LoginForm = () => {
//We start with false password not showing 
    const [showPassword, setShowPassword] = useState(false)
// showPassword is our var and setShowPassword is our function

//This is the func that runs when onChange is fires on the input
const handleShowPassword = () => {
    //Do something here 
    setShowPassword(!showPassword)
}


  return (
    <form className="form">

        <input type="email" id="email" placeholder="enter your email" />
        {/* If show ppassword is true ot willl show type text and if it is false it will be type password */}
        <input type={showPassword ? 'text' : 'password'} id="password" placeholder="enter your password" />
        <input type="checkbox"  id="showPassword" onChange={handleShowPassword}/>
        <button type="submit">Submit</button>

    </form>
    );
};

export default LoginForm