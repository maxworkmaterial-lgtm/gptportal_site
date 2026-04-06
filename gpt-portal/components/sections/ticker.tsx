'use client';

import React, { useState, useEffect } from 'react';

interface TickerProps {
  userCount?: number;
  generationCount?: number;
  rating?: number;
}

export const Ticker: React.FC<TickerProps> = ({
  userCount = 1247,
  generationCount = 8923,
  rating = 94,
}) => {
  const [displayUsers, setDisplayUsers] = useState(userCount);
  const [displayGenerations, setDisplayGenerations] = useState(generationCount);

  useEffect(() => {
    const userInterval = setInterval(() => {
      setDisplayUsers(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        return Math.max(prev + change, 1000);
      });
    }, 3000);

    return () => clearInterval(userInterval);
  }, []);

  useEffect(() => {
    const genInterval = setInterval(() => {
      setDisplayGenerations(prev => {
        const change = Math.floor(Math.random() * 50) - 20;
        return Math.max(prev + change, 8000);
      });
    }, 2000);

    return () => clearInterval(genInterval);
  }, []);

  return (
    <section className="px-6 py-6 border-b" style={{ borderColor: '#1F1F1F' }}>
      <div className="flex items-center gap-3 justify-center">
        {/* Pulsing dot */}
        <div className="relative">
          <div
            className="w-3 h-3 rounded-full animate-pulse"
            style={{
              backgroundColor: '#D1FE17',
              boxShadow: '0 0 10px #D1FE17',
            }}
          />
          <div
            className="absolute inset-0 w-3 h-3 rounded-full animate-pulse"
            style={{
              backgroundColor: '#D1FE17',
              opacity: 0.5,
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              animationDelay: '0.1s',
            }}
          />
        </div>

        {/* Text with animated numbers */}
        <div className="text-center">
          <span className="text-sm text-gray-400">
            Сейчас на платформе:{' '}
            <span className="font-semibold text-white transition-all duration-300">
              {displayUsers.toLocaleString('ru-RU')}
            </span>
            {' '}пользователей ·
            <span className="font-semibold text-white ml-1 transition-all duration-300">
              {displayGenerations.toLocaleString('ru-RU')}
            </span>
            {' '}генерации за сегодня ·
            <span
              className="font-semibold ml-1"
              style={{ color: '#D1FE17' }}
            >
              {rating}% оценок 4+
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};
