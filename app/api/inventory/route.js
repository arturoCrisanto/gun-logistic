import { dbConnect } from "../../../utils/dbConnect";
import Gun from "../../../models/Gun";

// GET handler to fetch all guns from the database
export async function GET() {
  try {
    await dbConnect();
    const guns = await Gun.find({});

    // Serialize the gun data properly
    const serializedGuns = guns.map((gun) => ({
      _id: gun._id.toString(), // Convert MongoDB ObjectId to string
      serialNo: gun.serialNo,
      type: gun.type,
      model: gun.model,
      caliber: gun.caliber,
      status: gun.status,
      maintenanceLogs: gun.maintenanceLogs,
    }));

    return new Response(JSON.stringify(serializedGuns), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch guns data" }),
      { status: 500 }
    );
  }
}

// POST handler to add a new gun to the database
export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json(); // Parse incoming JSON data

    // Validate body fields
    if (!body.serialNo || !body.type || !body.model) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const gun = await Gun.create(body); // Create a new gun entry in the DB
    return new Response(JSON.stringify(gun), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to create new gun" }), {
      status: 500,
    });
  }
}
