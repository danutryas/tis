import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen w-full z-10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/hero.jpg")' }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Hero Banner Content */}
      <div className="container mx-auto absolute inset-0 px-6 flex items-center justify-center text-center text-white flex-row mt-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <h1 className="font-bold mb-4 text-shadow-lg text-4xl md:text-6xl tracking-tight">
              The Incredible Space
            </h1>
            <p className="text-lg md:text-xl text-gray-300 text-shadow-sm w-full md:w-2/3 font-medium mx-auto">
              Discover the wonders of space with us as we share captivating
              insights and knowledge about the universe. Dive into a wealth of
              fascinating information designed to enhance your understanding of
              the cosmos. Join us on a journey to explore the beauty,
              complexity, and marvels of space that every enthusiast should
              explore.
            </p>
            {/* Add more content for your hero banner */}
          </div>

          <div className="mx-auto mt-8 md:mt-0">
            <div className="">
              <p className="text-lg md:text-xl text-gray-500 mb-4 font-medium">
                Ready to explore the universe with TIS?
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
                <Link
                  href="/register"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300 ease-in-out font-bold text-sm"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
