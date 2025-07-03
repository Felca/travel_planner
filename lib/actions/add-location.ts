"use server"

import { auth } from "@/auth"
import { prisma } from "../prisma";
import { redirect } from "next/navigation";

async function geocodeAddress(address: string){
    const apiKey = process.env.GRAPHHOPPER_API_KEY;
    const encodedAddress = encodeURIComponent(address);
    const response = await fetch(
        `https://graphhopper.com/api/1/geocode?q=${encodedAddress}&locale=en&key=${apiKey}`
    );

    const data = await response.json();

    // GraphHopper returns results in the 'hits' array
    if (data.hits && data.hits.length > 0) {
      const firstResult = data.hits[0];
      const { lat, lng } = firstResult.point;
      return { lat, lng };
    } else {
      throw new Error(`No geocoding results found for address: ${address}`);
    }

}

export async function addLocation(formData: FormData, tripId: string){
    const session = await auth()
    if(!session){
        throw new Error("Not authenticated")
    }

    const address = formData.get("address")?.toString()
    if(!address) {
        throw new Error("Missing address")
    }

    const {lat, lng} = await geocodeAddress(address);

    const count = await prisma.location.count({
        where: {tripId},
    })

    await prisma.location.create({
        data: {
            locationTitle: address,
            lat,
            lng,
            tripId,
            order: count
        }
    });

    redirect(`/trips/${tripId}`)
}