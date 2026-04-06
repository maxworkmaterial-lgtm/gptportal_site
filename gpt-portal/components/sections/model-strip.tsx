'use client';

import React, { useState } from 'react';

interface ModelStripProps {
  onSelectModel?: (model: string) => void;
}

interface ModelChip {
  id: string;
  label: string;
  color: string;
  badge?: string;
}

export const ModelStrip: React.FC<ModelStripProps> = ({ onSelectModel }) => {
  const [activeModel, setActiveModel] = useState('nano-banana-pro');

  const models: ModelChip[] = [
    { id: 'chatgpt-54', label: 'ChatGPT 5.4', color: '#00D9FF', badge: 'NEW' },
    { id: 'nano-banana-pro', label: 'Nano Banana Pro', color: '#FFB700' },
    { id: 'kling-30', label: 'Kling 3.0', color: '#FF6B6B' },
    { id: 'kling-motion', label: 'Kling Motion', color: '#FF6B6B' },
    { id: 'templates', label: 'Готовые Шаблоны', color: '#9D4EDD' },
    { id: 'gen-video', label: 'Генерация Видео', color: '#3A86FF' },
    { id: 'gen-images', label: 'Генерация Изображений', color: '#FB5607' },
    { id: 'all-models', label: 'Все 50+', color: '#8A8A8A' },
  ];

  const handleSelectModel = (modelId: string, label: string) => {
    setActiveModel(modelId);
    onSelectModel?.(label);
  };

  return (
    <section className="px-6 py-6 border-b" style={{ borderColor: '#1F1F1F' }}>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {models.map((model) => (
          <button
            key={model.id}
            onClick={() => handleSelectModel(model.id, model.label)}
            className="flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 relative"
            style={{
              backgroundColor: '#141414',
              border: activeModel === model.id ? `2px solid ${model.color}` : '1px solid #1F1F1F',
            }}
            onMouseEnter={(e) => {
              if (activeModel !== model.id) {
                e.currentTarget.style.backgroundColor = '#1F1F1F';
              }
            }}
            onMouseLeave={(e) => {
              if (activeModel !== model.id) {
                e.currentTarget.style.backgroundColor = '#141414';
              }
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex-shrink-0"
              style={{ backgroundColor: model.color }}
            />
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium text-white">
                {model.label}
              </span>
              {model.badge && (
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded mt-0.5"
                  style={{
                    backgroundColor: model.color,
                    color: '#0A0A0A',
                  }}
                >
                  {model.badge}
                </span>
              )}
            </div>

            {/* Active underline */}
            {activeModel === model.id && (
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                style={{ backgroundColor: '#D1FE17' }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};
