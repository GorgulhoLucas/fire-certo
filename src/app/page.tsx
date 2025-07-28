// pages/index.tsx
import { NextPage } from 'next';
import Banner from './componentes/Banners/Banner_home/BannerH';
import SobreNos from './componentes/Home/sections/sobre_nos';
import Manifesto from './componentes/Home/sections/manifesto_missão';       
import Sustainability from './componentes/Home/sections/sustentabilidade';
import Differentials from './componentes/Home/sections/nosso_diferencial';
import BrandsSection from './componentes/Home/sections/nossos_parceiros';
import HelpSection from './componentes/Home/sections/secao_ajuda';
import CtaProdutos from './componentes/Home/chamada_acao/cta-produtos';

const Home: NextPage = () => {
  return (
    <div>
      <Banner />
      <SobreNos />
      <CtaProdutos/>
      <Differentials/>
      <Manifesto />  
      <Sustainability/>
      <BrandsSection/>
      <HelpSection/>
    </div>
  );
};

export default Home;
