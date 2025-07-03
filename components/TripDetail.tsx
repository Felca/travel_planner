"use client";

import { Location, Trip } from "@/app/generated/prisma";
import Image from "next/image";
import { Calendar, MapPin, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Map from "@/components/ui/map";

import { useState } from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import SortableItinerary from "./SortableItinerary";


export type TripWithLocation = Trip & {
  locations: Location[];
};

interface TripDetailClientProps {
  trip: TripWithLocation;
}

export default function TripDetailClient({ trip }: TripDetailClientProps) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Image header */}
      {trip.imageurl && (
        <div className="w-full h-72 md:h-96 overflow-hidden rounded-xl shadow-lg relative">
          <Image
            src={trip.imageurl}
            alt={trip.title}
            className="object-cover"
            fill
            priority
          />
        </div>
      )}

      <div className="bg-white p-6 shadow rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900">
            {" "}
            {trip.title}{" "}
          </h1>

          <div className="flex items-center text-gray-500 mt-2">
            <Calendar className="h=5 w-5 mr-2" />
            <span className="text-lg">
              {trip.startdate.toLocaleDateString()} -{" "}
              {trip.enddate.toLocaleDateString()}
            </span>
          </div>
        </div>

        <div className="mt-4 md:mt-0">
          <Link href={`/trips/${trip.id}/itinerary/new`}>
            <Button>
              <Plus></Plus>
              Add Location
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-white p-6 shadow rounded-lg">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="overview" className="text-lg">
              Overview
            </TabsTrigger>
            <TabsTrigger value="itinerary" className="text-lg">
              Itinerary
            </TabsTrigger>
            <TabsTrigger value="map" className="text-lg">
              Map
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Trip Summary</h2>
                <div className="flex items-start">
                  <Calendar className="h-6 w-6 mr-3 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-700"> Dates </p>
                    <p className="text-sm text-gray-500">
                      {trip.startdate.toLocaleDateString()} -{" "}
                      {trip.enddate.toLocaleDateString()}
                      <br />
                      {`${Math.round(
                        (trip.enddate.getTime() - trip.startdate.getTime()) /
                          (1000 * 60 * 60 * 24)
                      )} day(s)`}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-3 text-gray-500"></MapPin>
                  <div>
                    <p className="font-medium text-gray-700">Destinations</p>
                    <p className="text-gray-500">
                      {trip.locations.length}{" "}
                      {trip.locations.length <= 1 ? "location" : "Locations"}
                    </p>
                  </div>
                </div>

                {trip.locations.length > 0 ? (
                  <div className="h-72 rounded-lg overflow-hidden shadow mt-5">
                    <Map itineraries={trip.locations}></Map>
                  </div>
                ) : (
                  <div className="text-center p-6 mt-4 bg-accent">
                    <p>Add locations to see the maps</p>
                    <Link href={`/trips/${trip.id}/itinerary/new`}>
                      <Button className="m-3">
                        <Plus></Plus>
                        Add Location
                      </Button>
                    </Link>
                  </div>
                )}

                <div className="mt-5">
                  <p className="font-medium text-gray-700">description:</p>
                  <p className="text-gray-500">{trip.description}</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* itinerary Tab */}
          <TabsContent value="itinerary" className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Full Itinerary</h2>
            </div>
            {trip.locations.length === 0 ? (
              <div className="text-center p-4">
                <p>Add locations to see the maps</p>
                <Link href={`/trips/${trip.id}/itinerary/new`}>
                  <Button>
                    <Plus />
                    Add Location
                  </Button>
                </Link>
              </div>
            ) : (
              <SortableItinerary locations={trip.locations} tripId={trip.id} />
            )}
          </TabsContent>

          {/* map Tab */}
          <TabsContent value="map" className="space-y-6">
            <div className="h-72 rounded-lg overflow-hidden shadow">
              <Map itineraries={trip.locations}/>
            </div>
            {trip.locations.length > 0 ? (
              <div className="h-72 rounded-lg overflow-hidden shadow mt-5">
                <Map itineraries={trip.locations}></Map>
              </div>
            ) : (
              <div className="text-center p-6 mt-4 bg-accent">
                <p>Add locations to see the maps</p>
                <Link href={`/trips/${trip.id}/itinerary/new`}>
                  <Button className="m-3">
                    <Plus /> Add Location
                  </Button>
                </Link>
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        <div className="text-center">
          <Link href={`/trips`}>
            <Button>
              Back to Trips
            </Button> 
          </Link>
        </div>
      </div>
    </div>
  );
}
