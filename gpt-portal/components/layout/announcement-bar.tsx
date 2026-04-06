'use client';

import React, { useState } from 'react';
import { X, AlertCircle, TrendingUp, RefreshCw, AlertTriangle, Newspaper } from 'lucide-react';
import { cn } from '@/lib/utils';

type AnnouncementType = 'ending' | 'upgrade' | 'renewal' | 'critical' | 'news';

interface AnnouncementBarProps {
  type?: AnnouncementType;
  onClose?: () => void;
  visible?: boolean;
}

interface AnnouncementConfig {
  icon: React.ReactNode;
  text: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  closeable: boolean;
}

export function AnnouncementBar({
  type = 'news',
  onClose,
  visible: controlledVisible,
}: AnnouncementBarProps) {
  const [internalVisible, setInternalVisible] = useState(true);
  const isVisible = controlledVisible !== undefined ? controlledVisible : internalVisible;

  const getConfig = (): AnnouncementConfig => {
    switch (type) {
      case 'ending':
        return {
          icon: <AlertCircle size={16} />,
          text: 'По вашему темпу кредиты закончатся к 14 апреля',
          bgColor: 'bg-lime/10',
          textColor: 'text-lime',
          borderColor: 'border-lime/20',
          closeable: true,
        };
      case 'upgrade':
        return {
          icon: <TrendingUp size={16} />,
          text: 'Вы используете 75% лимитов тарифа Старт',
          bgColor: 'bg-lime/10',
          textColor: 'text-lime',
          borderColor: 'border-lime/20',
          closeable: true,
        };
      case 'renewal':
        return {
          icon: <RefreshCw size={16} />,
          text: 'Подписка Про продлевается через 3 дня',
          bgColor: 'bg-lime/10',
          textColor: 'text-lime',
          borderColor: 'border-lime/20',
          closeable: true,
        };
      case 'critical':
        return {
          icon: <AlertTriangle size={16} />,
          text: 'Оплата не прошла — обновите способ оплаты',
          bgColor: 'bg-magenta/10',
          textColor: 'text-magenta',
          borderColor: 'border-magenta/20',
          closeable: true,
        };
      case 'news':
      default:
        return {
          icon: <Newspaper size={16} />,
          text: 'Новая модель в каталоге: Kling 3.0',
          bgColor: 'bg-subtle/10',
          textColor: 'text-muted',
          borderColor: 'border-border',
          closeable: true,
        };
    }
  };

  const config = getConfig();

  const handleClose = () => {
    setInternalVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        'fixed top-0 left-0 right-0 z-40 border-b transition-all duration-300 animate-slide-down',
        config.bgColor,
        config.borderColor
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className={cn('flex items-center gap-3', config.textColor)}>
          {config.icon}
          <span className="text-sm font-medium">{config.text}</span>
        </div>

        {config.closeable && (
          <button
            onClick={handleClose}
            className={cn(
              'p-1.5 rounded-lg transition-colors flex-shrink-0',
              config.textColor,
              'hover:bg-white/5'
            )}
            aria-label="Закрыть уведомление"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
