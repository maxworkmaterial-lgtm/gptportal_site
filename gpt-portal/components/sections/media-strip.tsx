'use client';

import React from 'react';

interface MediaStripProps {}

export const MediaStrip: React.FC<MediaStripProps> = () => {
  const logos = [
    { name: 'VC.RU', initials: 'VC' },
    { name: 'Rusbase', initials: 'RB' },
    { name: 'Хабр', initials: 'ХБ' },
    { name: 'COSSA', initials: 'CS' },
    { name: 'Sostav', initials: 'ST' },
    { name: 'РБК PRO', initials: 'РБ' },
  ];

  return (
    <section className="px-6 py-12 border-b" style={{ borderColor: '#1F1F1F' }}>
      <p className="text-center text-gray-400 text-sm mb-8">О нас пишут</p>

      <div className="flex flex-wrap justify-center gap-8">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center justify-center w-24 h-12 rounded-lg border"
            style={{
              backgroundColor: '#141414',
              borderColor: '#1F1F1F',
            }}
          >
            <span className="text-xs font-bold text-gray-300">{logo.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
