import { NextResponse } from "next/server";
import { sendApplicationEmail } from "@/lib/mailer";
import type { ApplicationData } from "@/types/application";

const requiredFields: (keyof ApplicationData)[] = [
  "fullName",
  "age",
  "email",
  "phone",
  "school",
  "availableDays",
  "whyKvickly",
  "strengths",
  "experience",
];

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ApplicationData>;

    for (const field of requiredFields) {
      const value = body[field];
      if (typeof value !== "string" || !value.trim()) {
        return NextResponse.json(
          { message: `Mangler felt: ${field}` },
          { status: 400 }
        );
      }
    }

    const cleanedData: ApplicationData = {
      fullName: body.fullName!.trim(),
      age: body.age!.trim(),
      email: body.email!.trim(),
      phone: body.phone!.trim(),
      school: body.school!.trim(),
      availableDays: body.availableDays!.trim(),
      whyKvickly: body.whyKvickly!.trim(),
      strengths: body.strengths!.trim(),
      experience: body.experience!.trim(),
    };

    await sendApplicationEmail(cleanedData);

    return NextResponse.json(
      { message: "Ansøgning sendt." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fejl i /api/ansoeg:", error);

    return NextResponse.json(
      { message: "Noget gik galt under afsendelse." },
      { status: 500 }
    );
  }
}