import { ConnectToDatabase } from "@/config/database";
import Property from "@/models/Property";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyDetail from "@/components/PropertyDetails";
import Link from "next/link";
import PropertyImages from "@/components/PropertyImages";
import { FaArrowLeft } from "react-icons/fa";
const PropertyPage = async ({
  params,
}: {
  params: Promise<{ id: string }>; // `params` is a Promise, so we need to await it before accessing its properties.
}) => {
  await ConnectToDatabase();
  const property = (await Property.findById((await params).id).lean()) as any;
  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-[70%_30%] w-full gap-6">
            <PropertyDetail property={property} />
          </div>
        </div>
      </section>
      <PropertyImages images={property.images} />
    </>
  );
};

export default PropertyPage;
