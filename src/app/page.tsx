import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <div className="animate-appearing">
        <Navbar />
        <Main />
      </div>
    </>
  );
}
