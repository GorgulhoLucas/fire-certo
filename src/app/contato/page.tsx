import Contact from '../componentes/Contato/contato_secao';
import FaqSection from '../componentes/Contato/perguntas_frequentes';

export default function ProdutosPage() {
  return (
    <section className="items-center text-center">
      <div className="">
        <Contact />
        <FaqSection/>
      </div>
      
      {/* Aqui você pode listar os produtos */}
    </section>
  );
}
