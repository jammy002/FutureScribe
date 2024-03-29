import {useGoogleLogin} from '@react-oauth/google';
import React, { useState } from 'react';
import { Button, Divider, Inputbox, Logo } from '../components';
import { FcGoogle } from 'react-icons/fc';
import { Toaster, toast} from "sonner";
import { Link } from 'react-router-dom';
import { getGoogleSignIn,emailSignIn } from '../utils/apiCalls';
import { saveUserInfo } from '../utils';
import useStore from '../store';


const LoginPage = () => {
  const { user, signIn, setIsLoading } = useStore()


  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setData({
      ...data,
      [name]: value,
    });
  };
  
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setIsLoading(true);
      const user = await getGoogleSignIn(tokenResponse.access_token);
      setIsLoading(false)
      console.log(user)
      if (user.data.success === true) {
        saveUserInfo(user.data, signIn)
      } else {
        toast.error(user?.message)
      }
    },
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailSignIn(data); 
      if (result?.success === true) {
        saveUserInfo(result, signIn);
      } else {
        toast.error(result?.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }

    setIsLoading(false);
  };  

  if ( user && user.token) 
    window.location.replace("/");
  return <div className='flex w-full h-[100vh]'>
    <div className='hidden md:flex flex-col gap-y-4 w-1/3 min-h-screen
    bg-black items-center justify-center'>
      <Logo type='login' />
      <span className='text-xl font-semibold text-white'>Where Futures Unfold Through Words</span>

    </div>
    <div className='flex w-full md:w-2/3 h-full bg-white dark:bg-gradient-to-b
     md:dark:bg-gradient-to-r from-black via-[#071b3e]
      to-black items-center px-10 md:px-20 lg:px-40'>
      <div className='w-full flex flex-col items-center justify-center
       py-12 px-4 sm:px-6 lg:px-8'>
        <div className='block mb-10 md:hidden'>
          <Logo />
        </div>
        <div className='max-w-md w-full space-y-8'>
          <div className=''>
            <h2 className='mt-6 text-center text-2xl md:text-3xl font-semibold
           text-gray-900 dark:text-white'>
              Sign in to your Account
            </h2>
          </div>
          <Button label='sign in with google'
            icon={<FcGoogle/>}
            styles='w-full flex flex-row-reverse gap-4 bg-white
            dark:bg-transparent text-black dark:text-white px-5 py-2.5 
            rounded-full border border-gray-300 hover:bg-rose-700'
            onClick={() => {googleLogin()}}
          />
          <Divider label='or sign in with email' />
          <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
            <div className='flex flex-col rounded-md shadow-sm -space-y-px gap-5'>
              <Inputbox
                type='email'
                label='Email Address'
                name='email'
                value={data?.email}
                isRequired={true}
                placeholder="Email"
                onChange={handleChange}
              />
              <Inputbox
                type='password'
                label='Password'
                name='password'
                isRequired={true}
                placeholder="password"
                value={data?.password}
                onChange={handleChange}
              />
            </div>
            <Button
              label='Sign In'
              type='submit'
              styles='group relative w-full flex justify-center
               py-2.5 2xl:py-3 px-4 border border-transparent 
              text-sm font-medium rounded-full text-white bg-black 
              dark:bg-rose-800 hover:bg-rose-700 
              focus:outline-none focus:ring-2 focus:ring-offset-2 
              focus:ring-rose-500 mt-8'
            />
          </form>
          <div className='flex items-center justify-center text-gray-600
           dark:text-gray-300'>
            <p>Don't have account?{" "}
            <Link to='/sign-up' className='text-rose-800 font-medium '>Sign up
            </Link>
            </p>
          </div>


        </div>
      </div>
    </div>
    <Toaster richColors/>
  </div>
};


export default LoginPage;