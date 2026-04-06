'use client';

import React, { useState } from 'react';
import { ChevronRight, Zap, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type BalanceState = 'ok' | 'warn' | 'critical';

interface TopbarProps {
  balanceState?: BalanceState;
  currentCredits?: number;
  maxCredits?: number;
  onSelectPlan?: () => void;
  onBalanceClick?: (state: BalanceState) => void;
}

export function Topbar({
  balanceState: initialState = 'ok',
  currentCredits = 1234,
  maxCredits = 10000,
  onSelectPlan,
  onBalanceClick,
}: TopbarProps) {
  const [balanceState, setBalanceState] = useState<BalanceState>(initialState);

  const handleBalanceClick = () => {
    const states: BalanceState[] = ['ok', 'warn', 'critical'];
    const currentIndex = states.indexOf(balanceState);
    const nextState = states[(currentIndex + 1) % states.length];
    setBalanceState(nextState);
    onBalanceClick?.(nextState);
  };

  const percentage = (currentCredits / maxCredits) * 100;

  const getBalanceStyles = () => {
    switch (balanceState) {
      case 'warn':
        return {
          barColor: 'bg-warn',
          bgColor: 'bg-warn/10',
          textColor: 'text-warn',
          borderColor: 'border-warn/20',
        };
      case 'critical':
        return {
          barColor: 'bg-magenta',
          bgColor: 'bg-magenta/10',
          textColor: 'text-magenta',
          borderColor: 'border-magenta/20',
        };
      default:
        return {
          barColor: 'bg-lime',
          bgColor: 'bg-lime/10',
          textColor: 'text-lime',
          borderColor: 'border-lime/20',
        };
    }
  };

  const styles = getBalanceStyles();

  return (
    <div className="h-16 bg-bg-1 border-b border-border px-6 flex items-center justify-between">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted">Главная</span>
        <ChevronRight size={16} className="text-muted" />
        <span className="text-fg font-medium">Дашборд</span>
      </div>

      {/* Balance Widget */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleBalanceClick}
          className={cn(
            'px-4 py-2 rounded-lg border transition-all duration-200',
            styles.bgColor,
            styles.borderColor,
            styles.textColor
          )}
        >
          <div className="flex items-center gap-2 mb-1">
            <Zap size={16} />
            <span className="text-sm font-semibold">
              {currentCredits.toLocaleString('ru-RU')} / {maxCredits.toLocaleString('ru-RU')}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-48 h-1.5 bg-bg-2 rounded-full overflow-hidden">
            <div
              className={cn('h-full transition-all duration-300', styles.barColor)}
              style={{ width: `${Math.min(percentage, 100)}%` }}
            />
          </div>

          {/* CTA Text */}
          {balanceState === 'warn' && (
            <div className="mt-2 text-xs font-medium">
              <span className="flex items-center gap-1">
                <ArrowUpRight size={12} />
                +20k за 200₽
              </span>
            </div>
          )}

          {balanceState === 'critical' && (
            <div className="mt-2 text-xs font-medium">
              Апгрейд до Про
            </div>
          )}
        </button>

        {/* Select Plan Button */}
        <button
          onClick={onSelectPlan}
          className="px-4 py-2 rounded-lg border border-magenta hover:bg-magenta/10 text-magenta text-sm font-semibold transition-colors"
        >
          Выбрать тариф
        </button>
      </div>
    </div>
  );
}
