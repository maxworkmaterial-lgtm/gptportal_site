"use client";

import { useState, useEffect, useCallback } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Hero } from "@/components/sections/hero";
import { GenerationField } from "@/components/sections/generation-field";
import { ModelStrip } from "@/components/sections/model-strip";
import { LtvCard } from "@/components/sections/ltv-card";
import { Ticker } from "@/components/sections/ticker";
import { MediaStrip } from "@/components/sections/media-strip";
import { Templates } from "@/components/sections/templates";
import { InlineUpsell } from "@/components/sections/inline-upsell";
import { ModelsTable } from "@/components/sections/models-table";
import { Gallery } from "@/components/sections/gallery";
import Pricing from "@/components/sections/pricing";
import Reviews from "@/components/sections/reviews";
import Cases from "@/components/sections/cases";
import WhySection from "@/components/sections/why-section";
import Team from "@/components/sections/team";
import Referral from "@/components/sections/referral";
import Faq from "@/components/sections/faq";
import TrustFooter from "@/components/sections/trust-footer";

import WelcomeModal from "@/components/modals/welcome-modal";
import DailyBonusModal from "@/components/modals/daily-bonus-modal";
import PaywallModal from "@/components/modals/paywall-modal";
import ExitIntentModal from "@/components/modals/exit-intent-modal";
import PublishModal from "@/components/modals/publish-modal";
import OnboardingModal from "@/components/modals/onboarding-modal";
import { TOURS } from "@/lib/tours";
import { Layers, Diamond, LayoutTemplate, Shield, FolderOpen, Rocket, Camera, ImagePlus, Sparkles, Video, Clapperboard, Play, MessageSquare, Infinity, Send, Aperture, Coins, UserCircle, Film, Calculator, Lock, Move3D, Award, LayoutGrid, MousePointerClick, Search } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-6 h-6" />, Diamond: <Diamond className="w-6 h-6" />,
  LayoutTemplate: <LayoutTemplate className="w-6 h-6" />, Shield: <Shield className="w-6 h-6" />,
  FolderOpen: <FolderOpen className="w-6 h-6" />, Rocket: <Rocket className="w-6 h-6" />,
  Camera: <Camera className="w-6 h-6" />, ImagePlus: <ImagePlus className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />, Video: <Video className="w-6 h-6" />,
  Clapperboard: <Clapperboard className="w-6 h-6" />, Play: <Play className="w-6 h-6" />,
  MessageSquare: <MessageSquare className="w-6 h-6" />, Infinity: <Infinity className="w-6 h-6" />,
  Send: <Send className="w-6 h-6" />, Aperture: <Aperture className="w-6 h-6" />,
  Coins: <Coins className="w-6 h-6" />, UserCircle: <UserCircle className="w-6 h-6" />,
  Film: <Film className="w-6 h-6" />, Calculator: <Calculator className="w-6 h-6" />,
  Lock: <Lock className="w-6 h-6" />, Move3D: <Move3D className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />, LayoutGrid: <LayoutGrid className="w-6 h-6" />,
  MousePointerClick: <MousePointerClick className="w-6 h-6" />, Search: <Search className="w-6 h-6" />,
};

type ModalType = "welcome" | "daily" | "paywall" | "exit" | "publish" | "onboarding" | null;
type AnnType = "ending" | "upgrade" | "renewal" | "critical" | "news";

