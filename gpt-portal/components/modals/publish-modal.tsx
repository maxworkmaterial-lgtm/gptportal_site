'use client'

import ModalWrapper from './modal-wrapper'
import { useState } from 'react'

interface PublishModalProps {
  isOpen: boolean
  onClose: () => void
  onPublish: (category: string) => void
  modelName?: string
  prompt?: string
}

const categories = [
  { id: 'portrait', label: 'Портрет' },
  { id: 'product', label: 'Продукт' },
  { id: 'video', label: 'Видео' },
  { id: 'ad', label: 'Реклама' },
  { id: 'art', label: 'Арт' },
]

export default function PublishModal({
  isOpen,
  onClose,
  onPublish,
  modelName = 'Nano Banana Pro',
  prompt = 'Красивая девушка в студии с профессиональным освещением',
}: PublishModalProps) {
  const [selectedCategory, setSelectedCategory] = useState('portrait')

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="p-8">
        {/* Preview */}
        <div className="mb-6 h-48 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-lime-400/20 border border-neutral-700 rounded-lg flex items-center justify-center text-neutral-500 text-sm">
          Превью последней генерации
        </div>

        {/* Model Badge */}
        <div className="inline-block bg-neutral-800 border border-neutral-700 rounded-full px-3 py-1 text-xs font-semibold text-lime-400 mb-4">
          {modelName}
        </div>

        {/* Prompt */}
        <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
          "{prompt}"
        </p>

        {/* Category Selection */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-neutral-400 mb-3 uppercase">
            Категория
          </p>
          <div className="grid grid-cols-3 gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-lime-400 text-black'
                    : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4 mb-6 text-center text-xs text-neutral-400">
          <p>За каждые 100 лайков — <span className="text-lime-400 font-semibold">+500 кредитов</span> на баланс</p>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => onPublish(selectedCategory)}
            className="w-full bg-lime-400 hover:bg-lime-500 text-black font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Опубликовать
          </button>
          <button
            onClick={onClose}
            className="w-full bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-3 rounded-lg border border-neutral-700 transition-colors duration-200"
          >
            Отмена
          </button>
        </div>
      </div>
    </ModalWrapper>
  )
}
