import { FC } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importando ícones do react-icons

interface NavegacaoProps {
  scrollLeft: () => void;
  scrollRight: () => void;
}

const Navegacao: FC<NavegacaoProps> = ({ scrollLeft, scrollRight }) => {
  return (
    <div className="flex justify-center items-center mt-4 md:hidden"> {/* Mostra apenas em telas pequenas */}
      {/* Botão de rolagem para a esquerda */}
      <button
        onClick={scrollLeft}
        className="p-3 rounded-full text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out flex items-center justify-center mx-2 shadow-lg focus:outline-none"
        aria-label="Scroll left"
      >
        <FaArrowLeft size={20} />
      </button>

      {/* Botão de rolagem para a direita */}
      <button
        onClick={scrollRight}
        className="p-3 rounded-full text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out flex items-center justify-center mx-2 shadow-lg focus:outline-none"
        aria-label="Scroll right"
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default Navegacao;
