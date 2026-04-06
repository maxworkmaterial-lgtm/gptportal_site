'use client'

import { Diamond } from 'lucide-react'
import ModalWrapper from './modal-wrapper'

interface WelcomeModalProps {
  isOpen: boolean
  onClose: () => void
  onClaimBonus: () => void
  onShowTemplates: () => void
}

export default function WelcomeModal({
  isOpen,
  onClose,
  onClaimBonus,
  onShowTemplates,
}: WelcomeModalProps) {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="p-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-lime-400/20">
            <Diamond className="w-8 h-8 text-lime-400 fill-lime-400" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-4">
          Добро пожаловать в ГПТ / Портал!
        </h2>

        {/* Description */}
        <p className="text-neutral-400 mb-2">
          <span className="text-lime-400 font-semibold">3 000 кредитов</span> уже твои. Этого хватит на:
        </p>
        <ul className="text-sm text-neutral-400 mb-6 space-y-1">
          <li>20 видео в Kling</li>
          <li>100 фото в Nano Banana</li>
          <li>60 запросов к ChatGPT 5.4</li>
        </ul>

        {/* Badge */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-3 mb-8 text-sm text-neutral-300">
          Без карты, без VPN, с оплатой по СБП
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={onClaimBonus}
            className="w-full bg-lime-400 hover:bg-lime-500 text-black font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Забрать бонус →
          </button>
          <button
            onClick={onShowTemplates}
            className="w-full bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-3 rounded-lg border border-neutral-700 transition-colors duration-200"
          >
            Показать шаблоны
          </button>
        </div>
      </div>
    </ModalWrapper>
  )
}
