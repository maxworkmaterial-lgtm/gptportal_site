'use client'

import { Diamond, Check } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ModalWrapper from './modal-wrapper'

interface DailyBonusModalProps {
  isOpen: boolean
  onClose: () => void
}

const REWARDS = [3, 5, 10, 15, 25, 50, 100, 500]

export default function DailyBonusModal({
  isOpen,
  onClose,
}: DailyBonusModalProps) {
  const [claimed, setClaimed] = useState(false)
  const currentDay = 2
  const currentReward = REWARDS[currentDay - 1]

  const handleClaim = () => {
    setClaimed(true)
    setTimeout(() => {
      onClose()
      setClaimed(false)
    }, 2000)
  }

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="p-8">
        {!claimed ? (
          <>
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Ежедневный бонус
              </h2>
              <p className="text-neutral-400">День {currentDay} из 7</p>
            </div>

            {/* Days Grid */}
            <div className="mb-8">
              <div className="grid grid-cols-4 gap-3">
                {/* Days 1-7 */}
                {[...Array(7)].map((_, i) => {
                  const day = i + 1
                  const isDone = day < currentDay
                  const isActive = day === currentDay
                  const isLocked = day > currentDay

                  return (
                    <div
                      key={day}
                      className={`aspect-square rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                        isDone
                          ? 'bg-lime-400 text-black'
                          : isActive
                            ? 'bg-lime-400 text-black ring-2 ring-lime-200 animate-pulse'
                            : 'bg-neutral-800 text-neutral-500'
                      }`}
                    >
                      {isDone ? (
                        <Check className="w-5 h-5" />
                      ) : isActive ? (
                        REWARDS[i]
                      ) : (
                        '?'
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Prize */}
            <div className="bg-gradient-to-r from-pink-500/20 to-lime-400/20 border border-lime-400/50 rounded-lg p-4 mb-8 text-center">
              <div className="flex justify-center mb-2">
                <div className="p-2 rounded-full bg-lime-400/20">
                  <Diamond className="w-5 h-5 text-lime-400 fill-lime-400" />
                </div>
              </div>
              <p className="text-lime-400 font-bold">+500 кредитов</p>
              <p className="text-xs text-neutral-400 mt-1">Приз за неделю</p>
            </div>

            {/* Current Reward Card */}
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4 mb-8 text-center">
              <p className="text-2xl font-bold text-lime-400 mb-2">
                +{currentReward} кредитов
              </p>
              <p className="text-sm text-neutral-400">
                День {currentDay} из 7 · до приза {8 - currentDay} дней
              </p>
            </div>

            {/* Button */}
            <button
              onClick={handleClaim}
              className="w-full bg-lime-400 hover:bg-lime-500 text-black font-bold py-3 rounded-lg transition-colors duration-200"
            >
              Получить {currentReward} кредитов
            </button>
          </>
        ) : (
          /* Claimed State */
          <div className="text-center py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex justify-center mb-6"
            >
              <div className="p-4 rounded-full bg-lime-400/20 animate-pulse">
                <Diamond className="w-8 h-8 text-lime-400 fill-lime-400" />
              </div>
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Отлично!
            </h3>

            <motion.div
              className="text-4xl font-bold text-lime-400 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              +{currentReward}
            </motion.div>

            <p className="text-neutral-400 mb-6">
              Следующий бонус завтра · +10 кредитов
            </p>

            <button
              onClick={onClose}
              className="w-full bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-3 rounded-lg border border-neutral-700 transition-colors duration-200"
            >
              OK
            </button>
          </div>
        )}
      </div>
    </ModalWrapper>
  )
}
