import express from "express"
const app=express();
import { prisma } from "../db/src/index";
app.post('/api/project',async (req,res)=>{
    const name=req.body as unknown as string;
    try{
    const project=await prisma.project.create({
        data:{
            name
        }
        
    })
    res.json({
        id:project.id
    })

}
    catch{
        res.status(500).json({message:"could not create poejct"})
        return
    }
    


})

app.post('/api/:projectid/')