import properties from "../../properties.json";
import PropertyCard from "@/components/PropertyCard";
const PropertiesPage = () => {
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:conatiner m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No properties available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((properties) => (
              <PropertyCard key={properties._id} property={properties} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default PropertiesPage;
