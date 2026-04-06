'use client'

import { Copy, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function Referral() {
  const [copied, setCopied] = useState(false)
  const referralLink = 'https://gpthub.ru/ref/MAX2024'

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Приглашай друзей — получай кредиты
          </h2>
          <p className="text-lg text-neutral-400">
            Программа реферальных вознаграждений
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-white mb-1">7</p>
            <p className="text-sm text-neutral-400">Приглашено</p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-lime-400 mb-1">4</p>
            <p className="text-sm text-neutral-400">Подписались</p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-pink-500 mb-1">23 000</p>
            <p className="text-sm text-neutral-400">Начислено</p>
          </div>
        </div>

        {/* Referral Link */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <p className="text-sm text-neutral-400 mb-3">Твоя реферальная ссылка</p>
          <div className="flex gap-3 items-center">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white text-sm font-mono select-all focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-200 whitespace-nowrap text-sm"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Скопировано
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Копировать
                </>
              )}
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <p className="font-semibold text-white">Статус: Silver</p>
            <p className="text-sm text-neutral-400">3 подписки до Gold</p>
          </div>
          <div className="w-full bg-neutral-800 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-lime-400 to-lime-500 h-2 rounded-full transition-all duration-500"
              style={{ width: '57%' }}
            />
          </div>
          <div className="flex gap-2 mt-4 text-xs">
            <span className="text-neutral-400">Bronze</span>
            <span className="text-lime-400 font-semibold">Silver (текущий)</span>
            <span className="text-neutral-400">Gold</span>
            <span className="text-neutral-400">Platinum</span>
          </div>
        </div>
      </div>
    </section>
  )
}
