export default function ContactInfo() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 연락처 정보 */}
          <div>
            <h2 className="text-3xl font-bold mb-8">연락처 정보</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">전화 상담</h3>
                  <p className="text-gray-300 text-lg">02-1234-5678</p>
                  <p className="text-gray-400 text-sm">평일 09:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">이메일 문의</h3>
                  <p className="text-gray-300 text-lg">info@silverwell.co.kr</p>
                  <p className="text-gray-400 text-sm">24시간 접수 가능</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">사업소 위치</h3>
                  <p className="text-gray-300 text-lg">서울시 강남구 테헤란로 123</p>
                  <p className="text-gray-400 text-sm">지하철 2호선 강남역 3번 출구 도보 5분</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl">🕒</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">운영 시간</h3>
                  <p className="text-gray-300 text-lg">평일 09:00 - 18:00</p>
                  <p className="text-gray-400 text-sm">토요일 09:00 - 13:00 (일요일 휴무)</p>
                </div>
              </div>
            </div>
          </div>

          {/* 지도 및 추가 정보 */}
          <div>
            <h2 className="text-3xl font-bold mb-8">찾아오시는 길</h2>
            
            {/* 지도 영역 (실제 구현 시 Google Maps API 사용) */}
            <div className="bg-gray-800 rounded-lg h-64 mb-6 flex items-center justify-center">
              <div className="text-center">
                <span className="text-4xl mb-2 block">🗺️</span>
                <p className="text-gray-400">지도 영역</p>
                <p className="text-sm text-gray-500">Google Maps 연동 예정</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">🚗 주차 안내</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 건물 지하 1-2층 주차장 이용 가능</li>
                <li>• 2시간 무료 주차</li>
                <li>• 장애인 전용 주차 공간 완비</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 mt-4">
              <h3 className="text-xl font-semibold mb-4">🚇 대중교통</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 지하철 2호선 강남역 3번 출구</li>
                <li>• 버스: 146, 241, 341, 362번</li>
                <li>• 도보 5분 거리</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
