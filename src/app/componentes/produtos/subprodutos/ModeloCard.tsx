import React from 'react';
import Image from 'next/image';
import { Modelo } from './types';  // Importando Modelo de types.ts

interface ModeloCardProps {
  modelo: Modelo;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const ModeloCard = ({ modelo, isSelected, onSelect }: ModeloCardProps) => {
  return (
    <div
      onClick={() => onSelect(modelo.id)}
      className={`cursor-pointer p-4 rounded relative overflow-hidden transition-all duration-500 ease-in-out ${
        isSelected ? 'bg-red-600 text-white' : 'bg-gray-100'
      }`}
      style={{
        width: '180px',
        height: '250px',
        marginLeft: '20px',
        clipPath: isSelected
          ? 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)'
          : 'none',
        boxShadow: isSelected ? '0 8px 16px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div
        className={`flex flex-col items-center justify-center absolute inset-0 transition-transform duration-500 ease-in-out ${
          isSelected ? 'scale-105' : 'hover:scale-105'
        }`}
        style={{
          transform: isSelected ? 'translateY(-10px)' : 'none',
        }}
      >
        <Image
          src={modelo.imagem}
          alt={modelo.titulo}
          width={160}
          height={120}
          className="object-contain mb-2"
          style={{
            transition: 'transform 0.3s ease',
            transform: isSelected ? 'scale(1.1)' : 'scale(1)',
          }}
        />
        <h3 className={`text-md font-semibold text-center ${isSelected ? 'text-white' : 'text-gray-800'}`}>
          {modelo.titulo}
        </h3>
      </div>
    </div>
  );
};

export default ModeloCard;
