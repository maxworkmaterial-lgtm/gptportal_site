'use client'

import { Zap, Clock, Sparkles, Shield } from 'lucide-react'

interface WhyCard {
  id: string
  icon: React.ReactNode
  number: string
  description: string
}

const whyCards: WhyCard[] = [
  {
    id: 'price',
    icon: <Zap className="w-8 h-8" />,
    number: '×11.8',
    description: 'дешевле vs отдельные подписки',
  },
  {
    id: 'speed',
    icon: <Clock className="w-8 h-8" />,
    number: '40 сек',
    description: 'до первой генерации',
  },
  {
    id: 'models',
    icon: <Sparkles className="w-8 h-8" />,
    number: '50+',
    description: 'нейросетей в одном месте',
  },
  {
    id: 'vpn',
    icon: <Shield className="w-8 h-8" />,
    number: '0 ₽',
    description: 'за VPN (работает из РФ)',
  },
]

export default function WhySection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Почему ГПТ / Портал
          </h2>
          <p className="text-lg text-neutral-400">
            Все преимущества в одной платформе
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyCards.map((card) => (
            <div
              key={card.id}
              className="bg-neutral-900/50 border border-neutral-700 rounded-2xl p-8 text-center hover:bg-neutral-900/80 transition-colors duration-300 group"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-neutral-800 text-lime-400 group-hover:bg-neutral-700 transition-colors duration-200">
                  {card.icon}
                </div>
              </div>

              {/* Number */}
              <p className="text-4xl sm:text-5xl font-bold text-lime-400 mb-2">
                {card.number}
              </p>

              {/* Description */}
              <p className="text-neutral-400">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
