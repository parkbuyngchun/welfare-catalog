import Link from 'next/link';

const categories = [
  {
    id: 'mobility',
    name: '이동용품',
    description: '휠체어, 보행기, 지팡이, 경사로로',
    icon: '🦽',
    color: 'bg-blue-100 text-blue-600',
    href: '/products/mobility'
  },
  {
    id: 'daily',
    name: '치매용품품',
    description: '배회감지기 등',
    icon: '🛁',
    color: 'bg-green-100 text-green-600',
    href: '/products/daily'
  },
  {
    id: 'safety',
    name: '안전용품',
    description: '안전손잡이, 미끔럼방지용품 등',
    icon: '🛡️',
    color: 'bg-red-100 text-red-600',
    href: '/products/safety'
  },
  {
    id: 'bed',
    name: '침상용품',
    description: '전동동침대, 욕창예방매트리스, 자세변환용구 등',
    icon: '🛏️',
    color: 'bg-purple-100 text-purple-600',
    href: '/products/bed'
  },
  {
    id: 'exercise',
    name: '위생용품품',
    description: '이동변기, 목욕의자, 간이대소변기 등',
    icon: '🏃',
    color: 'bg-orange-100 text-orange-600',
    href: '/products/exercise'
  },
  {
    id: 'communication',
    name: '비급여품목목',
    description: '방수매트, 기저귀, 뉴케어 등',
    icon: '📞',
    color: 'bg-indigo-100 text-indigo-600',
    href: '/products/communication'
  }
];

export default function ProductCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            복지용구 카테고리
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            어르신들의 다양한 생활 영역을 지원하는 복지용구를 카테고리별로 확인하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${category.color} flex items-center justify-center text-2xl`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
