export interface TourStep {
  title: string;
  description: string;
  icon: string;
}

export interface Tour {
  id: string;
  title: string;
  accentColor: "lime" | "magenta";
  steps: TourStep[];
}

export const TOURS: Record<string, Tour> = {
  general: {
    id: "general",
    title: "ГПТ / Портал",
    accentColor: "lime",
    steps: [
      { title: "Все модели — одна подписка", description: "ChatGPT, Kling, Nano Banana и ещё 50+ нейросетей. Не нужно платить за каждую отдельно.", icon: "Layers" },
      { title: "Кредитная система", description: "Один баланс на всё. Тратьте кредиты на любые модели — текст, фото, видео. Без скрытых лимитов.", icon: "Diamond" },
      { title: "Готовые шаблоны", description: "200+ шаблонов под бизнес, блогинг, рекламу и e-commerce. Выберите шаблон → получите результат за секунды.", icon: "LayoutTemplate" },
      { title: "Работает из РФ", description: "Без VPN, без зарубежных карт. Оплата через СБП, ЮKassa, банковские карты РФ.", icon: "Shield" },
      { title: "История и папки", description: "Все генерации сохраняются. Создавайте папки под проекты, клиентов, кампании.", icon: "FolderOpen" },
      { title: "Начните бесплатно", description: "3 000 кредитов на старте. Хватит на 20 видео или 100 фото. Без карты.", icon: "Rocket" },
    ],
  },
  photo: {
    id: "photo",
    title: "Генерация изображений",
    accentColor: "lime",
    steps: [
      { title: "Фотореализм нового уровня", description: "Nano Banana Pro и GPT Image 1.5 — 4K фото, неотличимые от настоящих. Портреты, продукты, реклама.", icon: "Camera" },
      { title: "Опишите или покажите", description: "Текстовый промпт или референс-картинка. Загрузите фото → модель поймёт стиль и повторит.", icon: "ImagePlus" },
      { title: "Попробуйте сейчас", description: "Выберите шаблон «AI-аватар» или «Фото товара в стиле Apple» — результат за 15 секунд.", icon: "Sparkles" },
    ],
  },
  video: {
    id: "video",
    title: "Генерация видео",
    accentColor: "magenta",
    steps: [
      { title: "Kling 3.0 и Veo 3.1", description: "Кинематографичное AI-видео: движение камеры, физика объектов, реалистичные лица.", icon: "Video" },
      { title: "Из текста или изображения", description: "Опишите сцену текстом или загрузите стартовый кадр. Kling оживит его за 2-3 минуты.", icon: "Clapperboard" },
      { title: "Для рилсов и рекламы", description: "Шаблоны «Рилс для бизнеса», «Cinematic zoom реклама». Готовый ролик для соцсетей.", icon: "Play" },
    ],
  },
  chatgpt: {
    id: "chatgpt",
    title: "ChatGPT 5.4",
    accentColor: "lime",
    steps: [
      { title: "Самая умная текстовая модель", description: "ChatGPT 5.4 — флагман OpenAI. Пишет тексты, код, анализирует данные, генерирует идеи.", icon: "MessageSquare" },
      { title: "Без ограничений", description: "На ГПТ Портале нет лимита сообщений в час. Один запрос = 575 кредитов.", icon: "Infinity" },
      { title: "Начните диалог", description: "Введите запрос в поле генерации или выберите шаблон «Продающий пост для Telegram».", icon: "Send" },
    ],
  },
  "nano-banana": {
    id: "nano-banana",
    title: "Nano Banana Pro",
    accentColor: "lime",
    steps: [
      { title: "4K фотореализм", description: "Nano Banana Pro — топовая модель для фото. Портреты, продуктовая съёмка, арт в любом стиле.", icon: "Aperture" },
      { title: "2 200 кредитов за генерацию", description: "Одно фото в 4K стоит 2 200⚡. На тарифе Старт (10 000⚡) это ~4 фото. На Про — 22 фото.", icon: "Coins" },
      { title: "Попробуйте шаблон", description: "«AI-аватар для соцсетей» — 5.2M просмотров. Загрузите своё фото и получите профессиональный аватар.", icon: "UserCircle" },
    ],
  },
  kling: {
    id: "kling",
    title: "Kling 3.0",
    accentColor: "magenta",
    steps: [
      { title: "AI-видео нового поколения", description: "Kling 3.0 от Kuaishou — реалистичное видео с физикой, движением камеры и живыми лицами.", icon: "Film" },
      { title: "9 000 кредитов за ролик", description: "Одно видео стоит 9 000⚡. На тарифе Про (50 000⚡) = 5 видео. Креатор (200 000⚡) = 22 видео.", icon: "Calculator" },
      { title: "Создайте первое видео", description: "Шаблон «Рилс для бизнеса с хуком» — 2.4M просмотров. Опишите сцену и получите ролик.", icon: "Clapperboard" },
    ],
  },
  "kling-motion": {
    id: "kling-motion",
    title: "Kling Motion Control",
    accentColor: "magenta",
    steps: [
      { title: "Полный контроль камеры", description: "Задайте траекторию камеры: zoom, pan, orbit, dolly. Кинематографичные движения как у оператора.", icon: "Move3D" },
      { title: "Доступно на тарифе Про", description: "Kling Motion Control — 12 000⚡ за генерацию. Требуется тариф Про или выше.", icon: "Lock" },
      { title: "Для профессионалов", description: "Рекламные ролики, продуктовые видео, кинематографичные сцены с полным контролем.", icon: "Award" },
    ],
  },
  templates: {
    id: "templates",
    title: "Готовые шаблоны",
    accentColor: "lime",
    steps: [
      { title: "200+ шаблонов", description: "Для блогеров, рекламщиков, SMM, e-commerce, инфобизнеса. Каждый шаблон — готовый промпт + модель.", icon: "LayoutGrid" },
      { title: "Один клик — результат", description: "Выберите шаблон, добавьте свой контекст, нажмите Generate. Без подбора промптов вручную.", icon: "MousePointerClick" },
      { title: "Откройте каталог", description: "Топовые шаблоны прямо на главной. Фильтры по нише и типу контента.", icon: "Search" },
    ],
  },
};
