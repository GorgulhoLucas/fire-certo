"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Volta para o topo sempre que o pathname mudar
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
