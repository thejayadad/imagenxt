"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AiOutlineFileImage } from 'react-icons/ai'




const CreateDonut = () => {
    const CLOUD_NAME = 'socialsite'
    const UPLOAD_PRESET = 'donut_shop'
    const [title, setTitle] = useState('')
    const [img, setImg] = useState('')
    const session = useSession();
    const router = useRouter();
    if (session.status === "loading") {
        return <p>Loading...</p>;
      }
    
      if (session.status === "unauthenticated") {
        router?.push("/login");
      }


      const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const img = await uploadImage()
          
            const res = await fetch(`http://localhost:3000/api/donut`, {
              headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer ${session?.user?.accessToken}` 
              },
              method: 'POST',
              body: JSON.stringify({title,img, username: session.data.user.name})
            })
  
            if(!res.ok){
              throw new Error("Error occured")
            }  
            const donut = await res.json()
  
            router.push('/')
        } catch (err) {
          console.log(err);
        }
      };
      const uploadImage = async () => {
        if (!photo) return

        const formData = new FormData()

        formData.append("file", photo)
        formData.append("upload_preset", UPLOAD_PRESET)

        try {
          const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
            method: "POST",
            body: formData
          })

          const data = await res.json()

          const imageUrl = data['secure_url']

          return imageUrl
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <section>
        <h2>Create Post</h2>
        <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Title...' onChange={(e) => setTitle(e.target.value)} />       
                    <label htmlFor='image'>
                        Upload Image <AiOutlineFileImage />
                    </label>
                    <input id='image' type="file" style={{ display: 'none' }} onChange={(e) => setImg(e.target.files[0])} />
                  <button type="submit">Create</button>
                </form>
    </section>
  )
}

export default CreateDonut