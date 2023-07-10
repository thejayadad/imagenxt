'use client'
import React from 'react'
import Image from 'next/image'
import pic from "../public/pic.png"

const Donut = () => {
  return (
    <div>
        

        <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-40 md:w-80 p-4">
    <a href="#" class="block w-full h-full">
        <Image alt="blog photo" src={pic} class="object-cover w-full max-h-80"/>
        <div class="w-full p-4 bg-white">
            <p class="font-medium text-indigo-500 text-md">
                Article
            </p>
            <div class="flex items-center mt-4">
                <div class="flex flex-col justify-between text-sm">
                    <p class="text-gray-800 dark:text-white">
                        Jean Jacques
                    </p>
                    <p class="text-gray-400 dark:text-gray-300">
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