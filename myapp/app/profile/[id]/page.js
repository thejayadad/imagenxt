"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const ProfilePage = ({params}) => {
  const { data: session } = useSession();
  const [userDonut, setUserDonut] = useState([]);

  useEffect(() => {
    const fetchDonuts = async () => {
      const response = await fetch(`/api/user/${params.id}`);
      const data = await response.json();

      setUserDonut(data);
    };

    if (session?.user.id) fetchDonuts();
  }, []);
  return (
    <section>
        <h2>User Profile</h2>
        {userDonut.length < 1 ? (
          <h3>
            Your Prompts is empty. Click on the Create Prompt to create one
          </h3>
        ) : (
          userDonut.map((donut) => (
            <div key={id}>
              <h2>{donut.title}</h2>
            </div>
          ))
        )}
    </section>
  )
}

export default ProfilePage