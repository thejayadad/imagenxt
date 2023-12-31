"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import DonutCard from "@/components/DonutCard";

const ProfilePage = ({params}) => {
  const { data: session } = useSession();
  const [userDonut, setUserDonut] = useState([]);

  useEffect(() => {
    const fetchDonuts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/user/${params.id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch donuts");
      }
      const data = await response.json();
      setUserDonut(data);
      } catch (error) {
        console.log(error);
       
      }
      

    };

    if (session?.user.id) fetchDonuts();
  }, []);
  console.log(userDonut); // Check the fetched donut data in the console



  return (
    <section>
        <h2>User Profile</h2>
        {userDonut.length < 1 ? (
          <h3>
            Good Things Are In The Oven
          </h3>
        ) : (
          userDonut.map((donut) => (
           <DonutCard{...donut} />
          ))
        )}
    </section>
  )
}

export default ProfilePage