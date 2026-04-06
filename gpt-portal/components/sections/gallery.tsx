'use client';

import React, { useState } from 'react';
import { Heart, Plus } from 'lucide-react';

interface GalleryProps {
  onPublish?: () => void;
}

interface GalleryCard {
  id: string;
  model: string;
  author: string;
  likes: number;
  gradient: string;
  isLiked: boolean;
}

export const Gallery: React.FC<GalleryProps> = ({ onPublish }) => {
  const [mainTab, setMainTab] = useState('new');
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [subTab, setSubTab] = useState('trending');

  const mainTabs = ['Все', 'Новые', 'Мои лайки', 'Подписки'];
  const subTabs = [
    { id: 'trending', emoji: '🔥', label: 'Топ недели' },
    { id: 'portrait', emoji: '👤', label: 'Портрет' },
    { id: 'product', emoji: '📦', label: 'Продукт' },
    { id: 'video', emoji: '🎬', label: 'Видео' },
    { id: 'ads', emoji: '📢', label: 'Реклама' },
    { id: 'art', emoji: '🎨', label: 'Арт' },
    { id: 'more', emoji: '✨', label: '+20' },
  ];

  const cards: GalleryCard[] = [
    { id: '1', model: 'Nano Banana', author: 'Victoria', likes: 342, gradient: 'from-blue-600 to-purple-600', isLiked: false },
    { id: '2', model: 'Kling 3.0', author: 'Полина', likes: 521, gradient: 'from-orange-500 to-red-500', isLiked: false },
    { id: '3', model: 'ChatGPT', author: 'КатяКэт', likes: 189, gradient: 'from-green-500 to-blue-500', isLiked: false },
    { id: '4', model: 'Veo 3.1', author: 'Даша', likes: 714, gradient: 'from-pink-500 to-yellow-500', isLiked: false },
    { id: '5', model: 'Kling Motion', author: 'Olala', likes: 456, gradient: 'from-cyan-500 to-blue-500', isLiked: false },
    { id: '6', model: 'Nano Banana', author: 'Михаил', likes: 293, gradient: 'from-purple-500 to-pink-500', isLiked: false },
  ];

  const toggleLike = (cardId: string) => {
    setLiked(prev => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  return (
    <section className="px-6 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold text-white mb-2">Идеи / Галерея</h2>
          <p className="text-gray-400">Вдохновляйся работами других и публикуй свои</p>
        </div>
        <button
          onClick={onPublish}
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
          <Plus size={18} />
          Опубликовать свою
        </button>
      </div>

      {/* Main tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {mainTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setMainTab(tab.toLowerCase())}
            className="px-4 py-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap"
            style={{
              backgroundColor: mainTab === tab.toLowerCase() ? '#D1FE17' : '#141414',
              color: mainTab === tab.toLowerCase() ? '#0A0A0A' : '#fff',
              border: mainTab === tab.toLowerCase() ? 'none' : '1px solid #1F1F1F',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Sub tabs */}
      <div className="flex gap-2 mb-10 overflow-x-auto pb-2">
        {subTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSubTab(tab.id)}
            className="flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap text-sm"
            style={{
              backgroundColor: subTab === tab.id ? '#1F1F1F' : '#0A0A0A',
              color: '#fff',
              border: '1px solid #1F1F1F',
            }}
          >
            <span>{tab.emoji}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer transition-all duration-300 hover:scale-105"
          >
            {/* Gradient background */}
            <div
              className={`absolute inset-0 bg-gradient-to-b ${card.gradient}`}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20" />

            {/* Model tag - top left */}
            <div
              className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                color: '#D1FE17',
              }}
            >
              {card.model}
            </div>

            {/* Like button - top right */}
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleLike(card.id);
              }}
              className="absolute top-4 right-4 p-2 rounded-full transition-all duration-200"
              style={{
                backgroundColor: liked[card.id] ? '#EC1E79' : 'rgba(0, 0, 0, 0.6)',
              }}
            >
              <Heart
                size={20}
                fill={liked[card.id] ? '#EC1E79' : 'none'}
                style={{ color: 'white' }}
              />
            </button>

            {/* Content - bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/50 to-transparent">
              <div className="flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-6 h-6 rounded-full"
                      style={{
                        backgroundColor: '#8A8A8A',
                      }}
                    />
                    <p className="text-sm font-semibold text-white">{card.author}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Heart
                    size={14}
                    fill="white"
                    style={{ color: 'white' }}
                  />
                  <span className="text-xs font-semibold text-white">{card.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
