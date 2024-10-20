import Link from "next/link";

export default function Navbar() {
  const anchorClass =
    "m-5 text-xl font-subHeads font-medium hover:bg-gradient-to-r from-fuchsia-700 to-purple-700 hover:text-transparent hover:bg-clip-text";
  const iconClass =
    "material-symbols-outlined mx-2 hover:bg-gradient-to-r from-fuchsia-700 to-purple-700 hover:text-transparent hover:bg-clip-text hover:font-bold hover:font-semibold";
  return (
    <>
      <div className=" fixed top-0 z-20 h-16 w-full flex shadow-sm shadow-black bg-white ">
        <div className="image w-1/4 flex items-center">
          <h1 className="text-6xl  ml-16 font-bold italic tracking-tighter bg-gradient-to-r from-fuchsia-700 via-purple-700 to-purple-700 text-transparent bg-clip-text">
            NIKE&nbsp;
          </h1>
        </div>
        <div className="mid w-2/4 flex justify-center items-center">
          <Link className={anchorClass} href="">
            Home
          </Link>
          <Link className={anchorClass} href="">
            Products
          </Link>
          <Link className={anchorClass} href="">
            Services
          </Link>
          <Link className={anchorClass} href="">
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
