import { dbConnect } from "../../../../utils/dbConnect";
import Gun from "../../../../models/Gun";

export async function GET() {
  await dbConnect();
  const guns = await Gun.find({});
  return new Response(JSON.stringify(guns), { status: 200 });
}

export async function POST(request) {
  await dbConnect();
  const body = await request.json();
  const gun = await Gun.create(body);
  return new Response(JSON.stringify(gun), { status: 201 });
}
