import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <div className="fixed top-0">
        <Preloader />
      </div>
      <div className="animate-appearing">
        <Navbar />
        <Main />
        <Products />
      </div>
    </>
  );
}
