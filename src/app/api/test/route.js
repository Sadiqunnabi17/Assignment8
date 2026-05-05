import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("skillsphere");

    const result = await db.collection("test").insertOne({
      message: "MongoDB connected!",
      time: new Date(),
    });

    return Response.json({
      success: true,
      insertedId: result.insertedId,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}