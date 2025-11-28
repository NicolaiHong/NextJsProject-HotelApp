import AddPropertyForm from "@/components/AddPropertyForm";

const AddPropertyPage = () => {
  return (
    <section className="bg-blue-100">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-3 md:m-1">
          <AddPropertyForm />
        </div>
      </div>
    </section>
  );
};

export default AddPropertyPage;
