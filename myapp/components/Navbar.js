import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <section>
        <Link href={'/create-donut'}>
            Create Donut
        </Link>
    </section>
  )
}

export default Navbar