
import Donut from "@/models/Donut";
import db from "@/lib/db";
import { NextResponse } from "next/server";


export const POST = async (request) => {
    const body = await request.json();
  
    const newDonut = new Donut(body);
  
    try {
      await db.connect();
  
      await newDonut.save();
  
      return new NextResponse("Post has been created", { status: 201 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };