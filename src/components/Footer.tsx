import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="w-full lg:h-44 h-40 border-2 flex items-center justify-around">
        <div className="lg:w-1/5 w-1/2 h-full flex flex-col lg:pt-4 pt-1 items-start pl-4">
          <h1 className="font-subHeads lg:text-3xl text-[5vw] font-semibold bg-gradient-to-r from-fuchsia-700 via-purple-700 to-purple-700 text-transparent bg-clip-text">
            Contacts
          </h1>
          <div className="flex flex-col mt-3">
            <p className="font-paragraph flex items-center lg:text-[1.2vw] text-[3.2vw]">
              <span className="material-symbols-outlined mr-2">mail</span>
              shoes@nike.com
            </p>
            <p className="font-paragraph flex items-center lg:text-[1.2vw] text-[3.2vw]">
              <span className="material-symbols-outlined mr-2">call</span>
              +920000000000
            </p>
            <p className="font-paragraph flex items-center lg:text-[1.2vw] text-[3.2vw]">
              <span className="material-symbols-outlined mr-2">home</span>
              somewhere, in pakistan
            </p>
          </div>
        </div>
        <div className="lg:w-1/5 w-1/2 h-full flex flex-col lg:pt-4 pt-1 items-start pl-4">
          <h1 className="font-subHeads lg:text-3xl text-[5vw] font-semibold bg-gradient-to-r from-fuchsia-700 via-purple-700 to-purple-700 text-transparent bg-clip-text">
            Get Help
          </h1>
          <div className="flex flex-col mt-3">
            <p className="font-paragraph flex items-center lg:text-[1.2vw] text-[3.2vw]">
              <span className="material-symbols-outlined mr-2">Help</span>
              FAQ
            </p>
            <p className="font-paragraph flex items-center lg:text-[1.2vw] text-[3.2vw]">
              <span className="material-symbols-outlined mr-2">
                Local_Shipping
              </span>
              Shipping
            </p>
            <p className="font-paragraph flex items-center lg:text-[1.2vw] text-[3.2vw]">
              <span className="material-symbols-outlined mr-2">upgrade</span>
              Returns
            </p>
            <p className="font-paragraph flex items-center lg:text-[1.2vw] text-[3.2vw]">
              <span className="material-symbols-outlined mr-2">
                Attach_Money
              </span>
              Payment Options
            </p>
          </div>
        </div>
        <div className="w-1/5 h-full lg:flex hidden flex-col pt-4 items-start pl-4">
          <h1 className="font-subHeads text-3xl font-semibold bg-gradient-to-r from-fuchsia-700 via-purple-700 to-purple-700 text-transparent bg-clip-text">
            Our Stores
          </h1>
          <div className="flex flex-col mt-3">
            <p className="font-paragraph flex items-center lg:text-[1.2vw] text-[3.2vw]">
              India
            </p>
            <p className="font-paragraph flex items-center lg:text-[1.2vw] text-[3.2vw]">
              USA
            </p>
            <p className="font-paragraph flex items-center lg:text-[1.2vw] text-[3.2vw]">
              Japan
            </p>
            <p className="font-paragraph flex items-center lg:text-[1.2vw] text-[3.2vw]">
              Sri Lanka
            </p>
          </div>
        </div>
        <div className="w-1/5 h-full lg:flex hidden flex-col pt-4 items-start pl-4">
          <h1 className="font-subHeads text-3xl font-semibold bg-gradient-to-r from-fuchsia-700 via-purple-700 to-purple-700 text-transparent bg-clip-text">
            Follow Us
          </h1>
          <div className="flex mt-3 w-3/4 justify-between">
            <Image
              src="/icons/youtube.png"
              width={40}
              height={0}
              alt="Youtube logo"
              sizes="100vw"
              className="hover:cursor-pointer"
            />
            <Image
              src="/icons/twitter.png"
              width={40}
              height={0}
              alt="Twitter logo"
              sizes="100vw"
              className="hover:cursor-pointer"
            />
            <Image
              src="/icons/facebook.png"
              width={40}
              height={0}
              alt="Facebook logo"
              sizes="100vw"
              className="hover:cursor-pointer"
            />
            <Image
              src="/icons/instagram.png"
              width={40}
              height={0}
              alt="Instagram logo"
              sizes="100vw"
              className="hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
