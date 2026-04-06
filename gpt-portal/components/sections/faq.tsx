'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    id: 'kling-price',
    question: 'Сколько стоит одно видео в Kling?',
    answer:
      'Видео в Kling стоит примерно 9 000⚡. На тарифе Про (2490₽/мес) это примерно 45₽ за одно видео в расчёте на стоимость кредитов. Очень выгодно если делать несколько видео в месяц.',
  },
  {
    id: 'vs-gptunnel',
    question: 'Чем отличаетесь от gptunnel?',
    answer:
      'У gptunnel более узкий набор моделей. Мы интегрировали 50+ нейросетей включая Kling, MidJourney API, ChatGPT семейство и многое другое. Плюс у нас есть галерея, шаблоны и российская техподдержка.',
  },
  {
    id: 'bad-result',
    question: 'Что если модель выдаст плохой результат?',
    answer:
      'Мы возвращаем кредиты если результат не удовлетворил вас. Можно забрать бонус или пересгенерировать с другими параметрами. Гарантия качества или возврат средств.',
  },
  {
    id: 'commercial-use',
    question: 'Можно использовать в коммерческих целях?',
    answer:
      'Да, полностью. Все результаты генерации ваши. Можете использовать для коммерческих проектов, продавать контент, встраивать в свои приложения. Лицензия даёт вам полные права.',
  },
  {
    id: 'cancel-subscription',
    question: 'Что будет если отменить подписку?',
    answer:
      'Ваши кредиты останутся до конца оплаченного периода. Вы сможете продолжить работу, подписка просто не будет продлена. Никаких скрытых платежей.',
  },
  {
    id: 'corporate-plan',
    question: 'Есть корпоративный тариф?',
    answer:
      'Да! Тариф Команда (14990₽/мес) рассчитан на до 5 пользователей с совместной работой, управлением правами и корпоративной поддержкой. Можно обсудить индивидуальные условия.',
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Частые вопросы
          </h2>
          <p className="text-lg text-neutral-400">
            Ответы на всё, что вас интересует
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-900/50 border border-neutral-700 rounded-lg overflow-hidden hover:bg-neutral-900/80 transition-colors duration-200"
            >
              <button
                onClick={() =>
                  setOpenId(openId === item.id ? null : item.id)
                }
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-neutral-800/50 transition-colors duration-200"
              >
                <span className="font-semibold text-white">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-lime-400 flex-shrink-0 transition-transform duration-300 ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openId === item.id && (
                <div className="px-6 py-4 bg-neutral-800/30 border-t border-neutral-700">
                  <p className="text-neutral-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
