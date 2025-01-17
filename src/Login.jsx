import React, { useState } from 'react'
import axios from 'axios'
const Login = () => {

    const [emailId, setEmailId] = useState("");
    const [password, setpassword] = useState("");

    const handleLogin = async () => {

        try {

            const response   = await axios.post("http://localhost:3000/login", {

                emailId,
                password
            }, 
          {  withCredentials : true}
            
        );
        }

        catch(err)
        {
            console.log(err);
        }
    };

  return (
    <div className='flex justify-center my-154'>
      <div className="card bg-base-300 w-96 shadow-xl">
     <div className="card-body">
     <h2 className="card-title justify-center">Login</h2>

    <div>

    <label className="form-control w-full max-w-xs my-2">

        <div className="label">
            <span className="label-text">Email Id</span>
        </div>

        <input type="text" 
            value = {emailId}
            onChange = {(e) => setEmailId(e.target.value)}
            placeholder="Enter your email id" 
            className="input input-bordered w-full max-w-xs" />
    </label>

    <label className="form-control w-full max-w-xs my-2">

        <div className="label">
            <span className="label-text">Password</span>
        </div>

        <input 
        type="text" 
        value = {password}
        onChange = {(e) => setpassword(e.target.value)}
        placeholder="Enter your password " 
        className="input input-bordered w-full max-w-xs" />
    </label>

    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Login</button>
        </div>
            </div>
                </div>
    </div>
  )
}

export default Login
