"use client";

import { useState } from 'react';
import { ProductCard } from '../productCard'; // Your previous component
import Navbar from '../navbar';
import Footer from '../footer';

interface Car {
  id: string;
  title: string;
  year: number;
  miles: number;
  color: string;
  imageUrl: string;
  price: number;
}

  const ProductPage = () => {
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedColor, setSelectedColor] = useState<string | 'all'>('all');
  const [maxMileage, setMaxMileage] = useState<number>(50000);

  // Sample data - replace with your actual data source
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
    <div className="min-h-screen bg-gray-50">
     <Navbar/>      

      {/* Filters Section */}
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-6 mb-12 items-end">
          {/* Year Filter */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Model Year</label>
            <select
              className="border-gray-300 focus:border-red-600 focus:ring-red-600 w-40"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            >
              <option value="all">All Years</option>
              <option value={2024}>2024</option>
              <option value={2023}>2023</option>
              <option value={2022}>2022</option>
            </select>
          </div>

          {/* Color Filter */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Exterior Color</label>
            <select
              className="border-gray-300 focus:border-red-600 focus:ring-red-600 w-40"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option value="all">All Colors</option>
              <option value="Titanium Silver">Titanium Silver</option>
              <option value="Onyx Black">Onyx Black</option>
              {/* Add more colors */}
            </select>
          </div>

          {/* Mileage Filter */}
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

          {/* Reset Filters */}
          <button
            onClick={() => {
              setSelectedYear('all');
              setSelectedColor('all');
              setMaxMileage(50000);
            }}
            className="text-red-600 hover:text-red-700 text-sm font-medium"
          >
            Clear All Filters
          </button>
        </div>

        {/* Results Grid */}
        
      <div className="flex flex-row justify-center items-center flex-wrap w-full h-full overflow-hidden">
      
      </div>
      

        {/* Empty State */}
        {filteredCars.length === 0 && (
          <div className="text-center py-24">
            <p className="text-xl text-gray-500">No vehicles match your current filters</p>
            <p className="mt-2 text-red-600 hover:text-red-700 cursor-pointer" onClick={() => {
              setSelectedYear('all');
              setSelectedColor('all');
              setMaxMileage(50000);
            }}>
              Reset filters
            </p>
          </div>
        )}
      </div>
    </div>
    
    <Footer />
    </>
  );
};

export default ProductPage;

