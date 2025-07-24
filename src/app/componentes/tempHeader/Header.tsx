import Link from "next/link";
import Image from "next/image";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="top-0 left-0 w-full p-3 bg-gradient-to-r from-[#a30e06] to-[#ff0000] text-white shadow-lg">

      <nav className="flex justify-between items-center max-w-8xl mx-auto" aria-label="Main navigation">
        <Link href="/" aria-label="Home">
          <Image
            src="/images/logo1.svg"
            alt="Fire Baterias"
            width={150}
            height={150}
            priority
          />
        </Link>
        <MainMenu />
        <MobileMenu />
      </nav>
    </header>
  );
}
