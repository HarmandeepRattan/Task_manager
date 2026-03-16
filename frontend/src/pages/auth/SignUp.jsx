import React, {useState } from 'react'
import AuthLayout from '../../components/AuthLayout'
import { FaPeopleGroup } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {Link} from "react-router-dom"
import ProfilePhotoSelector from '../../components/ProfilePhotoSelector';

export default function Signup() {
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [pass,setpass]=useState("")
  const [showpass,setshowpass]=useState(false)
  const [error,seterror]=useState(null)
  const [profilePic,setprofilePic]=useState(null)
  const [adminToken,setadminToke]=useState("")
  const [showAdminToken,setshowAdminToken]=useState(false)
  const handlesubmit=(e)=>{
    e.preventDefault()
    if(!name){
      seterror("please fill the full name")
    }
    if(!validateEmail(email)){
      seterror("Please enter a valid email address")
    }

    if(!pass){
      seterror("Please enter the password")
    }

    seterror(null)

    // Login Api call
  }
  return (
    <AuthLayout>
      <div className='w-full max-w-md'>
        <div className='bg-white rounded-xl shadow-2xl overflow-hidden'>
          {/* Gradient to border */}
          <div className='h-2 bg-gradient-to-r from-blue-600 to to-blue-400'></div>
          <div className='p-8'>
            {/* logo and title */}
            <div className='text-center mb-8'>
              <div className='flex justify-center'>
                <div className='bg-blue-100 p-3 rounded-full'>
                  <FaPeopleGroup className='text-4xl text-blue-600' />
                </div> 
              </div>
              <h1 className='text-2xl font-bold text-gray-800 mt-4 uppercase'>Signup</h1>
              <p className='text-gray-600 mt-1'>Start managing your projects efficients</p>
            </div>

             {/* Login form */}
             <form onSubmit={handlesubmit} className='space-y-6'>
              <ProfilePhotoSelector image={profilePic} setImage={setprofilePic}/>
              <div>
                <label htmlFor="email"className='block text-sm font-medium text-gray-700 mb-1'>Full Name</label>

                <input id='email' type='email' value={email} onChange={(e)=>setname(e.target.value)} className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' placeholder='Your full Name' required/>
              </div>
              <div>
                <label htmlFor="email"className='block text-sm font-medium text-gray-700 mb-1'>Email Address</label>

                <input id='email' type='email' value={email} onChange={(e)=>setemail(e.target.value)} className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' placeholder='Enter your email' required/>
              </div>
               <div>
                <label htmlFor="password"className='block text-sm font-medium text-gray-700 mb-1'>Password</label>

                <div className='relative'>
                <input id='password' value={pass} type={showpass ? "text":"pass"} onChange={(e)=>setpass(e.target.value)} className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12'  placeholder='•••••••' required/>


                <button type='button' className='absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700' onClick={() =>setshowpass(!showpass)} >{showpass ? <FaEyeSlash /> : <FaEye />}
                </button>
                </div>
              </div>
              {error && <p className='text-res-500 text-sm'>{error}</p>}
              <div>
                <button type='submit' className='w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-offset-0 cursor-pointer'>LOGIN</button>
              </div>
             </form>
             <div className='mt-6 text-center text-sm'>
              <p className='text-gray-600'>
                Don't have an account?{""}
                <Link to={"/signup"} className='font-medium text-blue-600'>Signup</Link>
              </p>
             </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}
