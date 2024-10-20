import Card from "./Card";

export default function Products() {
  return (
    <>
      <div
        className="w-full h-screen pt-[77px] flex flex-col items-center"
        id="products"
      >
        <div className="w-full flex justify-center">
          <h1 className="font-headings text-7xl font-semibold bg-gradient-to-r from-fuchsia-700 via-purple-700 to-purple-700 text-transparent bg-clip-text">
            Products
          </h1>
        </div>
        <div className="flex w-full mt-[30px]">
          <div className="flex flex-wrap justify-around">
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
