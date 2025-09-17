'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/data/products';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = parseInt(params.id as string);
  const product = products.find(p => p.id === productId);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">❌</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">제품을 찾을 수 없습니다</h1>
            <p className="text-gray-600 mb-6">요청하신 제품이 존재하지 않거나 삭제되었습니다.</p>
            <Link
              href="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              제품 목록으로 돌아가기
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price) + '원';
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400 text-xl">★</span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400 text-xl">☆</span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300 text-xl">☆</span>
      );
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 브레드크럼 */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                홈
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/products" className="text-gray-500 hover:text-gray-700">
                제품 안내
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href={`/products?category=${product.categoryId}`} className="text-gray-500 hover:text-gray-700">
                {product.category}
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 제품 이미지 */}
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-xl overflow-hidden">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <span className="text-8xl">🛋️</span>
              </div>
            </div>
            
            {/* 썸네일 이미지들 */}
            <div className="grid grid-cols-4 gap-2">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${
                    selectedImageIndex === index ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <div className="w-full h-20 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <span className="text-2xl">🛋️</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 제품 정보 */}
          <div className="space-y-6">
            {/* 제품명 및 배지 */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                {product.isPopular && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    인기
                  </span>
                )}
                {product.isNew && (
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    신제품
                  </span>
                )}
                {product.inStock ? (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    재고있음
                  </span>
                ) : (
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                    품절
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
            </div>

            {/* 평점 */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {renderStars(product.rating)}
              </div>
              <span className="text-lg font-semibold text-gray-900">
                {product.rating}
              </span>
              <span className="text-gray-600">
                ({product.reviewCount}개 리뷰)
              </span>
            </div>

            {/* 가격 */}
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-2xl text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-red-100 text-red-800 text-sm font-semibold px-2 py-1 rounded">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% 할인
                </span>
              )}
            </div>

            {/* 제품 설명 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">제품 설명</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* 주요 기능 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">주요 기능</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* 제품 사양 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">제품 사양</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">브랜드</dt>
                    <dd className="text-sm text-gray-900">{product.specifications.brand}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">모델명</dt>
                    <dd className="text-sm text-gray-900">{product.specifications.model}</dd>
                  </div>
                  {product.specifications.weight && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">무게</dt>
                      <dd className="text-sm text-gray-900">{product.specifications.weight}</dd>
                    </div>
                  )}
                  {product.specifications.dimensions && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">크기</dt>
                      <dd className="text-sm text-gray-900">{product.specifications.dimensions}</dd>
                    </div>
                  )}
                  {product.specifications.material && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">재질</dt>
                      <dd className="text-sm text-gray-900">{product.specifications.material}</dd>
                    </div>
                  )}
                  {product.specifications.warranty && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">보증기간</dt>
                      <dd className="text-sm text-gray-900">{product.specifications.warranty}</dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>

            {/* 액션 버튼들 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                문의하기
              </button>
              <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors">
                찜하기
              </button>
            </div>
          </div>
        </div>

        {/* 관련 제품 */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">관련 제품</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.categoryId === product.categoryId && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                  <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-lg mb-3">
                    <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <span className="text-4xl">🛋️</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-lg font-bold text-gray-900 mb-2">
                    {formatPrice(relatedProduct.price)}
                  </p>
                  <Link
                    href={`/products/${relatedProduct.id}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    자세히 보기 →
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
