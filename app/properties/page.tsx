import PropertyCard from "@/components/PropertyCard";
import { ConnectToDatabase } from "@/config/database";
import Property from "@/models/Property";
import type { IProperty } from "@/models/Property";
const PropertiesPage = async () => {
  await ConnectToDatabase();
  //type PropertyLean = Omit<IProperty, "_id"> & { _id: string };
  const recentProperties = await Property.find({}).lean();

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {recentProperties.length === 0 ? (
          <p>No properties available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProperties.map((property) => (
              <PropertyCard
                key={String(property._id)}
                property={property as any}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default PropertiesPage;
