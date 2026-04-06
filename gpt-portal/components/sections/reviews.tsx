'use client'

import { Star } from 'lucide-react'

interface Review {
  id: string
  quote: string
  author: string
  role: string
  initials: string
  color: string
}

const reviews: Review[] = [
  {
    id: 'anna',
    quote:
      'Сделала весь контент для Black Friday за один вечер. Раньше тратила 15-20 часов в неделю',
    author: 'Анна Соколова',
    role: 'SMM beauty',
    initials: 'АС',
    color: 'from-rose-500 to-pink-500',
  },
  {
    id: 'mikhail',
    quote:
      'Платил 4500₽ за ChatGPT + Midjourney. Теперь плачу 2490₽ за всё',
    author: 'Михаил Круглов',
    role: 'Product designer fintech',
    initials: 'МК',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'dmitry',
    quote:
      'За месяц сэкономили 38000₽ на производстве контента',
    author: 'Дмитрий Воронцов',
    role: 'Блогер 340k',
    initials: 'ДВ',
    color: 'from-amber-500 to-orange-500',
  },
]

export default function Reviews() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Что говорят пользователи
          </h2>
          <p className="text-lg text-neutral-400">
            Реальные отзывы от наших клиентов
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-neutral-900/50 border border-neutral-700 rounded-2xl p-8 hover:bg-neutral-900/80 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-lime-400 text-lime-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white mb-6 leading-relaxed italic">
                "{review.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center font-bold text-white text-sm`}
                >
                  {review.initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{review.author}</p>
                  <p className="text-sm text-neutral-400">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
