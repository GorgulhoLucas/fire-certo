"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import SubMenu from "./SubMenu";

const menuItems = [
  { label: "BATERIAS FIRE", path: "/" },
  { label: "PRODUTOS", path: "/produtos", subItems: [
    { label: "VEÍCULOS LEVES", path: "/produtos/veiculos-leves" },
    { label: "VEÍCULOS PESADOS", path: "/produtos/veiculos-pesados" },
    { label: "MOTOS", path: "/produtos/motos" },
    { label: "SOLAR", path: "/produtos/solares" },
    { label: "ESTACIONÁRIA", path: "/produtos/estacionarias" }
  ]},
  { label: "ENTRAR EM CONTATO", path: "/contato" },
  { label: "ENCONTRE SUA BATERIA", path: "/descubra-sua-bateria" },
  { label: "Nossos Parceiros", path: "/revendas" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (label: string) => {
    setActiveMenu(activeMenu === label ? null : label);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <>
      <button
        aria-label="Toggle navigation menu"
        className="lg:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes size={24} aria-hidden="true" /> : <FaBars size={24} aria-hidden="true" />}
      </button>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-gray-900 text-white z-40 flex flex-col items-center pt-4 px-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between w-full mb-4">
            <Image
              src="/logo1.png"
              alt="Baterias Fire"
              width={150}
              height={150}
              priority
            />
            <button
              aria-label="Close navigation menu"
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <FaTimes size={24} aria-hidden="true" />
            </button>
          </div>

          <nav className="w-full text-lg">
            {menuItems.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between border-b border-gray-700">
                  <Link href={item.path}>
                    <span className="block py-4 w-full hover:bg-gray-700" onClick={toggleMenu}>
                      {item.label}
                    </span>
                  </Link>
                  {item.subItems && (
                    <button
                      onClick={() => toggleSubMenu(item.label)}
                      className="text-gray-400 focus:outline-none"
                      aria-label={`Toggle submenu for ${item.label}`}
                    >
                      <FiChevronRight
                        className={`transform transition-transform ${
                          activeMenu === item.label ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.subItems && activeMenu === item.label && (
                  <SubMenu items={item.subItems} onItemClick={toggleMenu} />
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
