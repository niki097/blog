import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form"; // Import useForm from "react-hook-form";

export const Login=()=> {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurerntUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='mx-auto w-full max-w-lg '>
        <div className='mb-2 flex justify-center '>
          <span className='inline-black w-full max-w-[100px]'>
            <Logo width='100%' />
          </span>
        </div>
        <h2 className='text-center text-2xl font-bold'>Login</h2>
        <p className='text-center mt-2 text-base text-color-600'>
          Don't have any account? &nbsp;
          <Link
            to='/signup'
            className='font-medium text-primary-transition-all 
            duration-200 hover:underline'
          >
            {" "}
            sign Up
          </Link>
        </p>
        {error && <p className='text-red-500 mt-8'>{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
          <div className='space-y-5'>
            <input
              label='Email:'
              placeholder='Enter your email'
              type='email'
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                      v
                    ) || "Email address must be a valid address",
                },
              })}
            />
            <input label='password:' 
            type='password' 
            placeholder='Enter your password'
            {...register("password", 
            { required: true })}/>
            <Button type='submit' 
            className='w-full'>
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
