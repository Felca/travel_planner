import { auth } from "@/auth";
import AuthButton from "@/components/AuthButton";
import { MapIcon } from "lucide-react";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  const isLoggedIn = !!session?.user;

  return (
    <>
    <div className="min-h-screen flex flex-col">
      {/* hero section */}
      <div className="bg-gradient-to-b from-white to-blue-300 py-20 md:py-30">
        <div className="flex flex-col px-4 text-center items-center m-4">
          <h1 className="font-extrabold md:text-6xl text-4xl mb-4">
            Plan your perfect trip, every time
          </h1>
          <p>
            Create itineraries, organize destinations, and share your travel
            plans all in one place
          </p>

          <AuthButton isLoggedIn={isLoggedIn}>
            {isLoggedIn ? "Check it out" : "Log in"}
          </AuthButton>
        </div>
      </div>

      {/* features */}
      <div className="flex-grow py-16 md:py-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Plan with confidence
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* col-1 */}
          <div className="p-6 rounded-lg border border-gray-100 shadow-sm bg-white">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Image src={'globe-stand-svgrepo-com.svg'} alt={"Interactive maps"} width={30} height={30}></Image>
            </div>
            <h3 className="text-xl font-semibold mb-2">Interactive Maps</h3>
            <p className="text-gray-600">Visualize your trip with interactive maps. See your entire itinerary at a glance.</p>
          </div>

          {/* col2 */}
          <div className="p-6 rounded-lg border border-gray-100 shadow-sm bg-white">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Image src={'/day-sunny-svgrepo-com.svg'} alt={"Day-by-day itineraries"} width={30} height={30}></Image>
            </div>
            <h3 className="text-xl font-semibold mb-2">Day-by-Day Itineraries</h3>
            <p className="text-gray-600">Organize your trip day by day. Never miss a beat with structured planning.</p>
          </div>

          {/* col3 */}
          <div className="p-6 rounded-lg border border-gray-100 shadow-sm bg-white">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Image src={'drag-handle-vertical-1-svgrepo-com.svg'} alt={"Drag&Drop"} width={30} height={30}></Image>
            </div>
            <h3 className="text-xl font-semibold mb-2">Drag & Drop Planning</h3>
            <p className="text-gray-600">Easily rearrange your itinerary with simple drag and drop functionality.</p>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="w-full bg-gradient-to-b from-white to-blue-300 py-10 md:py-10 md:px-10">
        <div className="mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2025 ZenRoute. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/" className="text-sm hover:underline">Privacy Policy</a>
            <a href="/" className="text-sm hover:underline">Terms of Service</a>
            <a href="/" className="text-sm hover:underline">Contact</a>
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <p className="text-sm font-medium">Creators:</p>
            <p className="text-sm">@Scholastica Celine</p>
            <p className="text-sm">@Felicia Josephine</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
