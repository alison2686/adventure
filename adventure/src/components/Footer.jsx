import React from 'react'
import {Link} from "react-router-dom"
import {FaTwitter, FaFacebook} from "react-icons/fa"
import {AiFillInstagram, AiOutlineClose} from "react-icons/ai"
import {BsMap} from 'react-icons/bs'
import {IoMdWalk} from 'react-icons/io'
import {MdOutlineAddAPhoto} from 'react-icons/md'
import { useState } from 'react'
import ResultsForm from './ResultsForm'
import InputForm from './InputForm'


function Footer() {
  const [form, setForm] = useState(false)

  const handleForm = () => {
    setForm(!form)}
  return (
    <div className='h-[10%]'>
{/* Medium and large screen footer view  */}
      <div className='bg-gradient-to-b from-[#b7dce0] md:from-[#f8d06a] to-transparent flex w-[100%] h-[10%] items-center justify-end md:pr-4'>
           <div className=' hidden md:flex w-[100%] h-[10vh] items-center justify-end pr-4'>  
             <p className='pl-2 text-lg'><Link>Follow Us</Link></p> 
           <p className='pl-2 text-lg'><Link><FaTwitter/></Link></p>
            <p className='pl-2 text-lg'><Link><AiFillInstagram/></Link></p>
            <p className='pl-2 text-lg'><Link><FaFacebook/></Link></p>
        </div>

{/* mobile screen footer view  */}
        <div className='flex justify-evenly w-[100%] pt-4 md:hidden items-center'>
          <div onClick={handleForm} className='flex-col w-[50%] hover:cursor-pointer hover:scale-110 hover:duration-500 hover:ease-in-out'>
         <p className='text-center translate-x-[45%] pb-1'>{!form ? <IoMdWalk  size={30}/> : <BsMap size={30}/> }</p> 
            <p className='text-center font-poppins'>{!form ? 'My Walk' : 'View Map' }</p>
          </div>
          <div 
          className={`top-[9%] w-[100%] h-[80%] left-0 bg-white text-black fixed  z-20 ease-in-out duration-300 ${
            !form ? "translate-x-[-100%] " : "translate-x-[0]"}`}
          // className={!form ? 'fixed bottom-[-100%]' : 'fixed top-[4%] w-[100%] z-10 h-[83vh] bg-white ease-in-out duration-500' }
          >
            <InputForm/>
          </div>
              
         
          <div className=' flex-col w-[50%] hover:cursor-pointer hover:scale-110 hover:duration-500 hover:ease-in-out'>
            <p className='text-2xl translate-x-[45%] pb-1 '><MdOutlineAddAPhoto/></p>
            <p className='font-poppins text-center'>Add a Photo</p>
          </div>
          
        </div>
      </div>
        
    </div>
  )
}

export default Footer
