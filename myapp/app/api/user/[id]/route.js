import db from "@/lib/db";
import Donut from "@/models/Donut";
import User from "@/models/User";


export const GET = async (request, { params }) => {
    try {
      await db.connect();
  
      const userDonuts = await Donut.find({ username: params.id }).sort({
        createAt: -1,
      });  
      // const donuts = await User.find({donuts})

      return new Response(JSON.stringify(userDonuts), { status: 200 });
    } catch (error) {
      return new Response("Failed to fetch all prompts", { status: 500 });
    }
  };