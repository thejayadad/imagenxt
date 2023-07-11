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
        <span>Arthor: {authorId.username}</span>
        <h3>{category}</h3>
    </div>
  )
}

export default DonutCard