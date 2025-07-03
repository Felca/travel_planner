interface GeocodeResult{
    country: string, 
    formattedAddress: string
}

interface GraphHopperHit {
    name: string;
    country: string;
    city?: string;
    state?: string;
    formatted: string;
}


export async function getCountryFromCoordinates(lat:number, lng:number): Promise<GeocodeResult> {
    const apiKey = process.env.GRAPHHOPPER_API_KEY;
    const response = await fetch(
        `https://graphhopper.com/api/1/geocode?reverse=true&point=${lat},${lng}&locale=en&key=${apiKey}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch geocode data");
    }

    const data = await response.json();

    const result: GraphHopperHit | undefined = data.hits?.[0];
    if (!result) {
        return {
        country: "Unknown",
        formattedAddress: "Unknown location",
        };
    }

    return {
        country: result.country || "Unknown",
        formattedAddress: result.formatted || result.name,
    };
}