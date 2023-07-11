'use client'

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Donut from "@/components/Donut";


const UserPage = ({params}) => {
    const [userDonut, setUserDonut] = useState([]);
    const { data: session } = useSession();
    const [friends, setFriends] = useState([]);


    useEffect(() => {
        const fetchDonuts = async () => {
          const response = await fetch(`/api/user/${params.id}`);
          const data = await response.json();
    
          setUserDonut(data);
        };
    
        const fetchFriends = async () => {
          const response = await fetch(`/api/user/${params.id}/friends`);
          const data = await response.json();
    
          setFriends(data);
        };
    
        if (session?.user.id && params.id) {
          fetchDonuts();
          fetchFriends();
        }
      }, [session, params.id]);
    
      const isFriend = friends.find((friend) => friend._id === friendId);

  const patchFriend = async () => {
    const response = await fetch(
      `http://localhost:3000//user/${_id}/${friendId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };
      

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
        
      {isFriend ? (
        <button onClick={addRemoveFriend}>Remove Friend</button>
      ) : (
        <button onClick={addRemoveFriend}>Add Friend</button>
      )}
    </section>
  )
};

export default UserPage