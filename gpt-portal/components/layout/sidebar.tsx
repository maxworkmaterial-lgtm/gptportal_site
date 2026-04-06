'use client';

import React, { useState } from 'react';
import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  Zap,
  Video,
  Image,
  CreditCard,
  Clock,
  Users,
  Gift,
  CheckCircle2,
  LogIn,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  onDailyBonus?: () => void;
  onLogin?: () => void;
  onSelectPlan?: () => void;
  onNavigate?: (section: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: string;
  section?: 'main' | 'tools' | 'actions';
}

export function Sidebar({
  onDailyBonus,
  onLogin,
  onSelectPlan,
  onNavigate,
}: SidebarProps) {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [completedSteps, setCompletedSteps] = useState(2);

  const mainNav: NavItem[] = [
    {
      id: 'dashboard',
      label: 'Дашборд',
      icon: <LayoutDashboard size={18} />,
      section: 'main',
    },
    {
      id: 'templates',
      label: 'Шаблоны',
      icon: <FileText size={18} />,
      section: 'main',
    },
    {
      id: 'folders',
      label: 'Мои папки',
      icon: <FolderOpen size={18} />,
      section: 'main',
    },
  ];

  const toolsNav: NavItem[] = [
    {
      id: 'text',
      label: 'Текст',
      icon: <FileText size={18} />,
      section: 'tools',
    },
    {
      id: 'video',
      label: 'Видео',
      icon: <Video size={18} />,
      section: 'tools',
    },
    {
      id: 'images',
      label: 'Изображения',
      icon: <Image size={18} />,
      section: 'tools',
    },
  ];

  const actionsNav: NavItem[] = [
    {
      id: 'balance',
      label: 'Пополнить баланс',
      icon: <CreditCard size={18} />,
      section: 'actions',
    },
    {
      id: 'history',
      label: 'История',
      icon: <Clock size={18} />,
      section: 'actions',
    },
    {
      id: 'referral',
      label: 'Рефератор',
      icon: <Users size={18} />,
      badge: 'NEW',
      section: 'actions',
    },
    {
      id: 'gallery',
      label: 'Галерея',
      icon: <Gift size={18} />,
      badge: 'NEW',
      section: 'actions',
    },
  ];

  const handleNavClick = (id: string) => {
    setActiveNav(id);
    onNavigate?.(id);
  };

  const handleStepComplete = (index: number) => {
    if (index < completedSteps) {
      setCompletedSteps(index);
    } else {
      setCompletedSteps(index + 1);
    }
  };

  const onboardingSteps = [
    { title: 'Создать первый чат', completed: completedSteps > 0 },
    { title: 'Заполнить профиль', completed: completedSteps > 1 },
    { title: 'Использовать 3 разных модели', completed: completedSteps > 2 },
    { title: 'Поделиться результатом', completed: completedSteps > 3 },
    { title: 'Пригласить друга', completed: completedSteps > 4 },
  ];

  return (
    <div className="w-60 bg-bg-1 border-r border-border flex flex-col h-screen">
      {/* Header */}
      <div className="px-5 py-6 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-lime rounded-sm" />
          <span className="text-sm font-semibold text-fg">ГПТ / Портал</span>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Main Navigation */}
        <nav className="px-3 py-4 space-y-1">
          {mainNav.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={cn(
                'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                activeNav === item.id
                  ? 'bg-lime bg-opacity-15 text-lime'
                  : 'text-muted hover:text-fg hover:bg-bg-3'
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Divider */}
        <div className="mx-3 my-2 h-px bg-border" />

        {/* Tools Navigation */}
        <nav className="px-3 py-4 space-y-1">
          {toolsNav.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={cn(
                'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                activeNav === item.id
                  ? 'bg-lime bg-opacity-15 text-lime'
                  : 'text-muted hover:text-fg hover:bg-bg-3'
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Actions Navigation */}
        <nav className="px-3 py-4 space-y-1">
          {actionsNav.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={cn(
                'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors relative',
                activeNav === item.id
                  ? 'bg-lime bg-opacity-15 text-lime'
                  : 'text-muted hover:text-fg hover:bg-bg-3'
              )}
            >
              {item.icon}
              <span>{item.label}</span>
              {item.badge && (
                <span className="ml-auto text-xs font-bold text-bg-1 bg-magenta px-2 py-0.5 rounded">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Daily Bonus Button */}
        <div className="px-3 py-4 mt-4">
          <button
            onClick={onDailyBonus}
            className="w-full relative overflow-hidden rounded-lg p-3 bg-gradient-to-r from-lime to-lime/80 text-bg-1 text-xs font-semibold group"
          >
            <div className="absolute inset-0 bg-white/20 -left-full group-hover:left-full transition-all duration-700 ease-in-out" />
            <div className="relative z-10">
              <div className="font-bold mb-1">Ежедневный бонус</div>
              <div className="text-xs opacity-90">забери +5 кредитов за сегодня · День 2 из 7</div>
            </div>
          </button>
        </div>

        {/* Onboarding Checklist */}
        <div className="px-3 py-4 mx-3 bg-bg-3 rounded-lg border border-border">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 size={16} className="text-lime" />
            <span className="text-xs font-semibold text-fg">Начало работы</span>
          </div>

          {/* Progress Bar */}
          <div className="mb-3 bg-bg-2 rounded-full h-1.5 overflow-hidden">
            <div
              className="h-full bg-lime transition-all duration-300"
              style={{ width: `${(completedSteps / onboardingSteps.length) * 100}%` }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-2 mb-3">
            {onboardingSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => handleStepComplete(idx)}
                className={cn(
                  'w-full flex items-center gap-2 text-left px-2 py-1.5 rounded text-xs transition-colors',
                  step.completed
                    ? 'bg-lime/10 text-lime'
                    : 'text-muted hover:bg-bg-2'
                )}
              >
                <div
                  className={cn(
                    'w-4 h-4 rounded-sm border transition-colors flex-shrink-0',
                    step.completed
                      ? 'bg-lime border-lime'
                      : 'border-border'
                  )}
                >
                  {step.completed && (
                    <svg
                      className="w-full h-full text-bg-1 p-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <span className="flex-1">{step.title}</span>
              </button>
            ))}
          </div>

          <div className="text-xs text-muted/70 border-t border-border pt-2">
            +500 кредитов за каждый шаг
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-3 py-4 space-y-2 border-t border-border">
        <button
          onClick={onSelectPlan}
          className="w-full py-2.5 rounded-lg bg-magenta hover:bg-magenta/90 text-bg-1 text-sm font-semibold transition-colors"
        >
          Выбрать тариф
        </button>
        <button
          onClick={onLogin}
          className="w-full py-2.5 rounded-lg border border-border hover:border-magenta hover:text-magenta text-muted text-sm font-semibold transition-colors flex items-center justify-center gap-2"
        >
          <LogIn size={16} />
          Войти
        </button>
      </div>
    </div>
  );
}
