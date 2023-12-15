import React from 'react'
import { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import {Button, Input, Logo} from "./index"
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'

import {useForm} from 'react-hook-form'
export const Signup=()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const signup = async (data) => {
      setError("");
      try {
        const session = await authService.signup(data);
        if (session) {
          const userData = await authService.getCurerntUser();
          if (userData) dispatch(login(userData));
          navigate("/");
        }
      } catch (error) {
        setError(error.message);
      }
    };
  return (
    <div className=' flex items-center justify-center 
    w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100`}>
<div className='mb-2 flex justify-center'>
    <span className='inline-black w-full max-w-[100px]'>
    <Logo />
    </span>
</div>
<h2 className='text-center text-2xl font-bold'>Create account</h2>
        <p className='text-center mt-2 text-base text-color-600'>
          Already have any account? &nbsp;
          <Link
            to='/login'
            className='font-medium text-primary-transition-all 
            duration-200 hover:underline'
          >
            sign Up
          </Link>
        </p>
        {error && <p className='text-red-500 mt-8'>{error}</p>}
        <form>
            <div className='mb-4'>
                <Input
                label="Enter Full Name"
                placeholder="Enter Full Name"
                type="text"
                {...register("name",{required:true,})}
                />
                <Input label="Enter Email" 
                placeholder="Enter Email" 
                type="email" {...register("email",{required:true,})}/>
            <input label="Enter Password" 
            placeholder="Enter Password" 
            type="password"
            {...register("password",{required:true,})}/>
            <Button className="w-full" type="submit" onClick={handleSubmit(signup)}>
                create Account</Button>
            </div>
        </form>
        </div>
        
    </div>
  )
}

export default Signup