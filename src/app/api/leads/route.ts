import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET() {
  try {
    const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/yasirmunir";

    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(mongoUri);
    }

    const db = mongoose.connection.db;
    if (!db) {
      return NextResponse.json({ success: false, message: "Database connection failed" }, { status: 500 });
    }

    const leads = await db
      .collection("yasrmunir")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ success: true, leads });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ success: false, message: "Lead ID is required" }, { status: 400 });
    }

    const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/yasirmunir";

    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(mongoUri);
    }

    const db = mongoose.connection.db;
    if (!db) {
      return NextResponse.json({ success: false, message: "Database connection failed" }, { status: 500 });
    }

    const result = await db.collection("yasrmunir").deleteOne({
      _id: new mongoose.Types.ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json({ success: false, message: "Lead not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
