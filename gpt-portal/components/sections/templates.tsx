'use client';

import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface TemplatesProps {
  onSelectTemplate?: (template: string) => void;
}

interface TemplateCard {
  id: string;
  title: string;
  subtitle: string;
  viewCount: string;
  model: string;
  gradient: string;
}

export const Templates: React.FC<TemplatesProps> = ({ onSelectTemplate }) => {
  const [activeTab, setActiveTab] = useState('top');

  const tabs = ['Топ', 'Блогерам', 'Рекламщикам', 'SMM', 'E-commerce', 'Инфобизу'];

  const templates: TemplateCard[] = [
    {
      id: '1',
      title: 'Видео-интро',
      subtitle: 'Для YouTube',
      viewCount: '5.2M',
      model: 'Kling Pro',
      gradient: 'from-blue-600 to-purple-600',
    },
    {
      id: '2',
      title: 'Портрет AI',
      subtitle: 'LinkedIn сертификат',
      viewCount: '3.1M',
      model: 'Nano Banana',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: '3',
      title: 'Промо видео',
      subtitle: 'Для соцсетей',
      viewCount: '8.7M',
      model: 'Kling Motion',
      gradient: 'from-green-500 to-blue-500',
    },
    {
      id: '4',
      title: 'Аватар AI',
      subtitle: 'Персонаж',
      viewCount: '2.4M',
      model: 'ChatGPT',
      gradient: 'from-pink-500 to-yellow-500',
    },
  ];

  return (
    <section className="px-6 py-12">
      {/* Title */}
      <h2 className="text-4xl font-bold text-white mb-8">Топовые шаблоны</h2>

      {/* Tabs */}
      <div className="flex gap-2 mb-10 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className="px-4 py-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap"
            style={{
              backgroundColor: activeTab === tab.toLowerCase() ? '#D1FE17' : '#141414',
              color: activeTab === tab.toLowerCase() ? '#0A0A0A' : '#fff',
              border: activeTab === tab.toLowerCase() ? 'none' : '1px solid #1F1F1F',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onSelectTemplate?.(template.id)}
            className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer transition-all duration-300 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
            }}
          >
            {/* Gradient background */}
            <div
              className={`absolute inset-0 bg-gradient-to-b ${template.gradient}`}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30" />

            {/* View count badge - top left */}
            <div
              className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
              }}
            >
              <Play size={12} fill="white" style={{ color: 'white' }} />
              <span className="text-xs font-semibold text-white">
                {template.viewCount}
              </span>
            </div>

            {/* Model badge - top right */}
            <div
              className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: '#D1FE17',
                color: '#0A0A0A',
              }}
            >
              {template.model}
            </div>

            {/* Content - bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/50 to-transparent">
              <h3 className="text-lg font-bold text-white leading-tight mb-1">
                {template.title}
              </h3>
              <p className="text-xs text-gray-300">{template.subtitle}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};
