// pages/index.tsx
import { NextPage } from 'next';
import Banner from './componentes/Banners/Banner_home/BannerH';
import SobreNos from './componentes/Home/SobreNos';
import Manifesto from './componentes/Home/Manifesto';       
import ListaServicos from './componentes/Home/ListaServicos';
import InfoGrid from './componentes/InfoGrid';
import Sustainability from './componentes/Home/Sustainability';
import Differentials from './componentes/Home/Differentials';
import BrandsSection from './componentes/Home/brands-section';
import HelpSection from './componentes/Home/help-section';
import CtaProdutos from './componentes/Home/cta-produtos';

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
