import Image from "next/image";
import Link from "next/link";

const Banner2 = () => {
  return (
    <section className="relative bg-black text-white flex flex-col md:flex-row items-center">
      {/* Coluna de Texto */}
      <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-red-600">FIRE,</span> A Potência Que Você Precisa, Onde Quer Que Vá.
        </h2>
        <p className="mb-6 text-justify text-sm md:text-lg">
          Há mais de 20 anos, a FIRE se dedica à fabricação de baterias automotivas com tecnologia de ponta e um compromisso inabalável com a inovação. Utilizando materiais de alta qualidade e processos de fabricação avançados, transformamos componentes de lítio em soluções de energia confiáveis e eficientes. Com paixão e expertise, oferecemos baterias que não apenas atendem, mas superam as expectativas dos motoristas modernos, garantindo desempenho e durabilidade excepcionais.
        </p>
        <div className="flex justify-center md:justify-start w-full">
          <Link href="/contato" passHref>
            <button className="bg-white text-black px-6 py-2 rounded-md font-semibold">
              Saiba mais
            </button>
          </Link>
        </div>
      </div>
      
      {/* Coluna da Imagem */}
      <div className="w-full md:w-1/2 h-[300px] md:h-[600px] relative">
        <Image
          src="/banner2.jpg" 
          alt="Imagem de um carro simbolizando potência e desempenho"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom" 
          priority
        />
      </div>
    </section>
  );
};

export default Banner2;
