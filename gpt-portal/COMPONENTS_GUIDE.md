# ГПТ Портал - Dashboard Components Guide

## Overview
Created 10 dashboard section components for the ГПТ / Портал AI model aggregator with a dark theme and Inter font family.

## Component Summary

### 1. **hero.tsx**
- Hero section with main value proposition
- Title: "Все нейросети. Одна подписка. Без VPN." (64px, 600 weight, -0.018em letter-spacing)
- Subtitle with ChatGPT 5.4, Kling 3.0, Nano Banana Pro info
- Price anchor block showing cost comparison
- Individual service chips (ChatGPT Pro 2000₽, Midjourney 2400₽, Kling Pro 3200₽, Runway 1900₽)
- ГПТ Портал 790₽/мес in lime chip
- Savings multiplier: ×11.8
- "Как это работает" CTA button
- **Props**: `onShowTour?: () => void`

### 2. **generation-field.tsx**
- Input area styled like Lupa
- Suggestion chips with emoji and model names
- Thumbnail row (2 placeholder images + dashed add button)
- Text input: "Что сегодня в повестке дня?" with blinking cursor
- Bottom bar with:
  - Model pill (Nano Banana Pro)
  - Quality toggles (Auto/2K/4K)
  - Generate button with price badge (◆ 2,200)
- **Props**: `onGenerate?: (prompt: string) => void`, `onSelectModel?: (model: string) => void`

### 3. **model-strip.tsx**
- Horizontal scrollable row of model chips
- 8 models: ChatGPT 5.4 (NEW), Nano Banana Pro, Kling 3.0, Kling Motion, Готовые Шаблоны, Генерация Видео, Генерация Изображений, Все 50+
- Each chip: 40px colored icon square + label
- Active state: lime underline + lime border
- **Props**: `onSelectModel?: (model: string) => void`

### 4. **ltv-card.tsx**
- LTV (Lifetime Value) savings card
- Lime gradient border with glow effect
- "Вы уже сэкономили 8 430 ₽" with trending up icon
- "Подробнее" button
- **Props**: `amount?: number`, `onDetails?: () => void`

### 5. **ticker.tsx**
- Social proof ticker with animated metrics
- Pulsing green (#D1FE17) dot indicator
- "Сейчас на платформе: [animated count] пользователей"
- "· [animated count] генерации за сегодня"
- "· 94% оценок 4+"
- Auto-updating numbers every 2-3 seconds
- **Props**: `userCount?: number`, `generationCount?: number`, `rating?: number`

### 6. **media-strip.tsx**
- "О нас пишут" section
- Logo chips: VC.RU, Rusbase, Хабр, COSSA, Sostav, РБК PRO
- Simple placeholder squares with logo text
- **Props**: None

### 7. **templates.tsx**
- "Топовые шаблоны" section
- Segment tabs: Топ/Блогерам/Рекламщикам/SMM/E-commerce/Инфобизу
- 4-column grid of template cards (aspect ratio 3/4)
- Each card features:
  - Gradient background
  - View count badge top-left (▶ 5.2M)
  - Model badge top-right
  - Title + subtitle bottom
- Hover scale effect
- **Props**: `onSelectTemplate?: (template: string) => void`

### 8. **inline-upsell.tsx**
- "Персональное предложение" upgrade card
- Lime gradient border with subtle glow
- "Старт → Про" eyebrow label
- Title: "Откройте полный доступ ко всем моделям"
- Crossed-out old price (2490₽), new price (1867₽)
- Discount badge (-25%)
- "Апгрейд" lime button with Zap icon
- **Props**: `onUpgrade?: () => void`

### 9. **models-table.tsx**
- Full models catalog
- Working filter tabs: Все/Текст/Фото/Видео
- Table columns: Модель, Тип, Цена (⚡), Скорость, Action
- 16 real models with pricing in ⚡ units
- Badge support (NEW, HOT)
- Locked models with lock icon and subscription tier (PRO, CREATOR)
- Action buttons: "Использовать" for unlocked, lock button for locked models
- Speed values: Мгновенно/Быстро/~2мин/~3мин/~8мин
- **Props**: `onPaywall?: (model: string) => void`

### 10. **gallery.tsx**
- "Идеи / Галерея" section
- Main tabs: Все/Новые(active)/Мои лайки/Подписки
- Sub tabs with emojis: 🔥 Топ недели / 👤 Портрет / 📦 Продукт / 🎬 Видео / 📢 Реклама / 🎨 Арт / ✨ +20
- 3-column grid of cards (aspect ratio 3/4)
- Each card features:
  - Gradient background
  - Model tag top-left
  - Heart like button top-right (toggleable, fills magenta on like)
  - Author avatar + name bottom-left
  - Like count bottom-right
- 6 sample cards: Victoria, Полина, КатяКэт, Даша, Olala, Михаил
- "+ Опубликовать свою" lime button
- **Props**: `onPublish?: () => void`

## Design System Colors
- Background: `#0A0A0A` (bg)
- Elevated BG: `#141414` (bg-1)
- Higher BG: `#181818` (bg-2)
- Border BG: `#1F1F1F` (bg-3)
- Border: `#1F1F1F`
- Strong Border: `#2A2A2A`
- Accent (Lime): `#D1FE17`
- Accent (Magenta): `#EC1E79`
- Muted Text: `#8A8A8A`
- Subtle Text: `#5A5A5A`

## Component Features
- ✅ All components use `'use client'` directive
- ✅ TypeScript interfaces for all props
- ✅ Lucide icons integrated
- ✅ Tailwind CSS with custom inline styles
- ✅ Functional components
- ✅ Inter font family throughout
- ✅ Dark theme with proper contrast
- ✅ Interactive states and hover effects
- ✅ Responsive grid layouts
- ✅ Animated elements (cursor blink, number transitions, pulsing dots)

## File Structure
```
/components/sections/
├── hero.tsx
├── generation-field.tsx
├── model-strip.tsx
├── ltv-card.tsx
├── ticker.tsx
├── media-strip.tsx
├── templates.tsx
├── inline-upsell.tsx
├── models-table.tsx
├── gallery.tsx
└── index.ts (export barrel)
```

## Usage Example
```tsx
import {
  Hero,
  GenerationField,
  ModelStrip,
  LtvCard,
  Ticker,
  MediaStrip,
  Templates,
  InlineUpsell,
  ModelsTable,
  Gallery,
} from '@/components/sections';

export default function Dashboard() {
  return (
    <>
      <Hero onShowTour={() => console.log('Tour started')} />
      <GenerationField onGenerate={(prompt) => console.log(prompt)} />
      <ModelStrip onSelectModel={(model) => console.log(model)} />
      <LtvCard amount={8430} />
      <Ticker />
      <MediaStrip />
      <Templates onSelectTemplate={(id) => console.log(id)} />
      <InlineUpsell onUpgrade={() => console.log('Upgrade clicked')} />
      <ModelsTable onPaywall={(model) => console.log(model)} />
      <Gallery onPublish={() => console.log('Publish clicked')} />
    </>
  );
}
```

## Notes
- All components support optional callback props for user interactions
- Colors use hex notation for consistency
- Hover states include opacity and color transitions
- Responsive design uses Tailwind's breakpoints (sm, md, lg)
- Number animations use React hooks for client-side updates
- Grid layouts are mobile-first and responsive
