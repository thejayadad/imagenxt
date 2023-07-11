'use client'

import React, { useState, useEffect } from "react";
import UserCard from "@/components/UserCard";

const UserPage = ({params}) => {
    const [userDonut, setUserDonut] = useState([]);

    useEffect(() => {
        const fetchDonuts = async () => {
          const response = await fetch(`/api/user/${params.id}`);
          const data = await response.json();
    
          setUserDonut(data);
        };
    
      }, []);

  return (
    <section>
        <h2>Profile Page</h2>
        {userDonut.length < 1 ? (
          <h3>
            Currently No Donuts
          </h3>
        ) : (
          userDonut.map((donut) => (
            <UserCard {...donut} />
          ))
        )}
    </section>
  )
};

export default UserPage