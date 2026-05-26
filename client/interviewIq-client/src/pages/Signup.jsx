import React from 'react'
import { useState } from 'react'

const Signup = () => {

    const [formValues,setFormValus]=useState({
        name:"",
        email:"",
        age:0,
        phone:"",
        password:"",
        confirmPassword:"",
    })
  return (
    <div className='h-screen flex justify-center items-center'>
         <form className='flex gap-2 flex-col'>
                 <div>
                 <label htmlFor='name'>Name :</label>
                 < input className='border-2 gap-1 ' type='text'placeholder='Enter your Name'name='name' id='name' />
                 </div>

                 <div>
                 <label htmlFor='email'>Email :</label>
                < input className='border-2 gap-1 ' type='email' placeholder='example@gmail.com' name='email' id='email'/>
                </div>

                <div>
                 <label htmlFor='age'>Age </label>
                < input className='border-2 gap-1 ' type='number' placeholder='Enter age' name='age'id='age' />
                </div>


                <div>
                 <label htmlFor='phone'>Phone </label>
                < input className='border-2 gap-1 ' type='text' placeholder='+91' name='email' id='phone' />
                </div>



                <div>
                 <label htmlFor='password'>Password :</label>
                 < input className='border-2 gap-1 ' type='password'placeholder='Enter Password ' name='password' id='password' />
                 </div>

                 <div>
                 <label htmlFor='confirm-password'>Confirm-Password :</label>
                 < input className='border-2 gap-1 ' type='password'placeholder='Re-Confim-Password' name="confirm-password" id='confirm-password' />
                 </div>

                 <div>
                      < input className='border-2 gap-1 '  type='submit' value="Submit"/>
                 </div>
         </form>
    </div>
  )
}

export default Signup