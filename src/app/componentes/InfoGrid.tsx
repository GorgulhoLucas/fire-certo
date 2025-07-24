import React from 'react';
import { FaLock, FaCreditCard, FaBlog } from 'react-icons/fa';

export default function InfoGrid() {
  const infos = [
    {
      titulo: 'COMPRA SEGURA',
      descricao:
        'Todos os cuidados necessários para que suas informações estejam criptografadas, seguras e livres de qualquer vulnerabilidade.',
      icone: <FaLock size={24} className="text-blue-400 mb-1" />,
    },
    {
      titulo: 'FORMA DE PAGAMENTO',
      descricao:
        'Alternativas que atendem a qualquer perfil de consumidor: entre as mais tradicionais até as novidades.',
      icone: <FaCreditCard size={24} className="text-green-400 mb-1" />,
    },
    {
      titulo: 'BLOG',
      descricao:
        'Fique por dentro das nossas novidades e saiba tudo que você precisa para se manter nas tendências e no bom gosto.',
      icone: <FaBlog size={24} className="text-yellow-400 mb-1" />,
    },
  ];

  return (
    <div className="container mx-auto my-3 p-3 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {infos.map((info, index) => (
        <div
          key={index}
          className="p-3 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 bg-gray-900 text-white text-center transform hover:scale-105 transition-transform"
        >
          <div className="flex justify-center">{info.icone}</div>
          <h3 className="text-md font-semibold mt-1 mb-1">{info.titulo}</h3>
          <p className="text-gray-400 text-xs">{info.descricao}</p>
        </div>
      ))}
    </div>
  );
}
