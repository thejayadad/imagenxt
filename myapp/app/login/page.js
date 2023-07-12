"use client";
import React, { useEffect, useState } from "react";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Login = ({ url }) => {
    const session = useSession();
    const router = useRouter();
    const params = useSearchParams();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
  
    useEffect(() => {
      setError(params.get("error"));
      setSuccess(params.get("success"));
    }, [params]);
  
    if (session.status === "loading") {
      return <p>Loading...</p>;
    }
  
    if (session.status === "authenticated") {
      router?.push("/");
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;
  
      signIn("credentials", {
        email,
        password,
      });
    };
  
    return (
      <div>
        <h1 >{success ? success : "Welcome Back"}</h1>
        <h2>Please sign in to see the dashboard.</h2>
  
        <form onSubmit={handleSubmit} >
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
          <button>Login</button>
          {error && error}
        </form>
        <button
          onClick={() => {
            signIn("google");
          }}
        >
          Login with Google
        </button>
        <span >- OR -</span>
        <Link href="/register">
          Create new account
        </Link>
      </div>
    );
  };
  
  export default Login;