'use client'
import React, { useState } from 'react'
import axios from 'axios';


const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:3000/api/register', {
            email,
            name,
            password,
          });
    
          console.log(response.data); // Assuming you want to log the response
        } catch (error) {
          console.error(error);
        }
      };

  return (
    <section>

<form onSubmit={handleRegister}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
    </section>
  )
}

export default Register