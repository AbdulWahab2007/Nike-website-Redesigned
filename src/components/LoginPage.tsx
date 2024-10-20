import Image from "next/image";

export default function LoginPage() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('/images/loging_bg.png')`,
        }}
        className="w-full h-screen pt-[77px] flex bg-center bg-no-repeat bg-cover"
      >
        <div className="w-1/2 flex justify-center">
          <Image
            src="/images/logshoes.png"
            width={600}
            height={0}
            alt="Nike logo"
            sizes="100vw"
          />
        </div>
        <div className="w-1/2 h-full flex flex-col items-center pt-16">
          <h1 className="text-7xl font-caveat font-bold mb-6">Welcome Back!</h1>
          <div className="flex flex-col w-1/2 my-2">
            <p className="text-xl font-paragraph">Username</p>
            <input
              type="text"
              className="bg-transparent border-2 border-purple-600 rounded-md w-full h-10 p-2 placeholder:text-gray-700"
              placeholder="User Name"
            />
          </div>
          <div className="flex flex-col w-1/2 my-2">
            <p className="text-xl font-paragraph">Password</p>
            <input
              type="text"
              className="bg-transparent border-2 border-purple-600 rounded-md w-full h-10 p-2 placeholder:text-gray-700"
              placeholder="Password"
            />
            <div className="flex w-full justify-end">
              <p className="text-md font-subHeads font-semibold">
                Forgot password ?
              </p>
            </div>
          </div>
          <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-gradient-to-r from-fuchsia-700 via-purple-700 to-purple-700 backdrop-blur-lg w-1/2 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
            <span className="text-lg">Login</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
              <div className="relative h-full w-10 bg-white/20"></div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
