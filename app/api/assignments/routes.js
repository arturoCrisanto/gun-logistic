import { dbConnect } from "../../../utils/dbConnect";
import Assignment from "../../../models/Assignment";

export async function GET() {
  try {
    await dbConnect();
    const assignments = await Assignment.find({}).populate("gunId");
    return new Response(JSON.stringify(assignments), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch assignments data" }),
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const assignment = await Assignment.create(body);
    return new Response(JSON.stringify(assignment), { status: 201 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to create new assignment" }),
      { status: 500 }
    );
  }
}
