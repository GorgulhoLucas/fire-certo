// components/servicos/ListaServicos.tsx
import Link from 'next/link';
import ServicoCard from './ServicoCard';

const ListaServicos = () => {
  return (
    <section className="py-16 min-h-[90vh] text-black flex items-center justify-center" style={{ backgroundColor: '#dddddd' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 md:space-x-6 px-6">
        
        <Link href="/sobre-nos" aria-label="Sobre nós">
          <ServicoCard
            icon="/images/Servicos/calendario.png" 
            title="+26 anos"
            description="Com mais de 26 anos de atuação, a Baterias FIRE tem uma trajetória marcada por inovações e crescimento sustentável."
          />
        </Link>

        <Link href="/revenda" aria-label="Revenda">
          <ServicoCard
            icon="/images/Servicos/distribuidor.png"
            title="Revenda"
            description="Na Baterias Fire, fortalecemos parcerias com nossos revendedores por meio de um atendimento personalizado e suporte constante."
          />
        </Link>

        <Link href="/sos-bateria" aria-label="SOS Bateria">
          <ServicoCard
            icon="/images/Servicos/sos.png"
            title="SOS Bateria"
            description="Algum imprevisto com sua bateria? Basta ligar, e nossa equipe de socorro estará a caminho para ajudar rapidamente."
          />
        </Link>

      </div>
    </section>
  );
};

export default ListaServicos;
