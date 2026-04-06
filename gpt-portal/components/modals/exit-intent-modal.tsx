'use client'

import { useEffect, useState } from 'react'
import ModalWrapper from './modal-wrapper'

interface ExitIntentModalProps {
  isOpen: boolean
  onClose: () => void
  onApply: () => void
}

export default function ExitIntentModal({
  isOpen,
  onClose,
  onApply,
}: ExitIntentModalProps) {
  const [timeLeft, setTimeLeft] = useState('23:47:12')

  useEffect(() => {
    let startTime = Date.now()
    const durationMs = 24 * 60 * 60 * 1000 // 24 hours in ms

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const remaining = Math.max(0, durationMs - elapsed)

      const hours = Math.floor(remaining / 3600000)
      const minutes = Math.floor((remaining % 3600000) / 60000)
      const seconds = Math.floor((remaining % 60000) / 1000)

      setTimeLeft(
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [isOpen])

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="p-8 text-center">
        {/* Headline */}
        <h2 className="text-2xl font-bold text-white mb-2">
          Подождите! У нас есть кое-что для вас
        </h2>

        {/* Subheading */}
        <p className="text-lg text-neutral-300 mb-8">
          <span className="text-pink-500 font-semibold">Скидка 25%</span> на тариф Про — только сейчас
        </p>

        {/* Timer */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4 mb-8">
          <p className="text-xs text-neutral-400 mb-2">Предложение действует</p>
          <p className="font-mono text-2xl font-bold text-pink-500">
            {timeLeft}
          </p>
        </div>

        {/* Pricing */}
        <div className="mb-8">
          <p className="text-neutral-400 text-sm mb-2">Новая цена</p>
          <div className="flex items-center justify-center gap-3">
            <span className="text-3xl font-bold text-white">1 867₽</span>
            <span className="text-lg text-neutral-500 line-through">
              2 490₽
            </span>
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            Вместо 2 990₽ без скидки
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={onApply}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Забрать скидку
          </button>
          <button
            onClick={onClose}
            className="w-full text-neutral-500 hover:text-neutral-300 font-semibold py-3 transition-colors duration-200 text-sm"
          >
            Нет, спасибо
          </button>
        </div>
      </div>
    </ModalWrapper>
  )
}
