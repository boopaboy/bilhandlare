"use client"
import Navbar from "../navbar";
import Footer from "../footer";
import ProductCard from "../productCard";
import { useState } from 'react';



interface Car {
      id: string;
      title: string;
      year: number;
      miles: number;
      color: string;
      imageUrl: string;
      price: number;
    }


export default function cars() {
  
    const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
    const [selectedColor, setSelectedColor] = useState<string | 'all'>('all');
    const [maxMileage, setMaxMileage] = useState<number>(50000);
  
 const [cars] = useState<Car[]>([
    {
      id: '1',
      title: '2024 Rolls-Royce Phantom',
      year: 2024,
      miles: 250,
      color: 'Titanium Silver',
      imageUrl: 'https://i.blocketcdn.se/pictures/asl/1002047347/1029307743.webp?type=3840x2880&quot',
      price: 460000
    },
    {
      id: '2',
      title: '2023 Bentley Continental GT',
      year: 2023,
      miles: 1500,
      color: 'Onyx Black',
      imageUrl: 'https://i.blocketcdn.se/pictures/asl/1002047347/1029307743.webp?type=3840x2880&quot',
      price: 245000
    },
    // Add more cars...
  ]);

    const filteredCars = cars.filter(car => {
      return (
        (selectedYear === 'all' || car.year === selectedYear) &&
        (selectedColor === 'all' || car.color === selectedColor) &&
        car.miles <= maxMileage
      );
    });
  
  
      return (
        <>
      <Navbar/>

       {/* Filters Section */}
       <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 py-2 border-b border-t border-gray-200">
        <div className="flex flex-row justify-start flex-wrap gap-6 items-center">
          {/* Year Filter */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Bilmärken</label>
            <select
              className="border-gray-300 focus:border-red-600 focus:ring-red-600 w-40"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            >
              <option value="all">Alla</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Maximum Mileage ({maxMileage.toLocaleString()})
            </label>
            <input
              type="range"
              min="0"
              max="50000"
              step="100"
              value={maxMileage}
              onChange={(e) => setMaxMileage(Number(e.target.value))}
              className="w-48 accent-red-600"
            />
          </div>
          
          <div className="space-y-2 items-end">
          <label className="block text-sm font-medium text-gray-700">Sortera</label>

            <select name="Filter" id="filter ">
            <option value="">
                  
            </option>

            <option value="latest">Senaste</option>

            <option value="asc">Pris: Stigande</option>
            <option value="desc">Pris: Fallande</option>

            
            
             </select>

        </div>
          
        </div>
        </div>


      <div className="flex flex-row justify-center items-start flex-wrap gap-10 px-10 py-10">

        <ProductCard
            title="2023 Bentley Continental GT"
            year={2023}
            miles={1500}
            color="navy blue"
            price={"250000"}
            imageUrl="https://i.blocketcdn.se/pictures/asl/1002047347/1029307743.webp?type=3840x2880&quot"
      />

<ProductCard
            title="2023 Bentley Continental GT"
            year={2023}
            miles={1500}
            color="navy blue"
            price={"250000"}
            imageUrl="https://i.blocketcdn.se/pictures/asl/1002047347/1029307743.webp?type=3840x2880&quot"
      />
        <ProductCard
            title="2023 Bentley Continental GT"
            year={2023}
            miles={1500}
            color="navy blue"
            price={"250000"}
            imageUrl="https://i.blocketcdn.se/pictures/asl/1002047347/1029307743.webp?type=3840x2880&quot"
      />

<ProductCard
            title="2023 Bentley Continental GT"
            year={2023}
            miles={1500}
            color="navy blue"
            price={"250000"}
            imageUrl="https://i.blocketcdn.se/pictures/asl/1002047347/1029307743.webp?type=3840x2880&quot"
      />
        <ProductCard
            title="2023 Bentley Continental GT"
            year={2023}
            miles={1500}
            color="navy blue"
            price={"250000"}
            imageUrl="https://i.blocketcdn.se/pictures/asl/1002047347/1029307743.webp?type=3840x2880&quot"
      />
        <ProductCard
            title="2023 Bentley Continental GT"
            year={2023}
            miles={1500}
            color="navy blue"
            price={"250000"}
            imageUrl="https://i.blocketcdn.se/pictures/asl/1002047347/1029307743.webp?type=3840x2880&quot"
      />

      
      

      </div>
      <Footer />
      </>
      );

  
}
