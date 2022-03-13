import Image from "next/image";
import Link from "next/link";

import Logo from "../Images/5e002ff58d0e1e24353aad96_logo-white-c.png";

export default function Navbar() {
  return (
    <div
      style={{
        background:
          "linear-gradient(360deg, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 100%)",
      }}
      className="navbar fixed z-30 w-full "
    >
      <ul className="flex font-Basic pt-10 text-[16px] h5 items-center text-gray-300 justify-between">
        <div className="logo pl-6">
          <Link href="/Homepage">
            <Image
              src={Logo}
              className="cursor-pointer"
              height="24"
              width="68"
            ></Image>
          </Link>
        </div>
        <div className="pages md:flex hidden gap-10">
          <li className="hover">Using Play</li>
          <li className="hover">
            <Link href="/Features">
              <a>Features</a>
            </Link>
          </li>
          <li className="hover">News</li>
          <li className="hover">Support</li>
          <li className="hover">FAQ</li>
          <li className="hover">Careers</li>
        </div>
        <div className="download  md:flex hidden text-[#17ffa6] pr-6">
          Download Play <span className="ml-3"></span>
        </div>
        <div className="download  md:hidden flex text-[#8cb9b4] pr-6">
          <nav className="menu flex flex-col gap-2 -mt-2">
            <span className="w-7 rounded-lg border-[1px] border-white"></span>
            <span className="w-7 rounded-lg border-[1px] border-white"></span>
          </nav>
        </div>
      </ul>
    </div>
  );
}
