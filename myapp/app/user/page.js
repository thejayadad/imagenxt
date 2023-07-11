import UserCard from '@/components/UserCard'
import React from 'react'


export async function fetchUsers(){
    const res = await fetch('http://localhost:3000/api/user', {cache: 'no-store'})
  
    return res.json()
  }
  

  export default async function Users() {
    const users = await fetchUsers()

  return (
    <section>
        <h2>All Users</h2>
        {
            users?.length > 0
            ? users.map((user) => (
                <UserCard key={user._id} user={user} />
            )) : <p>Users Will be loaded soon</p>
        }
    </section>
  )
}

