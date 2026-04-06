'use client'

import { Check } from 'lucide-react'
import ModalWrapper from './modal-wrapper'

interface PaywallModalProps {
  isOpen: boolean
  onClose: () => void
  modelName: string
  requiredTier: 'pro' | 'creator'
  onUpgrade: () => void
}

const tierDetails = {
  pro: {
    name: 'Про',
    price: 2490,
    oldPrice: 2990,
    features: [
      'Все нейросети (50+)',
      'Kling AI видео',
      'API доступ',
      'Приоритетная поддержка',
      'Галерея и шаблоны',
    ],
  },
  creator: {
    name: 'Креатор',
    price: 9990,
    oldPrice: 11990,
    features: [
      'Всё из Про +',
      'Приватная галерея',
      'Расширенная аналитика',
      'Кастом обучение',
      'Выделенный менеджер',
    ],
  },
}

export default function PaywallModal({
  isOpen,
  onClose,
  modelName,
  requiredTier,
  onUpgrade,
}: PaywallModalProps) {
  const tier = tierDetails[requiredTier]
  const isPro = requiredTier === 'pro'

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="p-8">
        {/* Header */}
        <h2 className="text-2xl font-bold text-white mb-2 text-center">
          {modelName} доступна на тарифе
        </h2>
        <p className="text-lg text-center text-lime-400 font-semibold mb-6">
          {tier.name}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {tier.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-neutral-300">{feature}</span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4 mb-8 text-center">
          <p className="text-sm text-neutral-400 mb-1">Всего на месяц</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-3xl font-bold text-white">
              {tier.price.toLocaleString()}₽
            </span>
            {tier.oldPrice && (
              <span className="text-sm text-neutral-500 line-through">
                {tier.oldPrice.toLocaleString()}₽
              </span>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={onUpgrade}
            className={`w-full font-bold py-3 rounded-lg transition-colors duration-200 ${
              isPro
                ? 'bg-pink-500 hover:bg-pink-600 text-white'
                : 'bg-lime-400 hover:bg-lime-500 text-black'
            }`}
          >
            Апгрейд до {tier.name}
          </button>
          <button
            onClick={onClose}
            className="w-full bg-neutral-800 hover:bg-neutral-700 text-lime-400 font-semibold py-3 rounded-lg border border-neutral-700 transition-colors duration-200 text-sm"
          >
            Сравнить тарифы
          </button>
        </div>
      </div>
    </ModalWrapper>
  )
}
