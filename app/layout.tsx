import "@/assets/style/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metdata = {
  title: "My Next.js App",
  keywords: ["Next.js", "React", "TypeScript"],
  description: "A simple Next.js application",
};

//if you add favicon in app directory it will automatically be used in Next.js
//destructuring children from props
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
