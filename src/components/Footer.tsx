import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="w-full h-44 border-2 flex items-center justify-around">
        <div className="w-1/5 h-full flex flex-col pt-4 items-start pl-4">
          <h1 className="font-subHeads text-3xl font-semibold bg-gradient-to-r from-fuchsia-700 via-purple-700 to-purple-700 text-transparent bg-clip-text">
            Contacts
          </h1>
          <div className="flex flex-col mt-3">
            <p className="font-paragraph flex items-center">
              <span className="material-symbols-outlined mr-2">mail</span>
              shoes@nike.com
            </p>
            <p className="font-paragraph flex items-center">
              <span className="material-symbols-outlined mr-2">call</span>
              +920000000000
            </p>
            <p className="font-paragraph flex items-center">
              <span className="material-symbols-outlined mr-2">home</span>
              somewhere, in pakistan
            </p>
          </div>
        </div>
        <div className="w-1/5 h-full flex flex-col pt-4 items-start pl-4">
          <h1 className="font-subHeads text-3xl font-semibold bg-gradient-to-r from-fuchsia-700 via-purple-700 to-purple-700 text-transparent bg-clip-text">
            Get Help
          </h1>
          <div className="flex flex-col mt-3">
            <p className="font-paragraph flex items-center">
              <span className="material-symbols-outlined mr-2">Help</span>
              FAQ
            </p>
            <p className="font-paragraph flex items-center">
              <span className="material-symbols-outlined mr-2">
                Local_Shipping
              </span>
              Shipping
            </p>
            <p className="font-paragraph flex items-center">
              <span className="material-symbols-outlined mr-2">upgrade</span>
              Returns
            </p>
            <p className="font-paragraph flex items-center">
              <span className="material-symbols-outlined mr-2">
                Attach_Money
              </span>
              Payment Options
            </p>
          </div>
        </div>
        <div className="w-1/5 h-full flex flex-col pt-4 items-start pl-4">
          <h1 className="font-subHeads text-3xl font-semibold bg-gradient-to-r from-fuchsia-700 via-purple-700 to-purple-700 text-transparent bg-clip-text">
            Our Stores
          </h1>
          <div className="flex flex-col mt-3">
            <p className="font-paragraph flex items-center">India</p>
            <p className="font-paragraph flex items-center">USA</p>
            <p className="font-paragraph flex items-center">Japan</p>
            <p className="font-paragraph flex items-center">Sri Lanka</p>
          </div>
        </div>
        <div className="w-1/5 h-full flex flex-col pt-4 items-start pl-4">
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
