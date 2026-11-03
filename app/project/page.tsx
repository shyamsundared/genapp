import axios from "axios"
import { BACKEND_URL } from "../config"
import { useState } from "react"

export default function chatp(){
    const [name,setname]=useState<string>()
    const [error,seterror]=useState<string>()
    const [result,setresult]=useState<string>()
    async function handler(){
        if(!name?.trim()){
            return
        }
        const res=await axios.post(`${BACKEND_URL}/api/project`,{
            name
        })
        if(!res.status){
            seterror("failed to connect create project")
        }
        setresult(res.data)

    }
    return <div>
        <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} />
        <button  onClick={()=>{handler}}>create project</button>
        {result}
    </div>
}