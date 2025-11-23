"use server";
async function addProperty(data: FormData) {
  //Access all values from the amenities field and images field
  const amenities = data.getAll("amenities") as string[];
  const images = data
    .getAll("images")
    .filter((f) => f && typeof f === "object" && "name" in f && f.name !== "");
  console.log(images);
  const propertyData = {
    type: data.get("type") as string,
    name: data.get("name") as string,
    description: data.get("description") as string,
    location: {
      street: data.get("location.street") as string,
      city: data.get("location.city") as string,
      state: data.get("location.state") as string,
      zip: data.get("location.zipcode") as string,
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
}
export default addProperty;
