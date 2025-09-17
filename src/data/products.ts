export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  categoryId: string;
  description: string;
  features: string[];
  specifications: {
    brand: string;
    model: string;
    weight?: string;
    dimensions?: string;
    material?: string;
    warranty?: string;
  };
  images: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
  isPopular: boolean;
  isNew: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: '전동휠체어 프리미엄',
    price: 1200000,
    originalPrice: 1500000,
    category: '이동용품',
    categoryId: 'mobility',
    description: '안전하고 편리한 전동휠체어로 자유로운 이동을 지원합니다.',
    features: ['자동 브레이크 시스템', '조절 가능한 좌석', 'LED 조명', '충전식 배터리', '접이식 설계'],
    specifications: {
      brand: '실버웰',
      model: 'SW-EC-001',
      weight: '25kg',
      dimensions: '110cm x 65cm x 95cm',
      material: '알루미늄 합금',
      warranty: '2년'
    },
    images: ['/images/wheelchair-1.jpg', '/images/wheelchair-2.jpg'],
    inStock: true,
    rating: 4.8,
    reviewCount: 24,
    isPopular: true,
    isNew: false
  },
  {
    id: 2,
    name: '욕실 안전바 세트',
    price: 85000,
    originalPrice: 120000,
    category: '안전용품',
    categoryId: 'safety',
    description: '욕실에서 안전을 보장하는 견고한 안전바 세트입니다.',
    features: ['방수 처리', '견고한 설치', '조절 가능한 높이', '미끄럼 방지', '스테인리스 재질'],
    specifications: {
      brand: '실버웰',
      model: 'SW-SB-002',
      weight: '3.2kg',
      dimensions: '60cm x 4cm',
      material: '스테인리스 스틸',
      warranty: '1년'
    },
    images: ['/images/safety-bar-1.jpg', '/images/safety-bar-2.jpg'],
    inStock: true,
    rating: 4.6,
    reviewCount: 18,
    isPopular: true,
    isNew: false
  },
  {
    id: 3,
    name: '전동침대 매트리스',
    price: 2800000,
    originalPrice: 3200000,
    category: '침대용품',
    categoryId: 'bed',
    description: '편안한 수면을 위한 고급 전동침대 매트리스입니다.',
    features: ['상하체 조절', '마사지 기능', 'LED 조명', 'USB 충전 포트', '원격 제어'],
    specifications: {
      brand: '실버웰',
      model: 'SW-EM-003',
      weight: '45kg',
      dimensions: '200cm x 100cm x 25cm',
      material: '메모리폼 + 스프링',
      warranty: '3년'
    },
    images: ['/images/electric-bed-1.jpg', '/images/electric-bed-2.jpg'],
    inStock: true,
    rating: 4.9,
    reviewCount: 31,
    isPopular: true,
    isNew: false
  },
  {
    id: 4,
    name: '보행기 안전형',
    price: 180000,
    originalPrice: 220000,
    category: '이동용품',
    categoryId: 'mobility',
    description: '안정적인 보행을 도와주는 4바퀴 보행기입니다.',
    features: ['4바퀴 안정성', '조절 가능한 높이', '브레이크 시스템', '접이식 설계', '바구니 포함'],
    specifications: {
      brand: '실버웰',
      model: 'SW-WK-004',
      weight: '8.5kg',
      dimensions: '65cm x 50cm x 85cm',
      material: '알루미늄 프레임',
      warranty: '1년'
    },
    images: ['/images/walker-1.jpg', '/images/walker-2.jpg'],
    inStock: true,
    rating: 4.5,
    reviewCount: 15,
    isPopular: false,
    isNew: true
  },
  {
    id: 5,
    name: '욕실 의자',
    price: 95000,
    originalPrice: 130000,
    category: '일상생활용품',
    categoryId: 'daily',
    description: '욕실에서 안전하게 사용할 수 있는 접이식 의자입니다.',
    features: ['접이식 설계', '방수 처리', '미끄럼 방지', '조절 가능한 높이', '손잡이 포함'],
    specifications: {
      brand: '실버웰',
      model: 'SW-BC-005',
      weight: '2.8kg',
      dimensions: '40cm x 40cm x 45cm',
      material: '스테인리스 + 플라스틱',
      warranty: '1년'
    },
    images: ['/images/bath-chair-1.jpg', '/images/bath-chair-2.jpg'],
    inStock: true,
    rating: 4.4,
    reviewCount: 12,
    isPopular: false,
    isNew: false
  },
  {
    id: 6,
    name: '재활운동기구 세트',
    price: 350000,
    originalPrice: 420000,
    category: '운동용품',
    categoryId: 'exercise',
    description: '집에서 할 수 있는 재활운동을 위한 기구 세트입니다.',
    features: ['다양한 운동 가능', '조절 가능한 강도', '안전한 설계', '사용법 가이드', '보관함 포함'],
    specifications: {
      brand: '실버웰',
      model: 'SW-RE-006',
      weight: '15kg',
      dimensions: '120cm x 60cm x 30cm',
      material: '스테인리스 + 고무',
      warranty: '2년'
    },
    images: ['/images/exercise-1.jpg', '/images/exercise-2.jpg'],
    inStock: true,
    rating: 4.7,
    reviewCount: 8,
    isPopular: false,
    isNew: true
  },
  {
    id: 7,
    name: '보청기 디지털',
    price: 450000,
    originalPrice: 580000,
    category: '의사소통용품',
    categoryId: 'communication',
    description: '청각 개선을 위한 고급 디지털 보청기입니다.',
    features: ['디지털 음질', '자동 조절', '노이즈 캔슬링', '충전식 배터리', '원격 제어'],
    specifications: {
      brand: '실버웰',
      model: 'SW-HA-007',
      weight: '0.8g',
      dimensions: '2cm x 1.5cm x 0.8cm',
      material: '의료용 실리콘',
      warranty: '3년'
    },
    images: ['/images/hearing-aid-1.jpg', '/images/hearing-aid-2.jpg'],
    inStock: true,
    rating: 4.6,
    reviewCount: 19,
    isPopular: false,
    isNew: false
  },
  {
    id: 8,
    name: '침대 안전바',
    price: 120000,
    originalPrice: 160000,
    category: '침대용품',
    categoryId: 'bed',
    description: '침대에서 안전을 보장하는 측면 안전바입니다.',
    features: ['조절 가능한 높이', '안전한 잠금장치', '부드러운 패딩', '설치 용이', '세척 가능'],
    specifications: {
      brand: '실버웰',
      model: 'SW-BG-008',
      weight: '4.2kg',
      dimensions: '200cm x 15cm x 25cm',
      material: '스테인리스 + 폼 패딩',
      warranty: '1년'
    },
    images: ['/images/bed-guard-1.jpg', '/images/bed-guard-2.jpg'],
    inStock: true,
    rating: 4.3,
    reviewCount: 11,
    isPopular: false,
    isNew: false
  }
];

export const categories = [
  { id: 'all', name: '전체', count: products.length },
  { id: 'mobility', name: '이동용품', count: products.filter(p => p.categoryId === 'mobility').length },
  { id: 'daily', name: '일상생활용품', count: products.filter(p => p.categoryId === 'daily').length },
  { id: 'safety', name: '안전용품', count: products.filter(p => p.categoryId === 'safety').length },
  { id: 'bed', name: '침대용품', count: products.filter(p => p.categoryId === 'bed').length },
  { id: 'exercise', name: '운동용품', count: products.filter(p => p.categoryId === 'exercise').length },
  { id: 'communication', name: '의사소통용품', count: products.filter(p => p.categoryId === 'communication').length }
];

export const sortOptions = [
  { value: 'popular', label: '인기순' },
  { value: 'price-low', label: '가격 낮은순' },
  { value: 'price-high', label: '가격 높은순' },
  { value: 'newest', label: '최신순' },
  { value: 'rating', label: '평점순' }
];
