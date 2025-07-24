import Contact from '../componentes/Contato/Contato';
import Banner from '../componentes/Banners/Banner_home/BannerH';
import InfoGrid from '../componentes/InfoGrid';
import FaqSection from '../componentes/Contato/faq-section';

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
