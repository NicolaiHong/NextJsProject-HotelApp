import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InforBoxes";
import HomeProperties from "@/components/HomeProperties";
import { ConnectToDatabase } from "@/config/database";
const HomePage = () => {
  ConnectToDatabase();
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
};

export default HomePage;
