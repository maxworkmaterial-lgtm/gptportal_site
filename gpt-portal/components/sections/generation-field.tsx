'use client';

import React, { useState } from 'react';
import { Plus, Zap } from 'lucide-react';

interface GenerationFieldProps {
  onGenerate?: (prompt: string) => void;
  onSelectModel?: (model: string) => void;
}

export const GenerationField: React.FC<GenerationFieldProps> = ({
  onGenerate,
  onSelectModel,
}) => {
  const [prompt, setPrompt] = useState('');
  const [quality, setQuality] = useState<'auto' | '2k' | '4k'>('2k');
  const [showCursor, setShowCursor] = useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const suggestions = [
    '🔥 ChatGPT 5.4 — новый флагман',
    '🔥 Nano Banana Pro — 4K фото',
    '🔥 Kling 3.0 — видео нового поколения',
    '🔥 Veo 3.1 — Google AI видео',
  ];

  return (
    <section className="px-6 py-8">
      {/* Suggestion chips */}
      <div className="mb-6 flex flex-wrap gap-3">
        {suggestions.map((suggestion, idx) => (
          <button
            key={idx}
            className="px-4 py-2 rounded-full text-sm transition-all duration-200"
            style={{
              backgroundColor: '#141414',
              border: '1px solid #1F1F1F',
              color: '#fff',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1F1F1F';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#141414';
            }}
          >
            {suggestion}
          </button>
        ))}
      </div>

      {/* Main input container */}
      <div
        className="rounded-2xl p-6 border"
        style={{
          backgroundColor: '#141414',
          borderColor: '#1F1F1F',
        }}
      >
        {/* Thumbnail row */}
        <div className="flex gap-3 mb-6">
          <div
            className="w-20 h-20 rounded-lg"
            style={{ backgroundColor: '#1F1F1F' }}
          />
          <div
            className="w-20 h-20 rounded-lg"
            style={{ backgroundColor: '#1F1F1F' }}
          />
          <button
            className="w-20 h-20 rounded-lg border-2 border-dashed flex items-center justify-center transition-all duration-200"
            style={{
              borderColor: '#5A5A5A',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#D1FE17';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#5A5A5A';
            }}
          >
            <Plus size={24} style={{ color: '#8A8A8A' }} />
          </button>
        </div>

        {/* Text input area */}
        <div className="mb-6">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Что сегодня в повестке дня?"
            className="w-full bg-transparent text-white text-lg resize-none focus:outline-none placeholder-gray-500"
            rows={3}
          />
          {!prompt && showCursor && (
            <span
              className="inline-block ml-1 h-6"
              style={{
                width: '2px',
                backgroundColor: '#D1FE17',
                animation: 'none',
              }}
            />
          )}
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#1F1F1F' }}>
          {/* Model pill */}
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-full"
            style={{
              backgroundColor: '#1F1F1F',
            }}
          >
            <div
              className="w-6 h-6 rounded"
              style={{
                backgroundColor: '#D1FE17',
              }}
            />
            <span className="text-sm text-white">Nano Banana Pro</span>
          </div>

          {/* Quality toggles */}
          <div className="flex gap-2">
            {(['auto', '2k', '4k'] as const).map((q) => (
              <button
                key={q}
                onClick={() => setQuality(q)}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: quality === q ? '#D1FE17' : '#1F1F1F',
                  color: quality === q ? '#0A0A0A' : '#fff',
                }}
              >
                {q.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Generate button */}
          <button
            onClick={() => onGenerate?.(prompt)}
            className="flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition-all duration-200"
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
            Генерировать
            <span className="flex items-center gap-1 px-2 py-1 rounded bg-black bg-opacity-20">
              ◆ 2,200
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
