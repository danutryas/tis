// components/Header.js
import Link from "next/link";

const Header = () => {
  return (
    <header className=" text-white h-12 z-50 absolute top-3 w-full ">
      <div className="container mx-auto p-4 md:flex md:justify-between md:items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">
            <Link
              href="/"
              className="text-white font-bold tracking-widest text-xl"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              TIS
            </Link>
          </h1>
        </div>
        <div className="hidden md:flex md:items-center space-x-4">
          <nav role="navigation">
            <ul className="flex space-x-4">
              <li>
                <Link href="/product" className="text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="text-sm font-semibold leading-6 text-white flex items-center"
          >
            Log in <span className="ml-2">&#10132;</span>
          </Link>
          <a href="#" className="text-white md:hidden">
            <span className="icon-menu h-6"></span>
          </a>
        </div>
        {/* Responsive Menu */}
        <div className="md:hidden mt-4">
          <nav className="block">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link href="/product" className="text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
