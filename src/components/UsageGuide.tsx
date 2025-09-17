const steps = [
  {
    step: 1,
    title: '상담 신청',
    description: '전화 또는 온라인으로 복지용구 상담을 신청합니다',
    icon: '📞'
  },
  {
    step: 2,
    title: '제품 상담',
    description: '전문 상담사 방문 또는 센터 직접 내방하여 개인별 맞춤 상담을 받습니다',
    icon: '🏠'
  },
  {
    step: 3,
    title: '제품 선택',
    description: '상담 결과를 바탕으로 적합한 복지용구를 선택합니다',
    icon: '🛒'
  },
  {
    step: 4,
    title: '계약서 작성',
    description: '복지용구 공급 계약서를 작성합니다',
    icon: '📝'
  },
  {
    step: 5,
    title: '승인 대기',
    description: '관할 지자체의 승인(기초수급권자 해당)을 기다립니다 (약 1주)',
    icon: '⏳'
  },
  {
    step: 6,
    title: '제품 배송',
    description: '계약한 복지용구를 배송 및 설치해드립니다',
    icon: '🚚'
  }
];

export default function UsageGuide() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            복지용구 이용 가이드
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            간단한 6단계로 복지용구를 신청하고 이용할 수 있습니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* 연결선 (마지막 단계 제외) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-blue-200 transform translate-x-4 z-0"></div>
              )}
              
              <div className="bg-white rounded-xl p-6 shadow-md relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    {step.step}
                  </div>
                  <div className="text-3xl">{step.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 shadow-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              💡 궁금한 점이 있으신가요?
            </h3>
            <p className="text-gray-600 mb-6">
              복지용구 신청 과정에서 궁금한 점이나 도움이 필요한 사항이 있으시면 언제든지 문의해주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:02-1234-5678"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                📞 전화 상담 (053-632-3522)
              </a>
              <a
                href="/contact"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                📝 온라인 문의
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
