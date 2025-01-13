import { useState } from "react";
import { supabaseClient } from "../config/supabse-client";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const SignUpUser = () => {
  const [email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [userType, setUserType] = useState("")


  const navigate = useNavigate()


  const registerUser = async () => {
    // if (password !== confirmPassword) {
    //   toast.error("Passwords dont match")
    //   return;
    // }
    const { data, error } = await supabaseClient.auth.signUp(
      {
        email: email,
        password: Password,
        userType: 'customer',
        
      }
    )
    if(!error){
      console.log("Sign-Up Data:", data);
      toast.success("Registration successful")
      navigate("usernav")
    }
    toast.error(error.message)
    return
  };


  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-gray-100 shadow-lg rounded-lg p-6 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-7 text-center text-gray-800 font-sans">Welcome Back</h2> 
          <div className="mb-7">
            <label htmlFor="" className="font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              placeholder="Enter your email"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
              required
            />
          </div>

          <div className="mb-7">
            <label htmlFor="" className="font-semibold">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={Password}
              onChange={(e)=>{setPassword(e.target.value)}}
              placeholder="Enter your password"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="" className="font-semibold">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e)=>{setConfirmPassword(e.target.value)}}
              placeholder="Confirm your password"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="" className="font-semibold">User Type</label>
            <select
              id="userType"
              name="userType"
              value={userType}
              onChange={(e)=>{setUserType(e.target.value)}}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
              required
            >
              <option value="customer">Customer</option>
              <option value="courier">Courier</option>
            </select>
        </div>
          <button
            onClick={registerUser}
            className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </button>
      
        <p className="text-gray-600 text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="Login"className="font-semibold text-gray-800 hover:text-gray-900">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpUser;
