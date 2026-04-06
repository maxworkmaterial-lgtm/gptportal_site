'use client'

interface CaseStudy {
  id: string
  brand: string
  industry: string
  title: string
  stats: Array<{
    label: string
    value: string
    color: 'lime' | 'magenta'
  }>
  logo: string
}

const cases: CaseStudy[] = [
  {
    id: 'nine',
    brand: 'Brand Nine',
    industry: 'SMM-агентство',
    title: 'Автоматизация контент-плана',
    stats: [
      {
        label: 'Экономия расходов',
        value: '−62%',
        color: 'lime',
      },
      {
        label: 'Ускорение работы',
        value: '×3.4',
        color: 'magenta',
      },
      {
        label: 'Экономия в месяц',
        value: '186 000₽',
        color: 'lime',
      },
    ],
    logo: 'BN',
  },
  {
    id: 'kaimel',
    brand: 'Kaimel Cosmetics',
    industry: 'E-com beauty',
    title: 'Генерация описаний товаров',
    stats: [
      {
        label: 'Рост CTR',
        value: '+47%',
        color: 'magenta',
      },
      {
        label: 'Время до запуска',
        value: '7 дней',
        color: 'lime',
      },
      {
        label: 'Товаров обработано',
        value: '142 SKU',
        color: 'magenta',
      },
    ],
    logo: 'KC',
  },
]

export default function Cases() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Кейсы и результаты
          </h2>
          <p className="text-lg text-neutral-400">
            Как компании экономят время и деньги
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-neutral-900/50 border border-neutral-700 rounded-2xl p-8 hover:bg-neutral-900/80 transition-colors duration-300"
            >
              {/* Logo & Brand Info */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white text-sm">
                  {caseStudy.logo}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {caseStudy.brand}
                  </h3>
                  <p className="text-sm text-neutral-400">
                    {caseStudy.industry}
                  </p>
                </div>
              </div>

              {/* Title */}
              <h4 className="text-lg font-semibold text-white mb-6">
                {caseStudy.title}
              </h4>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {caseStudy.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <p
                      className={`text-2xl sm:text-3xl font-bold mb-2 ${
                        stat.color === 'lime'
                          ? 'text-lime-400'
                          : 'text-pink-500'
                      }`}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
