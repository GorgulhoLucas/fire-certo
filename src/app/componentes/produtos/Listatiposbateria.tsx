"use client";
import { useRef } from 'react';
import { useRouter } from 'next/navigation'; // Usando o useRouter para navegação
import Produto from './Tiposbateria';
import Navegacao from './Navegacao';

const produtos = [
  {
    imagem: '/images/veiculosleve.webp',
    titulo: 'Veículos leves',
    tipo: 'veiculos-leves',
  },
  {
    imagem: '/images/motos.webp',
    titulo: 'Motos',
    tipo: 'motos',
  },
  {
    imagem: '/images/caminhoes.webp',
    titulo: 'Veículos pesados',
    tipo: 'veiculos-pesados',
  },
  {
    imagem: '/images/solar.webp',
    titulo: 'Solares',
    tipo: 'solares',
  },
  {
    imagem: '/images/estacionarios.webp',
    titulo: 'Estacionárias',
    tipo: 'estacionarias',
  },
];

const ListaTiposBateria = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); // Inicializando o useRouter

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleClick = (tipo: string) => {
    router.push(`/produtos/${tipo}`); // Navega para a rota correta
  };

  return (
    <section className="py-16 md:py-28 relative" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="mb-4 md:mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black uppercase">
          BATERIAS <span className="text-red-500 font-bold">FIRE</span>
        </h2>
        <p className="text-base md:text-lg text-black">
          Venha conferir nossos tipos de produtos para diferentes aplicações.
        </p>
      </div>

      {/* Contêiner dos produtos com rolagem horizontal */}
      <div
        ref={containerRef}
        className="flex gap-1 md:gap-3 overflow-x-scroll scrollbar-hide snap-x px-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {produtos.map((produto, index) => (
          <div
            key={index}
            onClick={() => handleClick(produto.tipo)} // Redireciona ao clicar no produto
            className="cursor-pointer snap-center min-w-[70%] sm:min-w-[30%] lg:min-w-[20%]" // Garantindo que o item se alinhe corretamente e tenha tamanho adequado
          >
            <Produto imagem={produto.imagem} titulo={produto.titulo} />
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <div className="flex justify-center mt-4">
        <Navegacao scrollLeft={scrollLeft} scrollRight={scrollRight} />
      </div>
    </section>
  );
};

export default ListaTiposBateria;
