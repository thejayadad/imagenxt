import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <section>
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl text-white bg-primary text-center">Donut Spot</a>
  </div>
  <div className="flex-none gap-2">
  <Link href={'/create-donut'} className="btn btn-active btn-primary text-white">CREATE</Link>
  <ul className="menu menu-horizontal px-1">
  <button className="btn btn-active btn-accent text-white">Logout</button>
      <li>
        <details>
          <summary className='bg-success ml-3 text-white'>
            More
          </summary>
          <ul className="p-2 bg-base-100">
            <li className='bg-white'><a>Profile</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
    </section>
  )
}

export default Navbar