import Link from "next/link";
import PropertiesPage from "./properties/page";
const HomePage = () => {
  return (
    <div className="texr-2xl">
      <h1 className="text-3xl">Welcome</h1>
      <Link href="/properties">Properties</Link>
    </div>
  );
};

export default HomePage;
