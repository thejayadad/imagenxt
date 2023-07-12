"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import DonutCard from "./DonutCard";

const DonutShop = () => {
    const { data: session } = useSession();
    const [allPrompts, setAllPrompts] = useState([]);

    useEffect(() => {
        const fetchPrompts = async () => {
          const response = await fetch('http://localhost:3000/api/donut/');
          const data = await response.json();
    
          setAllPrompts(data);
        };
    
        if (session?.user.id) fetchPrompts();
      }, []);
    
    return (
        <section>
            <h2>Donut Shop</h2>
            {allPrompts.length < 1 ? (
          <h3>
            Good Things Are In The Oven
          </h3>
        ) : (
          allPrompts.map((donut) => (
           <DonutCard{...donut} />
          ))
        )}
        </section>
    )
}

export default DonutShop;