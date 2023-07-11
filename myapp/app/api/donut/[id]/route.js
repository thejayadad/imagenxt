import db from "@/lib/db";
import { verifyJwtToken } from "@/lib/jwt";
import Donut from "@/models/Donut";

export const DELETE = async (request, { params }) => {
    try {
        await db.connect()
      const selectedDount = await Donut.findById(params.id);
      await selectedDount.deleteOne();
  
      return new Response("Donut Deleted", { status: 200 });
    } catch (err) {
      return new Response("Error Deleteing Donut", { status: 500 });
    }
  };