import { query } from "../config/route";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response): Promise<NextResponse> {
  try {
    const users = await query("SELECT * FROM projects");
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
