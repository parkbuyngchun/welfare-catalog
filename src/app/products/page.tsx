'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ProductFilters from '@/components/ProductFilters';
import { products, categories } from '@/data/products';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');

  // 필터링 및 정렬된 제품 목록
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // 카테고리 필터링
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.categoryId === selectedCategory);
    }

    // 검색 필터링
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.specifications.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 정렬
    switch (selectedSort) {
      case 'popular':
        filtered = filtered.sort((a, b) => {
          if (a.isPopular && !b.isPopular) return -1;
          if (!a.isPopular && b.isPopular) return 1;
          return b.rating - a.rating;
        });
        break;
      case 'price-low':
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered = filtered.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return b.id - a.id;
        });
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedSort, searchQuery]);

  const selectedCategoryName = categories.find(cat => cat.id === selectedCategory)?.name || '전체';

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 페이지 헤더 */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            제품 안내
          </h1>
          <p className="text-lg text-gray-600">
            {selectedCategoryName} 제품 {filteredAndSortedProducts.length}개
          </p>
        </div>

        {/* 필터 및 검색 */}
        <ProductFilters
          selectedCategory={selectedCategory}
          selectedSort={selectedSort}
          searchQuery={searchQuery}
          onCategoryChange={setSelectedCategory}
          onSortChange={setSelectedSort}
          onSearchChange={setSearchQuery}
        />

        {/* 제품 목록 */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              검색 결과가 없습니다
            </h3>
            <p className="text-gray-600 mb-6">
              다른 검색어나 필터를 시도해보세요.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedSort('popular');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              필터 초기화
            </button>
          </div>
        )}

        {/* 페이지네이션 (향후 구현) */}
        {filteredAndSortedProducts.length > 0 && (
          <div className="mt-12 flex justify-center">
            <div className="bg-white rounded-lg shadow-md px-6 py-3">
              <p className="text-gray-600 text-sm">
                총 {filteredAndSortedProducts.length}개 제품 중 1-{Math.min(12, filteredAndSortedProducts.length)}개 표시
              </p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
