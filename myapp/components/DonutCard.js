'use client'
import Image from 'next/image'
import Link from 'next/link'


const DonutCard = ({ donut: { title, imageUrl, authorId, _id, category } }) => {

  return (
    <div>
    
        <Link
        href={`/donut/${_id}`}
        >
            <h2>{title}</h2>
        </Link>
        <Image
        height={400}
        width={400}
        src={imageUrl}
        />
        <span>Arthor: 
            <a
            href={`/user/${_id}`}
            >
            {authorId.username}
            </a>
        </span>
        <h3>{category}</h3>
    </div>
  )
}

export default DonutCard