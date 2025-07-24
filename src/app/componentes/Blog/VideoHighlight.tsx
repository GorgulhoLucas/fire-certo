import React from "react";

const VideoHighlight = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full bg-white items-center justify-center px-4 lg:px-0 min-h-[75vh]">
      <div className="relative flex flex-col lg:flex-row w-full max-w-6xl rounded-lg overflow-hidden shadow-lg lg:space-x-6">
        {/* Informações do texto no lado esquerdo */}
        <div className="w-full lg:w-1/2 bg-white p-10 text-gray-800 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Blog da Fire Baterias: Conheça mais sobre nós
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            O blog da Fire Baterias é um espaço dedicado para que você possa conhecer mais sobre a nossa empresa, nossos valores e a nossa paixão por oferecer soluções energéticas de qualidade. Aqui, você encontra conteúdos que apresentam nossos produtos, nossos diferenciais e o que nos motiva a entregar o melhor em baterias.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Acompanhe nossas publicações para se aprofundar no universo Fire Baterias, entender como trabalhamos e saber como podemos ajudar você a encontrar a bateria ideal para suas necessidades. Este é o nosso jeito de estar mais próximo e de compartilhar um pouco da nossa história com você.
          </p>
        </div>


        {/* Vídeo no lado direito */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto">
          <iframe
            className="w-full h-full"
            src=""
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoHighlight;
