import Image from "next/image";

export default function Services() {
  return (
    <>
      <div
        className="w-full h-screen lg:pt-[77px] pt-[50px] flex flex-col items-center"
        id="services"
      >
        <div className="w-full flex justify-center">
          <h1 className="font-headings lg:text-7xl text-[11vw] font-semibold bg-gradient-to-r from-fuchsia-700 via-purple-700 to-purple-700 text-transparent bg-clip-text">
            Services
          </h1>
        </div>
        <div className="w-full h-full mb-28 flex lg:flex-row flex-col justify-center items-center">
          <div className=" flex  flex-col items-center justify-center mx-4 lg:my-0 my-2">
            <Image
              src="/icons/delivery.png"
              width={100}
              height={0}
              alt="Nike logo"
              sizes="100vw"
              className="lg:scale-100 scale-90"
            />
            <h1 className="font-subHeads lg:text-2xl text-[5vw] font-semibold py-1">
              Fast Delivery
            </h1>
            <h1 className="lg:text-[1vw] text-[3vw] font-paragraph lg:ml-8 text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h1>
          </div>
          <div className=" flex  flex-col items-center justify-center mx-4 lg:my-0 my-2">
            <Image
              src="/icons/service.png"
              width={100}
              height={0}
              alt="Nike logo"
              sizes="100vw"
              className="lg:scale-100 scale-90"
            />
            <h1 className="font-subHeads lg:text-2xl text-[5vw] font-semibold py-1">
              24 x 7 Support
            </h1>
            <h1 className="lg:text-[1vw] text-[3vw] font-paragraph lg:ml-8 text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h1>
          </div>
          <div className=" flex  flex-col items-center justify-center mx-4 lg:my-0 my-2">
            <Image
              src="/icons/replacement.png"
              width={100}
              height={0}
              alt="Nike logo"
              sizes="100vw"
              className="lg:scale-100 scale-90"
            />
            <h1 className="font-subHeads lg:text-2xl text-[5vw] font-semibold py-1">
              10 days Replacement
            </h1>
            <h1 className="lg:text-[1vw] text-[3vw] font-paragraph lg:ml-8 text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
