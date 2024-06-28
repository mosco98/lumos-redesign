"use client";

const Navbar = () => {
  return (
    <nav className="py-7 fixed w-full left-0 top-0 bg-white z-50">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-[82px]">
          <h1 className="text-2xl font-bold">Lumos</h1>

          <div className="flex items-center gap-8 text-[#475467] text-[15px]">
            <button className="hover:opacity-80 transition-all duration-300 ease-in-out">
              Features
            </button>
            <button className="hover:opacity-80 transition-all duration-300 ease-in-out">
              Community
            </button>
            <button className="hover:opacity-80 transition-all duration-300 ease-in-out">
              Resources
            </button>
            <button className="hover:opacity-80 transition-all duration-300 ease-in-out">
              Pricing
            </button>
          </div>
        </div>

        <button className="h-11 bg-black text-white px-[18px] py-[10px] rounded-lg hover:opacity-85 transition-all duration-300 ease-in-out font-medium text-[15px]">
          Get started for free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
