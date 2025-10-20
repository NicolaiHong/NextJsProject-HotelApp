import properties from "../properties.json";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
const HomeProperties = () => {
  const recentProperties = properties.slice(0, 6); // Get the first 6 properties

  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:conatiner m-auto px-4 py-6">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Properties
          </h2>
          {properties.length === 0 ? (
            <p>No properties available.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentProperties.map((properties) => (
                <PropertyCard key={properties._id} property={properties} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="flex justify-center mb-10">
        <Link
          href="/properties"
          className="inline-flex items-center justify-center bg-black text-white h-9 px-4 rounded-2xl text-sm leading-none hover:bg-gray-700 transition-colors"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
