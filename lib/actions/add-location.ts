"use server"

import { auth } from "@/auth"

async function geocodeAddress(address: string){
    
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


}