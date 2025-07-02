"use server"
import { auth } from "@/auth";
import { prisma } from "../prisma";
import { redirect } from "next/navigation";

// get input
// make sure user session not null
// validate input not null
// date is still String format make it Date()
// pass the data to database trip --> cuz we have npx prisma generate --> we have direct access
// redirect page
export default async function createTrip(formData: FormData) {
    const session = await auth();
    if(!session || !session.user?.id) {
        throw new Error("Not authenticated");
    }

    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    const startdateStr = formData.get("start-date")?.toString();
    const enddateStr = formData.get("end-date")?.toString();

    if(!title || !description || !startdateStr || !enddateStr) {
        throw new Error("Fields cannot be empty.");
    }

    const startdate = new Date(startdateStr);
    const enddate = new Date(enddateStr);

    await prisma.trip.create ({
        data: {
            title,
            description,
            startdate,
            enddate,
            userId: session.user?.id
        }
    });
    redirect("/trips");
}