
'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'


const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn('credentials', { email, password, redirect: false })
      console.log(res.data);
      router.push("/")
    } catch (error) {
      // Handle login error
      console.error(error);
    }
  };

  return (
    <section>
          <form onSubmit={handleLogin}>
      <div>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
    </section>
  )
}

export default Login