export default function DashboardPage() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [activeTour, setActiveTour] = useState<string>("general");
  const [paywallModel, setPaywallModel] = useState({ name: "", tier: "pro" as "pro" | "creator" });
  const [annType, setAnnType] = useState<AnnType>("ending");
  const [annVisible, setAnnVisible] = useState(true);
  const [balanceState, setBalanceState] = useState<"ok" | "warn" | "critical">("ok");
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const seen = sessionStorage.getItem("gpt-welcome-seen");
      if (!seen) {
        setTimeout(() => setActiveModal("welcome"), 700);
        sessionStorage.setItem("gpt-welcome-seen", "1");
      }
    }
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.clientY < 5 && !sessionStorage.getItem("gpt-exit-shown")) {
        setActiveModal("exit");
        sessionStorage.setItem("gpt-exit-shown", "1");
      }
    };
    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, []);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }, []);

  const openTour = (tourId: string) => {
    setActiveTour(tourId);
    setActiveModal("onboarding");
  };

  const openPaywall = (modelName: string, tier: "pro" | "creator") => {
    setPaywallModel({ name: modelName, tier });
    setActiveModal("paywall");
  };

  const closeModal = () => setActiveModal(null);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="grid grid-cols-[240px_1fr] min-h-screen">
      <Sidebar
        onDailyBonus={() => setActiveModal("daily")}
        onLogin={() => setActiveModal("welcome")}
        onSelectPlan={() => scrollTo("pricing")}
        onNavigate={(id: string) => scrollTo(id)}
      />

      <div className="flex flex-col min-h-screen">
        {annVisible && (
          <div className="sticky top-0 z-40 px-10 pt-3" style={{ background: "#0A0A0A" }}>
            <AnnouncementBar type={annType} onClose={() => setAnnVisible(false)} />
          </div>
        )}

        <div className="px-10 max-w-[1160px] mx-auto w-full flex-1">
          <Topbar
            balanceState={balanceState}
            onBalanceClick={() => {
              const s: Array<"ok" | "warn" | "critical"> = ["ok", "warn", "critical"];
              setBalanceState(s[(s.indexOf(balanceState) + 1) % 3]);
            }}
            onSelectPlan={() => scrollTo("pricing")}
          />

          <Hero onShowTour={() => openTour("general")} />
          <GenerationField />
          <ModelStrip onSelectModel={(id: string) => { if (TOURS[id]) openTour(id); }} />
          <LtvCard />
          <Ticker />
          <MediaStrip />

          <div id="templates">
            <Templates onSelectTemplate={() => openTour("templates")} />
          </div>

          <InlineUpsell onUpgrade={() => openPaywall("Все модели", "pro")} />
          <ModelsTable onPaywall={(name: string) => openPaywall(name, "pro")} />

          <div id="gallery">
            <Gallery onPublish={() => setActiveModal("publish")} />
          </div>

          <div id="pricing">
            <Pricing onSelectPlan={(plan: string) => showToast(`Выбран тариф: ${plan}`)} />
          </div>

          <Reviews />
          <Cases />
          <WhySection />
          <Team />

          <div id="referral">
            <Referral />
          </div>

          <Faq />
        </div>

        <TrustFooter />
      </div>

      {/* Modals */}
      <WelcomeModal
        isOpen={activeModal === "welcome"}
        onClose={closeModal}
        onClaimBonus={() => { closeModal(); setTimeout(() => setActiveModal("daily"), 200); }}
        onShowTemplates={() => { closeModal(); scrollTo("templates"); }}
      />
      <DailyBonusModal
        isOpen={activeModal === "daily"}
        onClose={() => { closeModal(); showToast("+5 кредитов зачислено"); }}
      />
      <PaywallModal
        isOpen={activeModal === "paywall"}
        onClose={closeModal}
        modelName={paywallModel.name}
        requiredTier={paywallModel.tier}
        onUpgrade={() => { closeModal(); showToast("Переход на тариф оформлен"); }}
      />
      <ExitIntentModal
        isOpen={activeModal === "exit"}
        onClose={closeModal}
        onApply={() => { closeModal(); showToast("Скидка 25% применена!"); }}
      />
      <PublishModal
        isOpen={activeModal === "publish"}
        onClose={closeModal}
        onPublish={() => { closeModal(); showToast("Генерация опубликована в галерею"); }}
      />
      <OnboardingModal
        isOpen={activeModal === "onboarding"}
        onClose={closeModal}
        tour={{
          id: activeTour,
          title: TOURS[activeTour]?.title || "",
          accentColor: TOURS[activeTour]?.accentColor === "magenta" ? "#EC1E79" : "#D1FE17",
          steps: (TOURS[activeTour]?.steps || []).map(s => ({
            title: s.title,
            description: s.description,
            icon: ICON_MAP[s.icon] || <Sparkles className="w-6 h-6" />,
          })),
        }}
      />

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] px-5 py-3 rounded-xl text-sm font-semibold"
          style={{ background: "#D1FE17", color: "#0A0A0A", animation: "slide-down 0.4s ease" }}>
          {toast}
        </div>
      )}

      <DebugPanel annType={annType} onAnnType={(t: AnnType) => { setAnnType(t); setAnnVisible(true); }}
        balanceState={balanceState} onBalanceState={setBalanceState} onModal={setActiveModal} />
    </div>
  );
}

