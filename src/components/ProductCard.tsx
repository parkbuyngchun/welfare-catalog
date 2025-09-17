import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price) + '원';
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">★</span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400">☆</span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">☆</span>
      );
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <Link href={`/products/${product.id}`}>
        <div className="aspect-w-16 aspect-h-12 bg-gray-200 relative">
          <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative">
            <span className="text-6xl">🛋️</span>
            
            {/* 배지들 */}
            <div className="absolute top-2 left-2 flex flex-col gap-1">
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
            </div>

            {/* 재고 상태 */}
            <div className="absolute top-2 right-2">
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
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
              {product.category}
            </span>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* 평점 */}
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-2">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          {/* 가격 */}
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through ml-2">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* 주요 기능 */}
          <ul className="text-sm text-gray-600 mb-4">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center mb-1">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
            {product.features.length > 3 && (
              <li className="text-gray-500 text-xs">
                +{product.features.length - 3}개 더
              </li>
            )}
          </ul>

          <div className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-center transition-colors">
            자세히 보기
          </div>
        </div>
      </Link>
    </div>
  );
}
