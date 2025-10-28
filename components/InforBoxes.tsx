import InforBox from "./InforBox";
const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InforBox
            heading="For Renters"
            buttonInfo={{
              text: "Browse Properties",
              link: "/properties",
              backgroundColor: "bg-black",
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InforBox>
          <InforBox
            heading="For Property Owners"
            backgroundColor="bg-blue-100"
            textColor="text-black-700"
            buttonInfo={{
              text: "Add Properties",
              link: "/properties/add",
              backgroundColor: "bg-blue-500",
            }}
          >
            List your properties and reach potential tenants. Rent as an airbnb
            or long term.
          </InforBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
