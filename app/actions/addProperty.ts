"use server";
import { ConnectToDatabase } from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import cloudinary from "@/config/cloudinary";

async function addProperty(data: FormData) {
  await ConnectToDatabase();

  const sessionUser = await getSessionUser();
  if (!sessionUser || !sessionUser.userId) {
    throw new Error("Unauthorized");
  }
  const { userId } = sessionUser;

  //Access all values from the amenities field and images field
  const amenities = (data.getAll("amenities") as string[]).filter(Boolean);

  //get array of images from form data and normalize them
  const rawImages = data.getAll("images").filter(Boolean);
  const fileObjects = rawImages.filter(
    (f) => typeof f === "object" && f !== null && "name" in f
  ) as File[];
  const images = fileObjects.filter((file) => file.name !== "");
  const propertyData = {
    Owner: userId,
    type: data.get("type") as string,
    name: data.get("name") as string,
    description: data.get("description") as string,
    location: {
      street: (data.get("location.street") as string) || "",
      city: (data.get("location.city") as string) || "",
      state: (data.get("location.state") as string) || "",
      zipcode: (data.get("location.zipcode") as string) || "",
    },
    beds: Number(data.get("beds")),
    baths: Number(data.get("baths")),
    square_feet: Number(data.get("square_feet")),
    amenities: amenities,
    rates: {
      weekly: data.get("rates.weekly")
        ? Number(data.get("rates.weekly"))
        : undefined,
      monthly: data.get("rates.monthly")
        ? Number(data.get("rates.monthly"))
        : undefined,
      nightly: data.get("rates.nightly")
        ? Number(data.get("rates.nightly"))
        : undefined,
    },
    seller_info: {
      name: data.get("seller_info.name") as string,
      email: data.get("seller_info.email") as string,
      phone: data.get("seller_info.phone") as string,
    },
  };
  const uploadPromises = images.map(async (imageFile) => {
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64 = buffer.toString("base64");
    const mimeType = imageFile.type;

    const result = await cloudinary.uploader.upload(
      `data:${mimeType};base64,${base64}`,
      { folder: "propertypulse" }
    );

    return result.secure_url;
  });

  const imagesURLs = await Promise.all(uploadPromises);

  const newProperty = new Property({ ...propertyData, images: imagesURLs });
  await newProperty.save();

  // Revalidate the properties listing page to show the new property
  revalidatePath("/properties");
  redirect(`/properties/${newProperty._id.toString()}`);
}
export default addProperty;
