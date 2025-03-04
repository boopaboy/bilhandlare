// components/CarCard.tsx
import React from 'react';

interface ProductCardProps {
  title: string;
  year: number;
  miles: number;
  color: string;
  price: string;
  imageUrl: string;
  buttonText?: string;
}

export const ProductCard = ({
  title,
  year,
  miles,
  color,
  price,
  imageUrl,
  buttonText = 'Visa Detaljer'
}: ProductCardProps) => {
  return (
    <div className="group relative overflow-hidden xl:w-5/16 l:w-1/4 md:w-1/3 w-full   bg-black rounded-xl transform hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:shadow-3xl">
      {/* Gloss overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-black/50 z-10" />
      
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" 
      />
      
      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-light text-white mb-2">{title}</h3>
          <span className="bg-red-600 text-sm px-3 py-1 rounded-full">{year}</span>
        </div>
        
        <div className="flex justify-between text-gray-300 text-sm mb-4">
          <div className="space-y-1">
            <p className="font-light">Mil: <span className="font-medium">{miles.toLocaleString('sv-SE')}</span></p>
            <p className="font-light">Färg: <span className="font-medium capitalize">{color}</span></p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-light text-red-500">{price} kr</p>
          </div>
        </div>
        
        <button className="w-full py-3 bg-red-600/90 text-white font-light rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;