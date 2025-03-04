import Navbar from "./navbar";
import Footer from "./footer";
import ProductCard from "./productCard";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Luxury Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden fixed z-0">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 z-10" />
        
        {/* Parallax background */}
        <div className="absolute inset-0 bg-cover bg-center transform scale-110 hover:scale-100 transition-transform duration-1000 ease-out" 
             style={{ backgroundImage: `url("https://www.klicket.se/Object/Image/ImgOriginal?d=240820022600&objurl=mercedes_benz_amg_c_63_s_t_amg_610hk_keramiska_brabus_se_utr_2016_1957641&s=1&imageId=29950127&resId=26633")` }} />
        
        {/* Hero content with entrance animation */}
        <div className="relative z-20 text-center space-y-8 animate-fadeInUp">
          <h1 className="text-5xl xl:text-7xl font-playfair font-light tracking-wide leading-tight">
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Exklusiva Bilar
            </span><br />
            <span className="text-white text-4xl xl:text-5xl font-light mt-2">
              För Den Kräsne Connaisseuren
            </span>
          </h1>
          <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Upptäck vårt kuraterade urval av exceptionella fordon där varje detalj är ett konstverk
          </p>
          <button className="mt-8 px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-lg font-light rounded-none transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Utforska Vår Kollektion
          </button>
        </div>
      </header>

      {/* Curated Collection Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-4xl font-playfair text-center mb-16 text-white">
            <span className="border-b-2 border-red-600 pb-2">Vårt Exklusiva Urval</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3].map((car) => (
              <div key={car} className="group relative overflow-hidden bg-black rounded-xl transform hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:shadow-3xl">
                {/* Gloss overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-black/50 z-10" />
                
                <img 
                  src="/car.jpg" 
                  alt="Car" 
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-light text-white mb-2">Bentley Continental GT</h3>
                    <span className="bg-red-600 text-sm px-3 py-1 rounded-full">2023</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-300 text-sm mb-4">
                    <div className="space-y-1">
                      <p className="font-light">Mil: <span className="font-medium">1 500</span></p>
                      <p className="font-light">Färg: <span className="font-medium">Midnight Sapphire</span></p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-light text-red-500">2 450 000 kr</p>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-red-600/90 text-white font-light rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Visa Detaljer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Brands Marquee */}
      <div className="py-16 bg-gray-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-gray-500 text-center text-sm font-light mb-8">VI ARBETAR MED VÄRLDENS FRÄMSTA MÄRKEN</h3>
          <div className="flex justify-between items-center space-x-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {['RollsRoyce', 'Bentley', 'Mercedes', 'AstonMartin', 'Porsche'].map((brand) => (
              <img 
                key={brand}
                src={`/brands/${brand}.svg`} 
                alt={brand} 
                className="h-12 grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <section className="relative h-[600px] bg-gray-900 flex items-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/showroom.jpg)' }} />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block text-left bg-black/80 p-12 backdrop-blur-lg border border-gray-800 rounded-xl">
            <h2 className="text-4xl font-playfair text-white mb-6">
              En <span className="text-red-500">Oöverträffad</span><br />
              Bilupplevelse
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mb-8 font-light leading-relaxed">
              Varje bil i vår kollektion genomgår en rigorös 300-punktsinspektion och levereras med full 
              certifiering. Vårt VIP-visningsrum erbjuder en privat visningsupplevelse komplett med sommelierservice 
              och personlig rådgivning.
            </p>
            <button className="px-12 py-4 border-2 border-red-600 text-red-500 font-light hover:bg-red-600 hover:text-white transition-all duration-300">
              Boka Privat Visning
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}