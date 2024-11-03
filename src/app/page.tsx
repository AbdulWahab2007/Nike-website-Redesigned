import Footer from "@/components/Footer";
import LoginPage from "@/components/LoginPage";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Products from "@/components/Products";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Main />
        <Products />
        <Services />
        {/* <LoginPage />
        <Footer />  */}
      </div>
    </>
  );
}
