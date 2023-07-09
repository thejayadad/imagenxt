'use client'


interface InputProps {
    type:any,
    value:any,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string
    textarea?:boolean
    id:string
    placeholder?:string
    big?:boolean
}



export default function Input({type,value,onChange,name,textarea,id,placeholder,big}:InputProps) {
  return (
    <input id={id} placeholder={placeholder} type={type} value={value} onChange={onChange} name={name} className={`input input-border input-info w-full  ${textarea ? 'w-700px h-500px' : 'w-full'} ${big ? 'w-[400px] pb-[6rem]': ''}`}/>
  )
}