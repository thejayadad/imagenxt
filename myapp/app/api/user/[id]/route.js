import db from "@/lib/db";
import Donut from "@/models/Donut";


export const GET = async (request, { params }) => {
    try {
      await db.connect();
  
      const userDonuts = await Donut.find({ username: params.id }).sort({
        createAt: -1,
      });  
      return new Response(JSON.stringify(userDonuts), { status: 200 });
    } catch (error) {
      return new Response("Failed to fetch all prompts", { status: 500 });
    }
  };