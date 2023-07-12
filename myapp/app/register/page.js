'use client'
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
    
        try {
          const res = await fetch("/api/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          });
          res.status === 201 && router.push("/login?success=Account has been created");
        } catch (err) {
          setError(err);
          console.log(err);
        }
      };
  return (
    <section>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          required
        />
        <input
          type="text"
          placeholder="Email"
          required
        />
        <input
          type="password"
          placeholder="Password"
          required
        />
        <button >Register</button>
        {error && "Something went wrong!"}
      </form>
      <span >- OR -</span>
      <Link  href="/login">
        Login with an existing account
      </Link>

    </section>
  )
}

export default Register