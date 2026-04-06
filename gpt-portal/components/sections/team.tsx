'use client'

interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  initials: string
  color: string
}

const team: TeamMember[] = [
  {
    id: 'maksim',
    name: 'Максим',
    role: 'Founder & CEO',
    bio: 'Построил несколько успешных стартапов в fintech',
    initials: 'МТ',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'savely',
    name: 'Савелий',
    role: 'Backend Lead',
    bio: 'Архитектор масштабируемых систем, опыт в Yandex',
    initials: 'СВ',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'bogdan',
    name: 'Богдан',
    role: 'Frontend Lead',
    bio: 'React и Web3 специалист с 8+ годами опыта',
    initials: 'БД',
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'vladimir',
    name: 'Владимир',
    role: 'Product Designer',
    bio: 'Дизайнер 10+ продуктов, миллионы пользователей',
    initials: 'ВЛ',
    color: 'from-green-500 to-emerald-500',
  },
]

export default function Team() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Наша команда
          </h2>
          <p className="text-lg text-neutral-400">
            Опытные профессионалы в своем деле
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-neutral-900/50 border border-neutral-700 rounded-2xl p-6 text-center hover:bg-neutral-900/80 transition-colors duration-300"
            >
              {/* Avatar */}
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center font-bold text-white text-lg mx-auto mb-4`}
              >
                {member.initials}
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-white mb-1">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-sm font-semibold text-lime-400 mb-3">
                {member.role}
              </p>

              {/* Bio */}
              <p className="text-sm text-neutral-400 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
