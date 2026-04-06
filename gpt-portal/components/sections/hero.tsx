'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onShowTour?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShowTour }) => {
  return (
    <section className="pt-16 pb-12 px-6 text-center">
      {/* Title */}
      <h1
        className="text-8xl font-semibold leading-tight mb-6"
        style={{
          letterSpacing: '-0.018em',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        Все нейросети. Одна{' '}
        <span className="italic" style={{ color: '#D1FE17' }}>
          подписка.
        </span>
        {' '}Без VPN.
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
        ChatGPT 5.4, Kling 3.0, Nano Banana Pro и ещё 47 моделей — с оплатой в рублях через СБП
      </p>

      {/* Price anchor block */}
      <div className="mb-12">
        {/* Individual services */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <div className="px-4 py-2 rounded-full border border-[#1F1F1F] bg-[#141414]">
            <span className="text-sm text-white">ChatGPT Pro</span>
            <span className="ml-2 font-semibold text-white">2000₽</span>
          </div>
          <div className="px-4 py-2 rounded-full border border-[#1F1F1F] bg-[#141414]">
            <span className="text-sm text-white">Midjourney</span>
            <span className="ml-2 font-semibold text-white">2400₽</span>
          </div>
          <div className="px-4 py-2 rounded-full border border-[#1F1F1F] bg-[#141414]">
            <span className="text-sm text-white">Kling Pro</span>
            <span className="ml-2 font-semibold text-white">3200₽</span>
          </div>
          <div className="px-4 py-2 rounded-full border border-[#1F1F1F] bg-[#141414]">
            <span className="text-sm text-white">Runway</span>
            <span className="ml-2 font-semibold text-white">1900₽</span>
          </div>
        </div>

        {/* Total */}
        <div className="text-sm text-gray-400 mb-4">Итого:</div>

        {/* ГПТ Портал chip */}
        <div
          className="inline-block px-6 py-3 rounded-full font-semibold text-lg"
          style={{
            backgroundColor: '#D1FE17',
            color: '#0A0A0A'
          }}
        >
          ГПТ Портал 790₽/мес
        </div>

        {/* Savings */}
        <div className="mt-4 text-base font-semibold" style={{ color: '#D1FE17' }}>
          Экономия ×11.8
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={onShowTour}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
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
        Как это работает
        <ArrowRight size={18} />
      </button>
    </section>
  );
};
