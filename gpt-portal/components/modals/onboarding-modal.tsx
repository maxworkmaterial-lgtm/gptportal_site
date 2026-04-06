'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import ModalWrapper from './modal-wrapper'

export interface OnboardingStep {
  title: string
  description: string
  icon: React.ReactNode
}

export interface OnboardingTour {
  id: string
  title: string
  accentColor: string
  steps: OnboardingStep[]
  ctaText?: string
  onComplete?: () => void
}

interface OnboardingModalProps {
  isOpen: boolean
  onClose: () => void
  tour: OnboardingTour
}

export default function OnboardingModal({
  isOpen,
  onClose,
  tour,
}: OnboardingModalProps) {
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentStep, isOpen])

  const goToNext = () => {
    if (currentStep < tour.steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleComplete()
    }
  }

  const goToPrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const goToStep = (step: number) => {
    setCurrentStep(step)
  }

  const handleComplete = () => {
    tour.onComplete?.()
    onClose()
    setCurrentStep(0)
  }

  const isLastStep = currentStep === tour.steps.length - 1
  const step = tour.steps[currentStep]

  const accentColorClasses = {
    lime: {
      bg: 'from-lime-500 to-lime-600',
      ring: 'ring-lime-500',
      button: 'bg-lime-400 hover:bg-lime-500 text-black',
      dot: 'bg-lime-400',
    },
    magenta: {
      bg: 'from-pink-500 to-pink-600',
      ring: 'ring-pink-500',
      button: 'bg-pink-500 hover:bg-pink-600 text-white',
      dot: 'bg-pink-500',
    },
  } as const

  const colors =
    accentColorClasses[tour.accentColor as keyof typeof accentColorClasses] ||
    accentColorClasses.lime

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="max-w-md"
    >
      <div className="relative p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-white">{tour.title}</h2>
          <p className="text-xs text-neutral-400 mt-1">
            Шаг {currentStep + 1} из {tour.steps.length}
          </p>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div
                className={`p-4 rounded-full bg-gradient-to-br ${colors.bg} ring-2 ${colors.ring} ring-opacity-50`}
              >
                <div className="text-white">
                  {step.icon}
                </div>
              </div>
            </div>

            {/* Step Title */}
            <h3 className="text-xl font-bold text-white text-center mb-3">
              {step.title}
            </h3>

            {/* Step Description */}
            <p className="text-center text-neutral-400 leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {tour.steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToStep(idx)}
              className={`transition-all duration-200 rounded-full ${
                idx === currentStep
                  ? `w-8 h-2 ${colors.dot}`
                  : idx < currentStep
                    ? `w-2 h-2 ${colors.dot}`
                    : 'w-2 h-2 bg-neutral-600 hover:bg-neutral-500'
              }`}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <button
            onClick={goToPrevious}
            disabled={currentStep === 0}
            className={`p-2 rounded-lg border transition-colors ${
              currentStep === 0
                ? 'text-neutral-600 border-neutral-700 cursor-not-allowed'
                : 'text-white border-neutral-700 hover:bg-neutral-800'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={isLastStep ? handleComplete : goToNext}
            className={`flex-1 font-semibold py-3 rounded-lg transition-colors ${colors.button}`}
          >
            {isLastStep ? tour.ctaText || 'Начать' : 'Далее'}
          </button>

          <button
            onClick={goToNext}
            disabled={isLastStep}
            className={`p-2 rounded-lg border transition-colors ${
              isLastStep
                ? 'text-neutral-600 border-neutral-700 cursor-not-allowed'
                : 'text-white border-neutral-700 hover:bg-neutral-800'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Skip */}
        <button
          onClick={onClose}
          className="w-full text-neutral-500 hover:text-neutral-300 text-sm transition-colors"
        >
          Пропустить
        </button>
      </div>
    </ModalWrapper>
  )
}
