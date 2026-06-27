import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(request: Request) {
  try {
    const { fullname, email, message, phonenumber } = await request.json();

    if (!fullname || !email || !message || !phonenumber) {
      return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 });
    }

    const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/yasirmunir";

    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(mongoUri);
    }

    const db = mongoose.connection.db;
    if (!db) {
      return NextResponse.json({ success: false, message: "Database connection failed" }, { status: 500 });
    }

    await db.collection("yasrmunir").insertOne({
      fullname,
      email,
      phonenumber,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}