'use client'

import { Shield, Lock, Zap, CreditCard } from 'lucide-react'

interface TrustBadge {
  id: string
  icon: React.ReactNode
  label: string
}

const trustBadges: TrustBadge[] = [
  {
    id: 'sbp',
    icon: <Zap className="w-5 h-5" />,
    label: 'СБП оплата',
  },
  {
    id: 'secure',
    icon: <Lock className="w-5 h-5" />,
    label: 'Защищённая оплата',
  },
  {
    id: 'vpn',
    icon: <Shield className="w-5 h-5" />,
    label: 'Без VPN',
  },
  {
    id: 'yookassa',
    icon: <CreditCard className="w-5 h-5" />,
    label: 'Через Yookassa',
  },
]

const linkSections = [
  {
    title: 'Нейросети',
    links: [
      { label: 'ChatGPT', href: '#' },
      { label: 'Kling', href: '#' },
      { label: 'Nano Banana', href: '#' },
      { label: 'Все 50+', href: '#' },
    ],
  },
  {
    title: 'Возможности',
    links: [
      { label: 'Шаблоны', href: '#' },
      { label: 'Галерея', href: '#' },
      { label: 'Тарифы', href: '#' },
      { label: 'API', href: '#' },
    ],
  },
  {
    title: 'О компании',
    links: [
      { label: 'О нас', href: '#' },
      { label: 'Команда', href: '#' },
      { label: 'Блог', href: '#' },
      { label: 'Контакты', href: '#' },
    ],
  },
]

export default function TrustFooter() {
  return (
    <footer className="relative border-t border-neutral-800 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Users Count Section */}
        <div className="py-12 border-b border-neutral-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-center sm:text-left text-neutral-400">
              <span className="text-white font-semibold">12 847 пользователей</span> уже выбрали ГПТ Портал
            </p>
            <div className="flex items-center gap-2">
              {/* Avatar Row */}
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-neutral-950 bg-gradient-to-br"
                    style={{
                      backgroundImage: `linear-gradient(135deg, hsl(${
                        i * 80
                      }, 70%, 50%), hsl(${i * 80 + 40}, 70%, 50%))`,
                    }}
                  />
                ))}
              </div>
              <button className="ml-2 px-4 py-2 bg-lime-400 hover:bg-lime-500 text-black font-semibold rounded-lg text-sm transition-colors duration-200">
                Присоединиться
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="py-12 border-b border-neutral-800">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge.id}
                className="flex items-center gap-3 p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg"
              >
                <div className="text-lime-400">{badge.icon}</div>
                <span className="text-sm font-medium text-white">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 border-b border-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                ГПТ / Портал
              </h3>
              <p className="text-sm text-neutral-400">
                Все нейросети мира в одном месте
              </p>
            </div>

            {/* Link Sections */}
            {linkSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-sm font-semibold text-white mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-neutral-400 hover:text-lime-400 transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            ИНН 7707123456 · ОГРН 1177746123456 · Москва, ул. AI, 42
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-lime-400 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-lime-400 transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
