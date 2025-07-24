import Image from 'next/image';

interface ProdutoProps {
  imagem: string;
  titulo: string;
}

const Tiposbateria = ({ imagem, titulo }: ProdutoProps) => {
  return (
    <div className="relative w-60 h-80 m-4 shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all">
      {/* Imagem ocupando todo o espaço */}
      <Image
        src={imagem}
        alt={titulo}
        layout="fill"
        objectFit="cover"
        quality={75}
        loading="lazy"
      />
      {/* Barra inferior com título */}
      <div className="absolute bottom-0 w-full bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-2">
        <h3 className="text-lg font-semibold">{titulo}</h3>
      </div>
    </div>
  );
};

export default Tiposbateria;
