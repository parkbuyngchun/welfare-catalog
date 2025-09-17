'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
                실버웰
              </div>
              <span className="ml-2 text-lg font-semibold text-gray-800">
                복지용구 사업소
              </span>
            </Link>
          </div>

          {/* 데스크톱 메뉴 */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                홈
              </Link>
              <Link
                href="/products"
                className="text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                제품 안내
              </Link>
              <Link
                href="/guide"
                className="text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                이용 가이드
              </Link>
              <Link
                href="/contact"
                className="text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                문의하기
              </Link>
            </div>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-label="메뉴 열기"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className="text-gray-800 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                홈
              </Link>
              <Link
                href="/products"
                className="text-gray-800 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                제품 안내
              </Link>
              <Link
                href="/guide"
                className="text-gray-800 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                이용 가이드
              </Link>
              <Link
                href="/contact"
                className="text-gray-800 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                문의하기
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
