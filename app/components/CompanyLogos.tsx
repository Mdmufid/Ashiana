import Image from "next/image";

function CompanyLogos() {
  return (
    <>
      <div className="fixed top-1/3 -right-[12rem] z-20 space-y-2 overflow-visible">
        <a
          href="https://www.grillex.in/"
          className="flex items-center transform hover:-translate-x-[12rem] transition-all duration-700 ease-in-out text-white bg-[#56c6d0] rounded-l-full px-3 py-2 uppercase text-lg font-semibold font-sans"
        >
          <i className="fab fa-instagram text-[#FD1D1D] bg-white rounded-full size-14 sm:size-20 flex items-center justify-center mr-4">
            <Image
              className="size-full object-cover rounded-full"
              src="/company-logo/Grillex.png"
              alt="Grillex Logo"
              height={1280}
              width={1280}
            />
          </i>
          Grillex
        </a>

        <a
          href="https://www.promiplastwindows.com/"
          className="flex items-center transform hover:-translate-x-[12rem] transition-all duration-700 ease-in-out text-white bg-[#05ad00] rounded-l-full px-3 py-2 uppercase text-lg font-semibold font-sans"
        >
          <i className="fab fa-facebook-f text-[#2C80D3] bg-white rounded-full size-14 sm:size-20 flex items-center justify-center mr-4">
            {" "}
            {/* <FaFacebook /> */}
            <Image
              className="size-full object-cover rounded-full"
              src="/company-logo/Promiplast.png"
              alt="Promiplast Logo"
              height={1280}
              width={1280}
            />
          </i>
          Promiplast
        </a>
        <a
          href="https://www.premiumbathware.com/"
          className="flex items-center transform hover:-translate-x-[12rem] transition-all duration-700 ease-in-out text-white bg-[#575454] rounded-l-full px-3 py-2 uppercase text-lg font-semibold font-sans"
        >
          <i className="fab fa-youtube text-green-400 bg-white rounded-full size-14 sm:size-20 flex items-center justify-center mr-4">
            <Image
              className="size-full object-cover rounded-full"
              src="/company-logo/PremiumBathware.png"
              alt="Premium Bathware Logo"
              height={1280}
              width={1280}
            />
          </i>
          Premium Bathware
        </a>
      </div>
    </>
  );
}

export default CompanyLogos;
