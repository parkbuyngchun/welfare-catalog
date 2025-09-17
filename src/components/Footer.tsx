import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
                실버웰
              </div>
              <span className="ml-2 text-lg font-semibold">
                복지용구 사업소
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              노인장기요양보험 복지용구 전문 사업소로 어르신들의 안전하고 편리한 일상생활을 지원합니다.
            </p>
            <div className="text-sm text-gray-400">
              <p>사업자등록번호: 123-45-67890</p>
              <p>대표자: 박병춘</p>
              <p>주소: 서울시 강남구 테헤란로 123</p>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                  제품 안내
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-gray-300 hover:text-white transition-colors">
                  이용 가이드
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          {/* 고객 지원 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">고객 지원</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:02-1234-5678" className="text-gray-300 hover:text-white transition-colors">
                  📞 02-1234-5678
                </a>
              </li>
              <li>
                <a href="mailto:info@silverwell.co.kr" className="text-gray-300 hover:text-white transition-colors">
                  📧 info@silverwell.co.kr
                </a>
              </li>
              <li className="text-gray-300">
                평일 09:00 - 18:00
              </li>
              <li className="text-gray-300">
                토요일 09:00 - 13:00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 실버웰 복지용구 사업소. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                개인정보처리방침
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                이용약관
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                사업자정보확인
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
