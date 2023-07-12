import React from "react";

import { useSession } from "next-auth/react";


const DonutCard = ({title, _id, username,imageUrl}) => {
    const { data: session } = useSession();
  return (
    <div>
        <h3>{title}</h3>
    </div>
  )
}

export default DonutCard