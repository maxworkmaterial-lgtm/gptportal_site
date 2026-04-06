'use client';

import React, { useState, useMemo } from 'react';
import { Lock, Zap } from 'lucide-react';

interface ModelsTableProps {
  onPaywall?: (model: string) => void;
}

interface Model {
  id: string;
  name: string;
  type: string;
  price: number;
  speed: string;
  badge?: string;
  locked?: boolean;
  lockType?: string;
}

export const ModelsTable: React.FC<ModelsTableProps> = ({ onPaywall }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const models: Model[] = [
    { id: '1', name: 'ChatGPT 5.4', type: 'Текст', price: 575, speed: 'Мгновенно', badge: 'NEW' },
    { id: '2', name: 'ChatGPT 5.2', type: 'Текст', price: 672, speed: 'Мгновенно' },
    { id: '3', name: 'GPT-5 Nano', type: 'Текст', price: 170, speed: 'Мгновенно' },
    { id: '4', name: 'Gemini 3.1 Pro', type: 'Текст', price: 890, speed: 'Быстро' },
    { id: '5', name: 'Gemini 3 Flash', type: 'Текст', price: 200, speed: 'Мгновенно' },
    { id: '6', name: 'Grok 4', type: 'Текст', price: 960, speed: 'Быстро' },
    { id: '7', name: 'Nano Banana 2', type: 'Текст', price: 1200, speed: 'Быстро' },
    { id: '8', name: 'Nano Banana Pro', type: 'Текст', price: 2200, speed: 'Быстро', badge: 'HOT' },
    { id: '9', name: 'GPT Image 1.5', type: 'Фото', price: 500, speed: '~2мин' },
    { id: '10', name: 'Grok Imagine', type: 'Фото', price: 800, speed: '~3мин' },
    { id: '11', name: 'Kling 2.6', type: 'Видео', price: 5000, speed: '~3мин' },
    { id: '12', name: 'Kling 3.0', type: 'Видео', price: 9000, speed: '~3мин', badge: 'HOT', locked: true, lockType: 'PRO' },
    { id: '13', name: 'Kling Motion', type: 'Видео', price: 12000, speed: '~8мин', badge: 'NEW', locked: true, lockType: 'PRO' },
    { id: '14', name: 'Veo 3.0', type: 'Видео', price: 15000, speed: '~8мин' },
    { id: '15', name: 'Veo 3.1 Fast', type: 'Видео', price: 24000, speed: '~8мин' },
    { id: '16', name: 'Veo 3.1 Standard', type: 'Видео', price: 48000, speed: '~8мин', badge: 'NEW', locked: true, lockType: 'CREATOR' },
  ];

  const filters = ['Все', 'Текст', 'Фото', 'Видео'];

  const filteredModels = useMemo(() => {
    if (activeFilter === 'all') return models;
    return models.filter(m => m.type === activeFilter);
  }, [activeFilter]);

  const getTypeColor = (type: string): string => {
    switch (type) {
      case 'Текст': return '#00D9FF';
      case 'Фото': return '#FFB700';
      case 'Видео': return '#FF6B6B';
      default: return '#8A8A8A';
    }
  };

  return (
    <section className="px-6 py-12">
      {/* Title */}
      <h2 className="text-4xl font-bold text-white mb-8">Каталог моделей</h2>

      {/* Filters */}
      <div className="flex gap-2 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter.toLowerCase())}
            className="px-4 py-2 rounded-lg font-medium transition-all duration-200"
            style={{
              backgroundColor: activeFilter === filter.toLowerCase() ? '#D1FE17' : '#141414',
              color: activeFilter === filter.toLowerCase() ? '#0A0A0A' : '#fff',
              border: activeFilter === filter.toLowerCase() ? 'none' : '1px solid #1F1F1F',
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#1F1F1F' }}>
        <table className="w-full">
          <thead>
            <tr
              style={{
                backgroundColor: '#141414',
                borderBottom: '1px solid #1F1F1F',
              }}
            >
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">
                Модель
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">
                Тип
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">
                Цена
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">
                Скорость
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">
                Действие
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredModels.map((model, idx) => (
              <tr
                key={model.id}
                style={{
                  backgroundColor: '#0A0A0A',
                  borderBottom: idx < filteredModels.length - 1 ? '1px solid #1F1F1F' : 'none',
                }}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-white">{model.name}</span>
                    {model.badge && (
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: model.badge === 'NEW' ? '#D1FE17' : '#FF6B6B',
                          color: model.badge === 'NEW' ? '#0A0A0A' : '#fff',
                        }}
                      >
                        {model.badge}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: getTypeColor(model.type) }}
                  >
                    {model.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1 text-sm font-semibold text-white">
                    <Zap size={14} style={{ color: '#D1FE17' }} />
                    {model.price}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-400">{model.speed}</span>
                </td>
                <td className="px-6 py-4">
                  {model.locked ? (
                    <button
                      onClick={() => onPaywall?.(model.name)}
                      className="flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200"
                      style={{
                        backgroundColor: '#1F1F1F',
                        color: '#D1FE17',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#2A2A2A';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#1F1F1F';
                      }}
                    >
                      <Lock size={12} />
                      {model.lockType}
                    </button>
                  ) : (
                    <button
                      className="px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200"
                      style={{
                        backgroundColor: '#D1FE17',
                        color: '#0A0A0A',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '0.9';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '1';
                      }}
                    >
                      Использовать
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
