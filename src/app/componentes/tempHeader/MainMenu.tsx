"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  href: string;
  label: JSX.Element;
}

const menuItems: MenuItem[] = [
  { href: "/", label: <>Baterias <span className="text-black">Fire</span></> },
  { href: "/contato", label: <>Contato</> },
  { href: "/produtos", label: <>Produtos</> },
  { href: "/revendas", label: <>Nossos Parceiros</> },
];

export default function MainMenu() {
  const pathname = usePathname();

  return (
    <ul className="hidden lg:flex space-x-4 ml-4 font-montserrat uppercase text-sm" role="menubar">
      {menuItems.map(({ href, label }) => (
        <li
          key={href}
          role="menuitem"
          className={`hover:border-b-4 hover:border-white transition-all ${
            pathname === href ? "border-b-4 border-white" : ""
          }`}
        >
          <Link href={href} className="p-2 block">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
