'use client'

import { Diamond, Check } from 'lucide-react'
import { useState } from 'react'
import clsx from 'clsx'

interface PricingTier {
  id: string
  name: string
  description: string
  price: number
  oldPrice?: number
  credits: number
  features: string[]
  isPopular?: boolean
  isBest?: boolean
}

interface PricingProps {
  onSelectPlan: (planId: string, promoCode?: string) => void
}

const tiers: PricingTier[] = [
  {
    id: 'start',
    name: 'Старт',
    description: 'Для первых шагов',
    price: 790,
    credits: 10000,
    features: [
      'ChatGPT 4 turbo',
      'Nano Banana',
      'До 2 проектов',
      'Техподдержка',
    ],
  },
  {
    id: 'pro',
    name: 'Про',
    description: 'Самый популярный',
    price: 2490,
    oldPrice: 2990,
    credits: 50000,
    features: [
      'Все нейросети (50+)',
      'Kling AI видео',
      'API доступ',
      'Приоритетная поддержка',
      'Галерея и шаблоны',
    ],
    isPopular: true,
  },
  {
    id: 'creator',
    name: 'Креатор',
    description: 'Для профессионалов',
    price: 9990,
    oldPrice: 11990,
    credits: 200000,
    features: [
      'Все из Про +',
      'Приватная галерея',
      'Расширенная аналитика',
      'Кастом обучение',
      'Выделенный менеджер',
    ],
    isBest: true,
  },
  {
    id: 'team',
    name: 'Команда',
    description: 'До 5 пользователей',
    price: 14990,
    credits: 300000,
    features: [
      'Всё из Креатор +',
      'Совместная работа',
      'Управление командой',
      'Корпоративная поддержка',
      'SLA гарантия',
    ],
  },
]

export default function Pricing({ onSelectPlan }: PricingProps) {
  const [promoCode, setPromoCode] = useState('')

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Прозрачные тарифы
          </h2>
          <p className="text-lg text-neutral-400">
            Выберите план, который подходит вам идеально
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={clsx(
                'relative rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105',
                tier.isPopular || tier.isBest
                  ? 'ring-2 scale-105 md:scale-110'
                  : 'border border-neutral-700 bg-neutral-900/50',
                tier.isPopular && 'ring-pink-500 bg-neutral-900/80',
                tier.isBest && 'ring-lime-400 bg-neutral-900/80'
              )}
            >
              {/* Badge */}
              {tier.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  ПОПУЛЯРНЫЙ
                </div>
              )}
              {tier.isBest && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                  ЛУЧШИЙ
                </div>
              )}

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  {tier.name}
                </h3>
                <p className="text-sm text-neutral-400">{tier.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-bold text-white">
                    {tier.price.toLocaleString()}₽
                  </span>
                  <span className="text-sm text-neutral-500">/мес</span>
                </div>
                {tier.oldPrice && (
                  <p className="text-sm text-neutral-500 line-through">
                    {tier.oldPrice.toLocaleString()}₽
                  </p>
                )}
              </div>

              {/* Credits */}
              <div className="flex items-center gap-2 mb-6 text-lime-400 font-semibold">
                <Diamond className="w-4 h-4 fill-current" />
                {tier.credits.toLocaleString()} кредитов
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => onSelectPlan(tier.id)}
                className={clsx(
                  'w-full py-3 rounded-lg font-semibold transition-all duration-200 text-sm',
                  tier.isPopular
                    ? 'bg-pink-500 hover:bg-pink-600 text-white'
                    : tier.isBest
                      ? 'bg-lime-400 hover:bg-lime-500 text-black'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-600'
                )}
              >
                Выбрать {tier.name}
              </button>
            </div>
          ))}
        </div>

        {/* Promo Code */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            <label className="text-sm font-medium text-neutral-300">
              Есть промокод?
            </label>
            <div className="flex gap-3 flex-1 sm:flex-none">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                placeholder="Введите код"
                className="flex-1 sm:flex-none sm:w-48 bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
              <button
                onClick={() => onSelectPlan('', promoCode)}
                className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 py-2 rounded-full transition-colors duration-200 text-sm whitespace-nowrap"
              >
                Применить
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
