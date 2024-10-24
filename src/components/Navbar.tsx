import Link from "next/link";

export default function Navbar() {
  const anchorClass =
    "lg:m-5 m-[1.5vw] lg:text-xl text-[2.3vw] font-subHeads font-medium hover:bg-gradient-to-r from-fuchsia-700 to-purple-700 hover:text-transparent hover:bg-clip-text";
  const iconClass =
    "material-symbols-outlined lg:mx-2 mx-0 scale-50 md:scale-75 lg:scale-100 hover:bg-gradient-to-r from-fuchsia-700 to-purple-700 hover:text-transparent hover:bg-clip-text hover:font-bold hover:font-semibold";
  return (
    <>
      <div className=" lg:h-16 h-[8vw]  w-full fixed top-0 z-20 flex shadow-sm shadow-black bg-white ">
        <div className="image w-1/4 flex items-center">
          <h1 className="lg:text-6xl text-[6vw]  lg:ml-16 ml-4 font-bold italic tracking-tighter bg-gradient-to-r from-fuchsia-700 via-purple-700 to-purple-700 text-transparent bg-clip-text">
            NIKE&nbsp;
          </h1>
        </div>
        <div className="mid w-2/4 flex justify-center items-center">
          <Link className={anchorClass} href="#home">
            Home
          </Link>
          <Link className={anchorClass} href="#products">
            Products
          </Link>
          <Link className={anchorClass} href="#services">
            Services
          </Link>
          <Link className={anchorClass} href="#login">
            Login
          </Link>
        </div>
        <div className="right w-1/4 flex items-center justify-center pt-2">
          <Link href="">
            <span className={iconClass}>favorite</span>
          </Link>
          <Link href="">
            <span className={iconClass}>person</span>
          </Link>
          <Link href="">
            <span className={iconClass}>shopping_cart</span>
          </Link>
        </div>
      </div>
    </>
  );
}