function DebugPanel({ annType, onAnnType, balanceState, onBalanceState, onModal }: {
  annType: AnnType; onAnnType: (t: AnnType) => void;
  balanceState: "ok"|"warn"|"critical"; onBalanceState: (s: "ok"|"warn"|"critical") => void;
  onModal: (m: ModalType) => void;
}) {
  const [open, setOpen] = useState(false);
  const b = "px-2 py-1 rounded text-[10px] font-semibold border transition-colors cursor-pointer";
  const on = "border-[#D1FE17] text-[#D1FE17] bg-[#D1FE17]/10";
  const off = "border-[#2A2A2A] text-[#8A8A8A] hover:text-white";

  if (!open) return (
    <button onClick={() => setOpen(true)}
      className="fixed bottom-4 right-4 z-[300] w-10 h-10 rounded-full bg-[#141414] border border-[#2A2A2A] text-[#8A8A8A] flex items-center justify-center text-xs font-bold hover:text-white hover:border-[#D1FE17]">
      ⚙
    </button>
  );

  return (
    <div className="fixed bottom-4 right-4 z-[300] w-56 p-3 rounded-xl bg-[#141414] border border-[#1F1F1F] shadow-2xl">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#5A5A5A]">Debug</span>
        <button onClick={() => setOpen(false)} className="text-[#5A5A5A] hover:text-white text-xs">✕</button>
      </div>
      <div className="text-[9px] font-bold uppercase tracking-widest text-[#5A5A5A] mb-1">Ann</div>
      <div className="flex flex-wrap gap-1 mb-2">
        {(["ending","upgrade","renewal","critical","news"] as AnnType[]).map(t => (
          <button key={t} onClick={() => onAnnType(t)} className={`${b} ${annType===t?on:off}`}>{t}</button>
        ))}
      </div>
      <div className="text-[9px] font-bold uppercase tracking-widest text-[#5A5A5A] mb-1">Balance</div>
      <div className="flex gap-1 mb-2">
        {(["ok","warn","critical"] as const).map(s => (
          <button key={s} onClick={() => onBalanceState(s)} className={`${b} ${balanceState===s?on:off}`}>{s}</button>
        ))}
      </div>
      <div className="text-[9px] font-bold uppercase tracking-widest text-[#5A5A5A] mb-1">Modals</div>
      <div className="flex flex-wrap gap-1 mb-2">
        {(["welcome","daily","exit","publish"] as ModalType[]).map(m => (
          <button key={m!} onClick={() => onModal(m)} className={`${b} ${off}`}>{m}</button>
        ))}
      </div>
      <div className="text-[9px] font-bold uppercase tracking-widest text-[#5A5A5A] mb-1">Scroll</div>
      <div className="flex flex-wrap gap-1">
        {["pricing","gallery","referral","templates"].map(id => (
          <button key={id} onClick={() => document.getElementById(id)?.scrollIntoView({behavior:"smooth"})} className={`${b} ${off}`}>{id}</button>
        ))}
      </div>
    </div>
  );
}
