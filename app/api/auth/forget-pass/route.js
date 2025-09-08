import userModel from "@/models/user";
import { dbConnect } from "@/service/mongo";
import { createPasswordResetToken } from "@/utils/forgetPass/authTokens";
import { sendResetEmail } from "@/utils/forgetPass/mail";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { email } = await request.json();
    if (!email) return NextResponse.json({ message: "OK" }, { status: 200 });

    await dbConnect();

    const user = await userModel.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "If an account exists, we've emailed a reset link." },
        { status: 200 }
      );
    }

    const { token, hashedToken } = createPasswordResetToken();
    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpires = Date.now() + 1000 * 60 * 60; // 1 hour
    await user.save();

    const resetUrl = `${
      process.env.NEXT_PUBLIC_APP_URL
    }/resetPassword?token=${token}&email=${encodeURIComponent(email)}`;

    await sendResetEmail({ to: email, resetUrl });

    return NextResponse.json(
      { message: "If an account exists, we've emailed a reset link." },
      { status: 200 }
    );
  } catch (err) {
    console.error("forgot-password error:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
