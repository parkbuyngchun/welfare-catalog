import Link from 'next/link';

const featuredProducts = [
  {
    id: 1,
    name: '전동휠체어',
    price: '1,200,000원',
    originalPrice: '1,500,000원',
    image: '/images/wheelchair.jpg',
    category: '이동용품',
    description: '안전하고 편리한 전동휠체어',
    features: ['자동 브레이크', '조절 가능한 좌석', 'LED 조명']
  },
  {
    id: 2,
    name: '욕실 안전바',
    price: '85,000원',
    originalPrice: '120,000원',
    image: '/images/safety-bar.jpg',
    category: '안전용품',
    description: '욕실에서 안전을 보장하는 안전바',
    features: ['방수 처리', '견고한 설치', '조절 가능한 높이']
  },
  {
    id: 3,
    name: '전동침대',
    price: '2,800,000원',
    originalPrice: '3,200,000원',
    image: '/images/electric-bed.jpg',
    category: '침대용품',
    description: '편안한 수면을 위한 전동침대',
    features: ['상하체 조절', '마사지 기능', 'LED 조명']
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            인기 제품
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            많은 고객들이 선택한 추천 제품들을 만나보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-6xl">🛋️</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    {product.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through ml-2">
                    {product.originalPrice}
                  </span>
                </div>
                <ul className="text-sm text-gray-600 mb-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center mb-1">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/products/${product.id}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-center block transition-colors"
                >
                  자세히 보기
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            모든 제품 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
