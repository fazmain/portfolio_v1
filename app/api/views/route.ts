import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Get the views file path
const viewsFilePath = path.join(process.cwd(), "app/api/views/views.json");

export async function POST() {
  try {
    // Read the current views
    const data = await fs.readFile(viewsFilePath, "utf8");
    const { views } = JSON.parse(data);

    // Increment views
    const newViews = views + 1;

    // Write back to file
    await fs.writeFile(
      viewsFilePath,
      JSON.stringify({ views: newViews }, null, 2)
    );

    return NextResponse.json({ views: newViews });
  } catch (error) {
    console.error("Error updating views:", error);
    return NextResponse.json(
      { error: "Failed to update views" },
      { status: 500 }
    );
  }
}

// Add GET endpoint to retrieve current views
export async function GET() {
  try {
    const data = await fs.readFile(viewsFilePath, "utf8");
    const { views } = JSON.parse(data);
    return NextResponse.json({ views });
  } catch (error) {
    console.error("Error reading views:", error);
    return NextResponse.json(
      { error: "Failed to read views" },
      { status: 500 }
    );
  }
}
