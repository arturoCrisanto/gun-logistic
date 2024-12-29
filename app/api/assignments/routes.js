import { dbConnect } from "../../../utils/dbConnect";
import Assignment from "../../../models/Assignment";

export async function GET() {
  await dbConnect();
  const assignments = await Assignment.find({}).populate("gunId");
  return new Response(JSON.stringify(assignments), { status: 200 });
}

export async function POST(request) {
  await dbConnect();
  const body = await request.json();
  const assignment = await Assignment.create(body);
  return new Response(JSON.stringify(assignment), { status: 201 });
}
