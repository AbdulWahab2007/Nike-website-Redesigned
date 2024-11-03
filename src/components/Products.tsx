import Card from "./Card";

export default function Products() {
  return (
    <>
      <div
        className="w-ful lg:h-screen lg:pt-[77px] pt-[12vw] flex flex-col items-center"
        id="products"
      >
        <div className="w-full flex justify-center">
          <h1 className="font-headings lg:text-7xl text-[11vw] font-semibold bg-gradient-to-r from-fuchsia-700 via-purple-700 to-purple-700 text-transparent bg-clip-text">
            Products
          </h1>
        </div>
        <div className="flex w-full lg:mt-[30px]">
          <div className="flex lg:flex-row flex-col flex-wrap lg:justify-around items-center">
            <Card shoesNum="7" />
            <Card shoesNum="2" />
            <Card shoesNum="3" />
            <Card shoesNum="4" />
            <Card shoesNum="5" />
            <Card shoesNum="6" />
          </div>
        </div>
      </div>
    </>
  );
}
