'use client'
import React from 'react'
import Input from '@/components/input/input'
import Link from 'next/link'

interface InitialStateProps {
    name:string,
    email:string,
    password:string
}

const initialState:InitialStateProps = {
    name:'',
    email:'',
    password:''
}

const Register = () => {
  return (
    <section className='flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2'>
   <div className="hero bg-base-100">
  <div className="hero-content text-center">
    <div className="max-w-md">
    <button className="btn btn-primary">LOGO</button>
      <h1 className="text-5xl font-bold text-warning">Donut Shop</h1>
      <p className="py-3">The place to share donuts</p>
    </div>
  </div>
</div>
    <Input placeholder='Name' id='name' type='text' name='name' value={name}/>
    <Input placeholder='Email' id='email' type='text' name='email' value={name}/>
    <Input placeholder='Password' id='password' type='password' name='password' value={name}/>

    <button className="btn btn-info btn-sm">Register</button>
    <div>
        <span>Already have an account?
        <Link href={'/login'}>Login</Link>
        </span>
    </div>
    </section>
  )
}

export default Register
