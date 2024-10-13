import Image from "next/image";

export default function Main() {
  const logoClass = "my-2 bg-white hover:cursor-pointer";
  return (
    <>
      <div
        style={{
          backgroundImage: `url('/images/Background_Dark.png')`,
          backgroundSize: "85%",
        }}
        className="container flex justify-between w-full h-[660px] bg-cover bg-no-repeat bg-center mt-3"
      >
        <div className="left w-[45%] mx-1 h-full  flex flex-col">
          <h1 className="text-8xl font-serif mt-40 ml-16 font-bold bg-gradient-to-r from-fuchsia-700 via-purple-700 to-purple-700 text-transparent bg-clip-text">
            NIKE
          </h1>
          <h1 className="text-6xl ml-16 font-bold bg-gradient-to-r from-fuchsia-700 via-purple-700 to-purple-700 text-transparent bg-clip-text">
            COLLECTION
          </h1>
          <p className="ml-16 mt-6 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            quod, libero aliquam perferendis quae molestias ratione dolorem
            optio quos mollitia dolore, quaerat esse sint possimus aliquid
            asperiores itaque officia repellendus.
          </p>
          <div className="flex ml-16 mt-4 w-[199px]">
            <div className="relative group">
              <button className="relative inline-block p-px font-semibold leading-6 text-white bg-white cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-700 via-purple-700 to-purple-700 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                <span className="relative z-10 block px-6 py-3 rounded-xl bg-black">
                  <div className="relative z-10 flex items-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      SHOP NOW
                    </span>
                    <svg
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                      data-slot="icon"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className=" flex image w-2/5 mx-1 h-full">
          <Image
            src="/images/shoes.png"
            width={0}
            height={0}
            alt="Nike logo"
            sizes="100vw"
            className="w-[602px] h-[628px]"
          />
        </div>
        <div className="right w-[50px] flex flex-col justify-center h-full mx-1">
          <Image
            src="/icons/facebook.png"
            width={40}
            height={0}
            alt="Nike logo"
            style={{ borderRadius: "50%" }}
            className={logoClass}
          />
          <Image
            src="/icons/youtube.png"
            width={40}
            height={0}
            alt="Nike logo"
            style={{ borderRadius: "50%" }}
            className={logoClass}
          />
          <Image
            src="/icons/twitter.png"
            width={40}
            height={0}
            alt="Nike logo"
            style={{ borderRadius: "50%" }}
            className={logoClass}
          />
          <Image
            src="/icons/instagram.png"
            width={40}
            height={0}
            alt="Nike logo"
            style={{ borderRadius: "50%" }}
            className={logoClass}
          />
        </div>
      </div>
    </>
  );
}
