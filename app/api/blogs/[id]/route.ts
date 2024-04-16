import { deletePosts, getById, updatePosts } from "@/app/lib/data";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const id = req.url.split("blogs/")[1];
        const post = getById(id);
        if(!post){
            return NextResponse.json({message:"ERROR"},
            {status:404}
        )
        }return NextResponse.json({message:"OK",post},
            {status:200}
        ) 
    } catch (err) {
        return NextResponse.json({message:"ERROR",err},
        {status:500})
    }

}
export async function PUT(req: Request) {
    try {
        const { title , desc} = await req.json();
        const id = req.url.split("blogs/")[1];
        updatePosts(id,title,desc);
        return NextResponse.json({message:"ok"},{status:200
        })
    } catch (err) {
        return NextResponse.json({message:"error"},{status:500
        })  
    }

}

export async function DELETE(req: Request) {
    try {
        const { title , desc} = await req.json();
        const id = req.url.split("blogs/")[1];
        deletePosts(id);
        return NextResponse.json({message:"ok"},{status:200
        })
    } catch (err) {
        return NextResponse.json({message:"error"},{status:500
        })  
    }
}