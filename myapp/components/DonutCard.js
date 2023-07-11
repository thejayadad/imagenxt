'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { AiFillDelete, AiFillLike, AiOutlineLike } from 'react-icons/ai'

const DonutCard = ({ donut: { title, imageUrl, authorId, _id, category, creator } }) => {
    const { data: session } = useSession();
        const router = useRouter()

    const handleDelete = async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/donut/${_id}`, {
            method: 'DELETE',
          })
          // Handle success and navigate to a new page, for example:
          router.push('/')
        } catch (err) {
          console.log(err)
        }
      }


  return (
    <div>
  
    <h2>{title}</h2>
        <Image
        height={400}
        width={400}
        src={imageUrl}
        alt='pic'
        />
  
            <span>Arthor: 
            <a
            href={`/user/${_id}`}
            >
            {authorId.username}
            </a></span>
            {session?.user.id === creator && (
          <button className="delete-btn" onClick={handleDelete}>
            Delete
          </button>
        )}
   

            
           <h3>{category}</h3>

    </div>
  )
}

export default DonutCard


