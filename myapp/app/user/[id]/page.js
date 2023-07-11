'use client'

import React, { useState, useEffect } from "react";
import UserCard from "@/components/UserCard";
import { useSession } from "next-auth/react";
import Donut from "@/components/Donut";

const UserPage = ({params}) => {
    const [userDonut, setUserDonut] = useState([]);
    const { data: session } = useSession();


    useEffect(() => {
        const fetchDonuts = async () => {
          const response = await fetch(`/api/user/${params.id}`);
          const data = await response.json();
      
          setUserDonut(data);
        };
      
        if (session?.user.id && params.id) fetchDonuts();
      
      }, [session, params.id]);
      

  return (
    <section>
        <h2>Profile Page</h2>
        {userDonut.length < 1 ? (
          <h3>
            Currently No Donuts
          </h3>
        ) : (
          userDonut.map((donut) => (
            <Donut {...donut} />
          ))
        )}
    </section>
  )
};

export default UserPage