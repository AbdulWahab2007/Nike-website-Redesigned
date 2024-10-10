import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Main />
    </>
  );
}
