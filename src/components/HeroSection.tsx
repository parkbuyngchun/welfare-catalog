import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            안전하고 편리한
            <br />
            <span className="text-yellow-300">복지용구</span>를 제공합니다
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            노인장기요양보험 복지용구 전문 사업소로<br />
            어르신들의 안전한 일상생활을 지원합니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg"
            >
              제품 둘러보기
            </Link>
            <Link
              href="/guide"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              이용 가이드
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
