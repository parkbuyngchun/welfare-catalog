'use client';

import { useState } from 'react';
import { categories, sortOptions } from '@/data/products';

interface ProductFiltersProps {
  selectedCategory: string;
  selectedSort: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
  onSearchChange: (query: string) => void;
}

export default function ProductFilters({
  selectedCategory,
  selectedSort,
  searchQuery,
  onCategoryChange,
  onSortChange,
  onSearchChange
}: ProductFiltersProps) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      {/* 검색바 */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="제품명이나 브랜드명으로 검색하세요..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* 필터 및 정렬 */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* 카테고리 필터 */}
        <div className="flex-1">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* 정렬 옵션 */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-700">정렬:</span>
          <select
            value={selectedSort}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 모바일 필터 토글 */}
      <div className="lg:hidden mt-4">
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors"
        >
          {isFiltersOpen ? '필터 닫기' : '필터 열기'}
        </button>
        
        {isFiltersOpen && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">카테고리</h3>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => onCategoryChange(category.id)}
                      className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
