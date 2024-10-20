import Image from "next/image";

export default function Services() {
  return (
    <>
      <div
        className="w-full h-screen pt-[77px] flex flex-col items-center"
        id="services"
      >
        <div className="w-full flex justify-center">
          <h1 className="font-headings text-7xl font-semibold bg-gradient-to-r from-fuchsia-700 via-purple-700 to-purple-700 text-transparent bg-clip-text">
            Services
          </h1>
        </div>
        <div className="w-full h-full mb-28 flex justify-center">
          <div className=" flex w-[250px] flex-col items-center justify-center mx-4">
            <Image
              src="/icons/delivery.png"
              width={100}
              height={0}
              alt="Nike logo"
              sizes="100vw"
            />
            <h1 className="font-subHeads text-2xl font-semibold py-1">
              Fast Delivery
            </h1>
            <h1 className="text-md font-paragraph ml-8 text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h1>
          </div>
          <div className=" flex w-[250px] flex-col items-center justify-center mx-4">
            <Image
              src="/icons/service.png"
              width={100}
              height={0}
              alt="Nike logo"
              sizes="100vw"
            />
            <h1 className="font-subHeads text-2xl font-semibold py-1">
              24 x 7 Support
            </h1>
            <h1 className="text-md font-paragraph ml-8 text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h1>
          </div>
          <div className=" flex w-[250px] flex-col items-center justify-center mx-4">
            <Image
              src="/icons/replacement.png"
              width={100}
              height={0}
              alt="Nike logo"
              sizes="100vw"
            />
            <h1 className="font-subHeads text-2xl font-semibold py-1">
              10 days Replacement
            </h1>
            <h1 className="text-md font-paragraph ml-8 text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
