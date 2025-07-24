import Image from 'next/image';

interface ServicoCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServicoCard = ({ icon, title, description }: ServicoCardProps) => {
  return (
    <div className="w-[280px] h-[360px] rounded-[5px] bg-[#212121] shadow-[20px_20px_40px_rgba(255,255,255,0.8),_-20px_-20px_40px_rgba(255,255,255,0.8)] transition-transform transform hover:scale-105 hover:shadow-[25px_25px_50px_rgba(255,255,255,1)]">
      <div className="bg-gradient-to-r from-red-600 via-red-600 to-red-700 rounded-t-[5px] p-4 flex flex-col items-center text-center w-full">
        <Image 
          src={icon} 
          alt={title} 
          width={80} 
          height={80} 
          className="mb-4" 
          loading="lazy" 
        />
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
      </div>
      <div className="p-12 bg-white text-black text-center rounded-b-[5px]">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServicoCard;
