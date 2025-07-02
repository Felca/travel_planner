"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import createTrip from "@/lib/actions/create-trip";
import { UploadButton } from "@/lib/uploadthing";
import Image from "next/image";
import { useState, useTransition } from "react";

export default function NewTrip() {
  const [isPending, startTransition] = useTransition();
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Title</CardTitle>
            <CardDescription>Description</CardDescription>
            <CardAction>Action</CardAction>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam aliquam, quae laudantium corrupti animi fugiat dolor
              aliquid delectus modi dolorum accusantium libero ipsum, sed iure
              praesentium rerum? Eveniet, doloremque veniam.
            </p>
          </CardContent>
          <CardFooter>
            <p>Footer</p>
          </CardFooter>
        </Card>
      </div>

      {/* to use actions --> use transition hook */}
      {/* to keep track of the state */}

      <div className="max-w-lg mx-auto mt-10">
        <Card>
          <CardHeader>
            <CardTitle>New Trip</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              className="grid gap-4"
              action={(formData: FormData) => {
                if(imageUrl) {
                  formData.append("imageurl", imageUrl);
                }

                startTransition(() => {
                  createTrip(formData);
                });
              }}
            >
              <div>
                <div className="grid gap-2">
                  <label>Name of your trip: </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Bandung trip..."
                    className="border-2 p-1 focus:border-blue-600"
                    required
                  ></input>
                </div>
              </div>

              <div>
                <div className="grid gap-2">
                  <label>Description: </label>
                  <textarea
                    name="description"
                    placeholder="Lorem ipsum..."
                    className="border-2 p-1 focus:border-blue-600"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="grid gap-2">
                    <label>Start date: </label>
                    <input
                      type="date"
                      name="start-date"
                      className="border-2 p-1 focus:border-blue-600"
                      required
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="grid gap-2">
                    <label>End date: </label>
                    <input
                      type="date"
                      name="end-date"
                      className="border-2 p-1 focus:border-blue-600"
                      required
                    ></input>
                  </div>
                </div>
              </div>

              <div>
                <label>Trip Image</label>
                {imageUrl && (
                    <Image
                    src={imageUrl}
                    alt="Trip review"
                    className="w-full mb-4 rounded-mb max-h-48 object-cover"
                    width={300}
                    height={100}
                    ></Image>
                )}

                <UploadButton
                    endpoint={"imageUploader"}
                    // when client have uploaded picture
                    onClientUploadComplete={(res) => {
                    // if res isnt null and only one pict and take its url // go up
                    if (res && res[0].ufsUrl) {
                        setImageUrl(res[0].ufsUrl);
                    }
                    }}
                    onUploadError={(error: Error) => {
                    console.error("Upload error ", error);
                    }}
                ></UploadButton>
              </div>

              {/* when its still pending make the button disabled */}
              <Button type="submit" disabled={isPending}>
                {isPending ? "Creating" : "Create Trip"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
