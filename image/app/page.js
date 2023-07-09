'use client'
import React, {useState} from "react"

export default function Home() {

  const [image, setImage] = useState("")


  function convertToBase64(e){
    let reader = new FileReader();
    reader.readAsDataUrl(e.target.files[0]);
    reader.onload =()=> {
      setImage(reader.result)
    }
    reader.onerror = error => {
      console.log(error)
    }
  }
  return (
    <main>
      <h2>Memories</h2>
        <input
        accept='/image'
        type='file'
        onChange={convertToBase64}
        />

       {
        image==""|| image==null?"" : <img 
        width={200}
        height={300}
        src={image}
        alt='pic'
      />
       }       
    </main>
  )
}
