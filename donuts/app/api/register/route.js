import bcrypt from 'bcrypt';
import prisma from "../../../lib/prismadb"


export async function POST(req){
    const body = await req.json();
    const { 
      email,
      name,
      password,
     } = body;
  
     const hashedPassword = await bcrypt.hash(password, 12);
  
     const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      }
    });
  
    return new Response(JSON.stringify(user), {status: 201})


}