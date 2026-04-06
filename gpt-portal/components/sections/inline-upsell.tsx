'use client';

import React from 'react';
import { Zap } from 'lucide-react';

interface InlineUpsellProps {
  onUpgrade?: () => void;
}

export const InlineUpsell: React.FC<InlineUpsellProps> = ({ onUpgrade }) => {
  return (
    <section className="px-6 py-8">
      <div
        className="rounded-2xl p-8 border-2 relative overflow-hidden"
        style={{
          backgroundColor: '#141414',
          borderColor: '#D1FE17',
          background: `linear-gradient(135deg, rgba(209, 254, 23, 0.05) 0%, rgba(209, 254, 23, 0) 100%), #141414`,
        }}
      >
        <div className="relative z-10">
          {/* Eyebrow */}
          <p
            className="text-xs font-bold mb-2 tracking-wide uppercase"
            style={{ color: '#D1FE17' }}
          >
            Старт → Про
          </p>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-6">
            Откройте полный доступ ко всем моделям
          </h3>

          {/* Pricing */}
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-sm text-gray-400 line-through">2490₽</span>
            <span className="text-4xl font-bold text-white">1867₽</span>
            <span
              className="text-lg font-semibold px-3 py-1 rounded-full"
              style={{
                backgroundColor: '#D1FE17',
                color: '#0A0A0A',
              }}
            >
              -25%
            </span>
          </div>

          {/* Button */}
          <button
            onClick={onUpgrade}
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
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
            <Zap size={18} />
            Апгрейд
          </button>
        </div>

        {/* Glow effect */}
        <div
          className="absolute -right-20 -top-20 w-40 h-40 rounded-full opacity-20"
          style={{
            backgroundColor: '#D1FE17',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </section>
  );
};
