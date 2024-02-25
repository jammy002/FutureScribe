import { useGoogleLogin } from "@react-oauth/google";
import React, { useEffect, useState } from "react";
import { BiImages } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Toaster, toast } from 'sonner';
import { Button, Divider, Inputbox, Logo } from "../components";
import { getGoogleSignUp, emailSignUp } from "../utils/apiCalls"
import useStore from "../store";
import { saveUserInfo, uploadFile } from "../utils";

const SignupPage = () => {
  const { user, signIn, setIsLoading } = useStore()
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [file, setFile] = useState("");
  const [fileURl, setFileURl] = useState("");

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
      console.log(tokenResponse)
      const user = await getGoogleSignUp(tokenResponse.access_token);
      setIsLoading(false)
      if (user.success === true) {
        saveUserInfo(user, signIn)
      } else {
        toast.error(user?.message)
      }
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await emailSignUp({ ...data, image: fileURl});
    setIsLoading(false);
    if(result?.success === true) {
      saveUserInfo(result, signIn);
    } else {
      toast.error(result?.message);
    }
  };

  if ( user && user.token) 
    window.location.replace("/");

  useEffect(() => {
    if (file) {
      uploadFile(setFileURl, file);
    }
  }, [file]);
  
  return (
    <div className="flex w-full h-[100vh]">
      <div className='hidden md:flex flex-col gap-y-4 w-1/3 h-full
    bg-black items-center justify-center'>
        {fileURl && (
          <img
            src={fileURl || file}
            alt=''
            className='w-16 h-16 rounded-full'
          />
        )}
        <Logo type='signin' />
        <span className="text-xl font-semibold text-white">Where Futures Unfold Through Words</span>
      </div>

      <div className='flex w-full md:w-2/3 h-full bg-white dark:bg-gradient-to-b
     md:dark:bg-gradient-to-r from-black via-[#071b3e]
      to-black items-center px-4 md:px-20 lg:px-40'>
        <div className='w-full h-full flex flex-col items-center justify-center
       py-12 px-4 sm:px-0 lg:px-8'>
          <div className='block mb-10 md:hidden -ml-8'>
            <Logo />
          </div>
          <div className="w-full space-y-6 flex flex-col justify-start">
            <div className="max-w-md w-full flex gap-3 md:gap-4 items-center justify-center mb-12">
              {showForm && (
                <IoArrowBackCircleSharp
                  className="text-2xl lg:text-3xl cursor-pointer text-gray-800
                dark:text-gray-400"
                  onClick={() => setShowForm(false)}
                />
              )}
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900
               dark:text-white">
                Sign up for an account
              </h2>
            </div>

            {showForm ? (
              <form className="max-w-md w-full mt-8 space-y-6"
                onSubmit={handleSubmit}>
                <div className="flex flex-col rounded-md shadow-sm space-y-px gap-6 md-8">

                  <div className="w-full flex gap-4">
                    <Inputbox
                      label='First Name'
                      name='firstName'
                      type='text'
                      isRequired={true}
                      placeholder="First Name"
                      value={data?.firstName}
                      onChange={handleChange}
                    />

                    <Inputbox
                      label='Last Name'
                      name='lastName'
                      type='text'
                      isRequired={true}
                      placeholder="Last Name"
                      value={data?.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <Inputbox
                    label='Email Address'
                    name='email'
                    type='email'
                    isRequired={true}
                    placeholder="your email address"
                    value={data?.email}
                    onChange={handleChange}
                  />
                  <Inputbox
                    label='Password'
                    name='password'
                    type='password'
                    isRequired={true}
                    placeholder="password"
                    value={data?.password}
                    onChange={handleChange}
                  />

                  <div className="flex items-center justify-between py-4">
                    <label htmlFor="imgUpload" className="flex items-center gap-1 text text-base
                     text-black dark:text-gray-500 cursor-pointer">
                      <input
                        id="imgUpload"
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="hidden"
                        data-max-size='1024'
                        accept="jpg,.png, .jpeg"
                      />
                      <BiImages />
                      <span>Picture</span>
                    </label>
                  </div>
                </div>

                <Button
                  label='Create an Account'
                  type='submit'
                  styles='group relative w-full flex 
                  justify-center py-2.5 2xl:py-3 px-4 border 
                  border-transparent text-sm font-medium 
                  rounded-full text-white bg-black 
                  dark:bg-rose-800 hover:bg-rose-700
                    focus:outline-none '
                />
              </form>
            ) : (
              <div className="max-w-md w-full space-y-8">
                <Button
                  onClick={() => googleLogin()}
                  label='sign up with an account'
                  icon={<FcGoogle className="text-xl" />}
                  styles='w-full flex flex-row-reverse gap-4 bg-black dark:bg-transparent 
                  dark:border text-white px-5 py-2.5 rounded-full'
                />
                <Divider label='OR' />
                <Button
                  onClick={() => setShowForm(true)}
                  label='continue with email'
                  styles='w-full gap-4 bg-white text-black
                     dark:bg-rose-800 dark:text-white px-5 py-2.5 rounded-full
                     border dark:border-none border-gray-300'
                />
              </div>
            )}
            <p className="max-w-md w-full text-center
            text-gray-600 dark:text-gray-300">
              Already have an account? {""}
              <Link to='/sign-in' className="text-rose-800 font-medium">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Toaster richColors />
    </div>
  );
};

export default SignupPage;
