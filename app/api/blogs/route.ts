import { addPosts, getPosts } from "@/app/lib/data";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic' // defaults to auto



export async function GET(req: Request, res:Response) {
    try {
        const posts = getPosts()
        return NextResponse.json({message:"ok",posts},{
            status:200,
        })
    } catch (err) {
        return NextResponse.json({message:"Error",err},
        {
            status:500,
        })
    }
}



export async function POST(req: Request, res:Response) {
    const {title,desc}=await req.json();
    try {
        const post= {title,desc,date:new Date(),id:Date.now().toString()}
        addPosts(post);  
        return NextResponse.json({message:"ok",post},{
            status:200,
        })   
    } catch (err) {
        return NextResponse.json({message:"Error",err},
        {
            status:500,
        })
    }
}