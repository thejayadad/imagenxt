'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'

const UserCard = ({user: {username, email, following, _id}}) => {
  const { data: session } = useSession()

  return (
    <div>
      <h3><Link href={`/user/${_id}`}>
      {email}
      </Link></h3>
      <h3>{username}</h3>
      <h3>{following}</h3>

    </div>
  )
}

export default UserCard