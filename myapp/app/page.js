
"use client";

import DonutCard from "@/components/DonutCard"
import { useSession } from "next-auth/react";
import DountHome from "@/components/DonutHome";




export default  function Home() { 
  const { data: session } = useSession();

  return (
    <main>
      <h2>Doonuts</h2>
     <div>
      {session?.user.id ? (
        <DountHome  />
      ) : (
        <span>No Post</span>
      )
      
      }
     </div>
    </main>
  )
}
