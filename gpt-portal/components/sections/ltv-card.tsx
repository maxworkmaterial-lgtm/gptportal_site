'use client';

import React from 'react';
import { TrendingUp } from 'lucide-react';

interface LtvCardProps {
  amount?: number;
  onDetails?: () => void;
}

export const LtvCard: React.FC<LtvCardProps> = ({
  amount = 8430,
  onDetails,
}) => {
  return (
    <section className="px-6 py-8">
      <div
        className="rounded-2xl p-8 border-2 relative overflow-hidden"
        style={{
          backgroundColor: '#141414',
          borderColor: '#D1FE17',
          boxShadow: '0 0 20px rgba(209, 254, 23, 0.2)',
        }}
      >
        {/* Glow effect */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(circle at top right, #D1FE17, transparent)',
            pointerEvents: 'none',
          }}
        />

        <div className="relative z-10 flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm mb-2">Вы уже сэкономили</p>
            <h3 className="text-5xl font-bold text-white flex items-center gap-3">
              {amount.toLocaleString('ru-RU')} ₽
              <TrendingUp size={32} style={{ color: '#D1FE17' }} />
            </h3>
          </div>

          <button
            onClick={onDetails}
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-200"
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
            Подробнее
          </button>
        </div>
      </div>
    </section>
  );
};
