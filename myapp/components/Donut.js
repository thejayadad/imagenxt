'use client'
import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

const Donut = ({title, imageUrl, authorId, _id}) => {
    const { data: session } = useSession()

  return (
    <div>
        

        <div className="m-auto p-2 overflow-hidden rounded-2xlcursor-pointer h-90 w-40 md:w-80">
    <a href="#" className="block w-full h-full">
        <Image alt="blog photo" src={imageUrl} className="object-cover w-full h-80 rounded-t-2xl"/>
        <div className="w-full p-4 bg-white rounded-b-2xl ">
            <p className="font-medium text-indigo-500 text-md">
                {title}
            </p>
            <div className="flex items-center mt-4">
                <div className="flex flex-col justify-between text-sm">
                    <p className="text-gray-400 dark:text-gray-300">
                        20 mars 2029 - 6 min read
                    </p>
                </div>
            </div>
        </div>
    </a>
</div>


    </div>
  )
}

export default Donut