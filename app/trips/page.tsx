import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default async function TripsPage() {

    const session = await auth();
    if(!session) {
        return <div>Please sign in.</div>
    }

    return <div className="flex flex-col w-40 m-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Link href={'/trips/new'}>
            <Button variant={"default"} className="w-full max-w-lg">test</Button>
        </Link>
    </div>
}