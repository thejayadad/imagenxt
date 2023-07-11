"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import DonutCard from "./DonutCard";


const HomeDounts = () => {
    const { data: session } = useSession();
    const [allDounts, setAllDounts] = useState([]);


    useEffect(() => {
        const fetchDounts = async () => {
          const response = await fetch('http://localhost:3000/api/dount/');
          const data = await response.json();
    
          setAllDounts(data);
        };
    
        if (session?.user.id) fetchDounts();
      }, [session]);

      return (
        <div>
            {
                allDounts.map((dount) => (
                    <DonutCard {...dount} ></DonutCard>
                ))
            }
        </div>
      )

}


export default HomeDounts;