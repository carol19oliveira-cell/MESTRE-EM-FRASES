/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import {
  Check,
  Video,
  FileText,
  Gauge,
  Sliders,
  LayoutGrid,
  ArrowRight,
  Music,
  ShieldCheck,
  Zap,
  Award,
} from "lucide-react";

import VideoPlayerMock from "./components/VideoPlayerMock";
import FaqSection from "./components/FaqSection";
import CheckoutModal from "./components/CheckoutModal";
import SalesToast from "./components/SalesToast";
import { PRODUCT_CONFIG, ModuleConfig } from "./config/productConfig";
import { DeliverableCard, TransformationPoint } from "./types";

const deliverablesData: DeliverableCard[] = [
  {
    id: "videoaulas",
    index: "01",
    title: "VIDEOAULAS COM EXPLICAÇÃO",
    description:
      "Patrick demonstra e explica as frases de forma prática e direta.",
    iconName: "video",
  },
  {
    id: "partitura-aula",
    index: "02",
    title: "PARTITURA INTEGRADA À AULA",
    description:
      "Acompanhe visualmente a frase enquanto assiste à execução.",
    iconName: "music",
  },
  {
    id: "partitura-pdf",
    index: "03",
    title: "PARTITURAS EM PDF",
    description:
      "Tenha o material disponível para consultar e estudar.",
    iconName: "fileText",
  },
  {
    id: "velocidade-normal",
    index: "04",
    title: "VELOCIDADE NORMAL",
    description:
      "Veja como cada frase funciona em sua execução completa.",
    iconName: "gauge",
  },
  {
    id: "versao-lenta",
    index: "05",
    title: "VERSÃO LENTA",
    description:
      "Estude cada detalhe e acompanhe nota por nota.",
    iconName: "turtle",
  },
  {
    id: "area-membros",
    index: "06",
    title: "ÁREA DE MEMBROS",
    description:
      "Conteúdo organizado por módulos para facilitar seus estudos.",
    iconName: "layout",
  },
];

const transformationPoints: TransformationPoint[] = [
  {
    id: "amplie",
    index: "01",
    title: "AMPLIE SEU VOCABULÁRIO",
    description: "Adicione novas frases e recursos ao seu repertório.",
  },
  {
    id: "crie",
    index: "02",
    title: "CRIE NOVAS POSSIBILIDADES",
    description:
      "Use o conteúdo estudado como ponto de partida para desenvolver novas ideias.",
  },
  {
    id: "leve",
    index: "03",
    title: "LEVE PARA A BATERIA",
    description:
      "Transforme o estudo em recursos que você realmente consegue aplicar tocando.",
  },
];

const offerChecklist: string[] = [
  "Videoaulas práticas",
  "Frases em Semicolcheia",
  "Frases em Sextina",
  "Frases em Fusa",
  "Frases para Shuffle",
  "Partituras integradas às aulas",
  "Partituras completas em PDF",
  "Versões em velocidade normal",
  "Versões lentas",
  "Área de membros",
  "Suporte via WhatsApp",
];

/**
 * Renders an authentic rhythmic subdivision graphic for each module card
 * when the official module cover image has not yet been inserted.
 */
function ModuleSubdivisionGraphic({ moduleId }: { moduleId: string }) {
  if (moduleId === "modulo-2") {
    // Sextina (6 notes beamed together)
    return (
      <svg viewBox="0 0 280 90" className="w-full h-24 select-none">
        {[24, 36, 48, 60, 72].map((y) => (
          <line
            key={y}
            x1="10"
            y1={y}
            x2="270"
            y2={y}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
        ))}
        <text
          x="140"
          y="13"
          textAnchor="middle"
          fill="#d4af37"
          fontSize="11"
          fontWeight="700"
          fontStyle="italic"
          fontFamily="JetBrains Mono, monospace"
        >
          6
        </text>
        <line x1="46" y1="18" x2="246" y2="18" stroke="#d4af37" strokeWidth="3" />
        <line x1="46" y1="24" x2="246" y2="24" stroke="#d4af37" strokeWidth="2" />
        {[40, 80, 120, 160, 200, 240].map((x, i) => {
          const yPositions = [48, 48, 36, 42, 66, 66];
          const y = yPositions[i];
          return (
            <g key={i}>
              <line
                x1={x + 5}
                y1={y}
                x2={x + 5}
                y2="18"
                stroke="rgba(240,213,124,0.75)"
                strokeWidth="1.6"
              />
              <ellipse
                cx={x}
                cy={y}
                rx="6"
                ry="4.2"
                transform={`rotate(-18 ${x} ${y})`}
                fill={i >= 4 ? "#a1a1aa" : "#f0d57c"}
              />
            </g>
          );
        })}
      </svg>
    );
  }

  if (moduleId === "modulo-1") {
    // Semicolcheia (4 16th notes beamed)
    return (
      <svg viewBox="0 0 280 90" className="w-full h-24 select-none">
        {[24, 36, 48, 60, 72].map((y) => (
          <line
            key={y}
            x1="10"
            y1={y}
            x2="270"
            y2={y}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
        ))}
        <line x1="56" y1="18" x2="236" y2="18" stroke="#d4af37" strokeWidth="3" />
        <line x1="56" y1="24" x2="236" y2="24" stroke="#d4af37" strokeWidth="2" />
        {[50, 110, 170, 230].map((x, i) => {
          const yPositions = [48, 48, 36, 66];
          const y = yPositions[i];
          return (
            <g key={i}>
              <line
                x1={x + 5}
                y1={y}
                x2={x + 5}
                y2="18"
                stroke="rgba(240,213,124,0.75)"
                strokeWidth="1.6"
              />
              <ellipse
                cx={x}
                cy={y}
                rx="6.5"
                ry="4.5"
                transform={`rotate(-18 ${x} ${y})`}
                fill={i === 3 ? "#a1a1aa" : "#f0d57c"}
              />
            </g>
          );
        })}
      </svg>
    );
  }

  if (moduleId === "modulo-3") {
    // Fusa (8 32nd notes with triple beam)
    return (
      <svg viewBox="0 0 280 90" className="w-full h-24 select-none">
        {[24, 36, 48, 60, 72].map((y) => (
          <line
            key={y}
            x1="10"
            y1={y}
            x2="270"
            y2={y}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
        ))}
        <line x1="35" y1="14" x2="252" y2="14" stroke="#d4af37" strokeWidth="2.5" />
        <line x1="35" y1="19" x2="252" y2="19" stroke="#d4af37" strokeWidth="2" />
        <line x1="35" y1="24" x2="252" y2="24" stroke="#d4af37" strokeWidth="1.8" />
        {[30, 61, 92, 123, 154, 185, 216, 247].map((x, i) => {
          const yPositions = [48, 48, 36, 36, 66, 66, 54, 48];
          const y = yPositions[i];
          return (
            <g key={i}>
              <line
                x1={x + 4.5}
                y1={y}
                x2={x + 4.5}
                y2="14"
                stroke="rgba(240,213,124,0.75)"
                strokeWidth="1.4"
              />
              <ellipse
                cx={x}
                cy={y}
                rx="5.2"
                ry="3.8"
                transform={`rotate(-18 ${x} ${y})`}
                fill={i === 4 || i === 5 ? "#a1a1aa" : "#f0d57c"}
              />
            </g>
          );
        })}
      </svg>
    );
  }

  // Shuffle (Triplet feel with middle rest / ghost articulation)
  return (
    <svg viewBox="0 0 280 90" className="w-full h-24 select-none">
      {[24, 36, 48, 60, 72].map((y) => (
        <line
          key={y}
          x1="10"
          y1={y}
          x2="270"
          y2={y}
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
      ))}
      <text
        x="85"
        y="13"
        textAnchor="middle"
        fill="#d4af37"
        fontSize="11"
        fontWeight="700"
        fontStyle="italic"
        fontFamily="JetBrains Mono, monospace"
      >
        3
      </text>
      <text
        x="205"
        y="13"
        textAnchor="middle"
        fill="#d4af37"
        fontSize="11"
        fontWeight="700"
        fontStyle="italic"
        fontFamily="JetBrains Mono, monospace"
      >
        3
      </text>
      <line x1="46" y1="18" x2="126" y2="18" stroke="#d4af37" strokeWidth="3" />
      <line x1="166" y1="18" x2="246" y2="18" stroke="#d4af37" strokeWidth="3" />
      {[
        { x: 40, y: 48, ghost: false },
        { x: 80, y: 48, ghost: true },
        { x: 120, y: 66, ghost: false },
        { x: 160, y: 36, ghost: false },
        { x: 200, y: 48, ghost: true },
        { x: 240, y: 54, ghost: false },
      ].map((n, i) => (
        <g key={i}>
          <line
            x1={n.x + 5}
            y1={n.y}
            x2={n.x + 5}
            y2="18"
            stroke="rgba(240,213,124,0.75)"
            strokeWidth="1.6"
          />
          <ellipse
            cx={n.x}
            cy={n.y}
            rx={n.ghost ? "4.5" : "6"}
            ry={n.ghost ? "3.2" : "4.2"}
            transform={`rotate(-18 ${n.x} ${n.y})`}
            fill={n.ghost ? "rgba(255,255,255,0.35)" : "#f0d57c"}
          />
        </g>
      ))}
    </svg>
  );
}

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleScrollToOffer = () => {
    const offerEl = document.getElementById("oferta");
    if (offerEl) {
      offerEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOfferCtaClick = () => {
    const { checkoutUrl } = PRODUCT_CONFIG.commercial;
    if (checkoutUrl && checkoutUrl !== "#oferta") {
      window.location.href = checkoutUrl;
      return;
    }
    setIsCheckoutOpen(true);
  };

  const renderDeliverableIcon = (name: DeliverableCard["iconName"]) => {
    const className = "w-6 h-6 text-brand-gold";
    switch (name) {
      case "video":
        return <Video className={className} />;
      case "music":
        return <Music className={className} />;
      case "fileText":
        return <FileText className={className} />;
      case "gauge":
        return <Gauge className={className} />;
      case "turtle":
        return <Sliders className={className} />;
      case "layout":
        return <LayoutGrid className={className} />;
      default:
        return <Music className={className} />;
    }
  };

  const { heroMainImage } = PRODUCT_CONFIG.media;

  return (
    <div className="min-h-screen bg-brand-obsidian text-zinc-100 font-sans selection:bg-brand-gold selection:text-black relative overflow-x-hidden">
      {/* Ambient cinematic lighting glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] ambient-glow-gold pointer-events-none opacity-60" />
      <div className="absolute top-[22%] right-[-10%] w-[550px] h-[550px] ambient-glow-wine pointer-events-none opacity-45" />
      <div className="absolute bottom-[18%] left-[-12%] w-[600px] h-[600px] ambient-glow-gold pointer-events-none opacity-30" />

      {/* ================= TOP URGENCY BAR ================= */}
      <div className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#b91c1c] via-[#ef4444] to-[#b91c1c] border-b border-red-300/40 py-2.5 px-4 shadow-[0_6px_28px_rgba(239,68,68,0.45)] overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.055, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-flex items-center justify-center gap-2.5 text-xs sm:text-sm font-display font-extrabold tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0"
              aria-hidden="true"
            >
              {/* Outer clock circle */}
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="2"
              />
              {/* Center pivot dot */}
              <circle cx="12" cy="12" r="1.2" fill="currentColor" />
              {/* Minute hand rotating smoothly around exact center (12, 12) */}
              <line
                x1="12"
                y1="12"
                x2="12"
                y2="6"
                stroke="#fde047"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 12 12"
                  to="360 12 12"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </line>
              {/* Hour hand rotating slowly around exact center (12, 12) */}
              <line
                x1="12"
                y1="12"
                x2="15.5"
                y2="12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 12 12"
                  to="360 12 12"
                  dur="30s"
                  repeatCount="indefinite"
                />
              </line>
            </svg>
            <span>Essa condição especial termina em breve.</span>
          </motion.div>
        </div>
      </div>

      <main className="w-full">
        {/* ================= 1. HERO / PRIMEIRA DOBRA ================= */}
        <section
          id="hero"
          className="relative pt-12 pb-20 md:pt-16 md:pb-28 px-6 max-w-6xl mx-auto text-center space-y-10"
        >
          {/* 1. Main Headline */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white uppercase leading-[1.06] [text-wrap:balance]">
              TENHA EM MÃOS AS FRASES QUE VÃO{" "}
              <span className="text-gold-metallic drop-shadow-[0_4px_24px_rgba(212,175,55,0.25)]">
                ELEVAR SUA TOCADA A OUTRO NÍVEL.
              </span>
            </h1>
          </div>

          {/* 2. Product Bundle Image Directly Below Headline */}
          <div className="w-full max-w-4xl mx-auto relative">
            {/* Subtle golden & wine ambient backlight behind transparent 3D bundle */}
            <div className="absolute inset-x-8 inset-y-6 bg-gradient-to-tr from-brand-wine/25 via-brand-gold/20 to-brand-gold/10 rounded-full blur-3xl opacity-75 pointer-events-none" />

            <img
              src={heroMainImage || "/images/mestre-em-frases-hero.webp"}
              alt="Mestre em Frases - Patrick Leon"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                const fallback = PRODUCT_CONFIG.media.heroMainImageFallbackUrl;
                if (fallback && target.src !== fallback) {
                  target.src = fallback;
                }
              }}
              className="relative z-10 w-full h-auto object-contain mx-auto drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)]"
            />
          </div>

          {/* 3. Subheadline & Primary CTA Below the Image */}
          <div className="space-y-7 max-w-2xl mx-auto pt-2">
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-normal px-2">
              Você vai aprender frases incríveis explorando sextinas,
              semicolcheias, fusas e shuffle para enriquecer seu vocabulário e
              elevar sua tocada a outro nível.
            </p>

            <div className="flex justify-center items-center">
              <a
                href="#oferta"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToOffer();
                }}
                className="w-full sm:w-auto px-9 py-4.5 rounded-xl bg-gold-metallic text-black font-display font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-[0_12px_35px_-8px_rgba(212,175,55,0.45)] cursor-pointer flex items-center justify-center gap-3 group transition-transform active:scale-[0.99] whitespace-nowrap"
              >
                <span>QUERO DOMINAR NOVAS FRASES</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        {/* ================= 2. COMO FUNCIONA O ESTUDO ================= */}
        <section
          id="como-funciona"
          className="py-20 md:py-28 border-t border-b border-white/[0.06] bg-gradient-to-b from-brand-obsidian via-brand-graphite/70 to-brand-obsidian relative"
        >
          <div className="max-w-6xl mx-auto px-6 space-y-12">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
                METODOLOGIA PASSO A PASSO
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
                VEJA COMO VOCÊ VAI ESTUDAR
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                Cada frase é apresentada de forma prática para que você consiga
                entender, acompanhar e estudar cada detalhe.
              </p>
            </div>

            {/* Study Section Image placed right after the text */}
            <div className="w-full max-w-4xl mx-auto relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-wine/20 via-brand-gold/15 to-transparent rounded-3xl blur-2xl opacity-60 pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden border border-brand-gold/25 bg-brand-obsidian shadow-[0_25px_70px_-15px_rgba(0,0,0,0.85)]">
                <img
                  src={
                    PRODUCT_CONFIG.media.studyLessonPreviewImage ||
                    "/images/como-estudar.webp"
                  }
                  alt="Veja como você vai estudar - Mestre em Frases"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const fallback =
                      PRODUCT_CONFIG.media.studyLessonPreviewFallbackUrl;
                    if (fallback && target.src !== fallback) {
                      target.src = fallback;
                    }
                  }}
                  className="w-full h-auto object-cover block"
                />
              </div>
            </div>

            {/* 3-Step Breakdown */}
            <VideoPlayerMock />
          </div>
        </section>

        {/* ================= 3. SEÇÃO — MÓDULOS ================= */}
        <section
          id="modulos"
          className="py-20 md:py-28 max-w-6xl mx-auto px-6 space-y-14 relative"
        >
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
              SEU NOVO VOCABULÁRIO COMEÇA AQUI
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
              DENTRO DO MESTRE EM FRASES
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed pt-1">
              Um repertório organizado para você explorar diferentes
              subdivisões, sonoridades e possibilidades na bateria.
            </p>
          </div>

          {/* 4 Large Module Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {PRODUCT_CONFIG.modules.map((mod: ModuleConfig) => (
              <div
                key={mod.id}
                className="group rounded-2xl card-metallic overflow-hidden transition-all duration-200 flex flex-col justify-between shadow-[0_20px_50px_-15px_rgba(0,0,0,0.75)]"
              >
                {/* Dedicated Space for Official Module Cover Artwork */}
                {mod.coverImage ? (
                  <div className="relative w-full bg-[#0b0c10] border-b border-white/[0.06] overflow-hidden">
                    <img
                      src={mod.coverImage}
                      alt={`${mod.number} - ${mod.title}`}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (
                          mod.coverFallbackUrl &&
                          target.src !== mod.coverFallbackUrl
                        ) {
                          target.src = mod.coverFallbackUrl;
                        }
                      }}
                      className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-[16/10] w-full bg-[#0b0c10] border-b border-white/[0.06] overflow-hidden flex flex-col justify-between p-6">
                    {/* Subtle background staff & ambient light */}
                    <div className="absolute inset-0 bg-staff-lines opacity-40 pointer-events-none" />
                    <div className="absolute -right-12 -top-12 w-48 h-48 ambient-glow-gold opacity-40 pointer-events-none" />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                        {mod.number}
                      </span>
                      <span className="font-mono text-[11px] text-zinc-500">
                        {mod.notationLabel}
                      </span>
                    </div>

                    {/* Authentic Drum Subdivision Notation Graphic */}
                    <div className="relative z-10 my-auto py-2">
                      <ModuleSubdivisionGraphic moduleId={mod.id} />
                    </div>

                    <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-400 border-t border-white/[0.05] pt-2.5">
                      <span>ARTE DO {mod.number}</span>
                      <span className="text-brand-gold/90">
                        {mod.subdivisionPattern}
                      </span>
                    </div>
                  </div>
                )}

                {/* Card Copy Content */}
                <div className="p-6 sm:p-8 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-brand-gold font-semibold">
                    {mod.number}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white uppercase tracking-tight group-hover:text-brand-gold-light transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button after Modules */}
          <div className="pt-12 flex justify-center items-center">
            <a
              href="#oferta"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToOffer();
              }}
              className="w-full sm:w-auto px-9 py-4.5 rounded-xl bg-gold-metallic text-black font-display font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-[0_12px_35px_-8px_rgba(212,175,55,0.45)] cursor-pointer flex items-center justify-center gap-3 group transition-transform active:scale-[0.99] whitespace-nowrap"
            >
              <span>QUERO DOMINAR NOVAS FRASES</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>

        {/* ================= 4. TUDO O QUE O ALUNO RECEBE ================= */}
        <section
          id="o-que-recebe"
          className="py-20 md:py-28 border-t border-white/[0.06] bg-brand-graphite/40 relative"
        >
          <div className="max-w-6xl mx-auto px-6 space-y-14">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
                ESTUDO COMPLETO E DIRETO AO PONTO
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
                TUDO O QUE VOCÊ RECEBE
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliverablesData.map((item) => (
                <div
                  key={item.id}
                  className="p-7 rounded-2xl card-metallic transition-all duration-200 flex flex-col justify-between gap-6"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center">
                        {renderDeliverableIcon(item.iconName)}
                      </div>
                      <span className="font-mono text-xs text-zinc-500 font-bold tabular-nums">
                        {item.index}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-display font-bold text-white uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/[0.05] flex items-center gap-2 text-xs font-mono text-brand-gold">
                    <span>Incluso no treinamento</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 5. SEÇÃO — TRANSFORMAÇÃO ================= */}
        <motion.section
          id="transformacao"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="py-20 md:py-28 border-t border-b border-brand-gold/25 bg-gradient-to-br from-[#1b150c] via-[#171016] to-[#0d1017] shadow-[inset_0_1px_0_0_rgba(212,175,55,0.18),inset_0_-1px_0_0_rgba(212,175,55,0.12)] relative overflow-hidden"
        >
          {/* Ambient studio gradient highlights for strong section contrast */}
          <div className="absolute -top-32 left-1/4 w-[600px] h-[360px] bg-brand-gold/12 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 right-1/4 w-[550px] h-[340px] bg-brand-wine/25 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_65%)] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-6 space-y-12 relative z-10">
            <div className="space-y-5 text-center md:text-left">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
                MAIS VOCABULÁRIO. MAIS POSSIBILIDADES.
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight leading-[1.08] [text-wrap:balance]">
                NÃO É SOBRE DECORAR FRASES.{" "}
                <span className="block text-gold-metallic mt-1">
                  É SOBRE AUMENTAR SUAS POSSIBILIDADES NA BATERIA.
                </span>
              </h2>

              <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl pt-2">
                <p>
                  Quanto maior o seu vocabulário, mais recursos você tem na hora
                  de criar viradas, preencher espaços e desenvolver suas
                  próprias ideias.
                </p>
                <p className="text-white font-medium border-l-2 border-brand-gold pl-4 py-1">
                  No Mestre em Frases, você estuda cada frase de forma prática e
                  adiciona novos recursos ao seu repertório.
                </p>
              </div>
            </div>

            {/* Three Transformation Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {transformationPoints.map((point) => (
                <div
                  key={point.id}
                  className="p-6 sm:p-7 rounded-2xl bg-brand-surface/90 border border-brand-gold/20 space-y-3"
                >
                  <div className="font-mono text-xs font-bold text-brand-gold tracking-widest tabular-nums">
                    {point.index}.
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-extrabold text-white uppercase tracking-tight">
                    {point.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex justify-center md:justify-start">
              <a
                href="#oferta"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToOffer();
                }}
                className="px-8 py-4 rounded-xl bg-gold-metallic text-black font-display font-extrabold text-sm uppercase tracking-wider cursor-pointer flex items-center gap-3 shadow-lg shadow-brand-gold/20 transition-transform active:scale-95 whitespace-nowrap"
              >
                <span>QUERO DOMINAR NOVAS FRASES</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.section>

        {/* ================= 6. SEÇÃO — OFERTA ================= */}
        <section
          id="oferta"
          className="py-20 md:py-28 px-6 max-w-3xl mx-auto relative z-10"
        >
          {/* Launch Condition Header ABOVE the Offer Card */}
          <div className="text-center space-y-3.5 mb-8 sm:mb-10">
            <motion.div
              animate={{ scale: [1, 1.045, 1] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-brand-surface border-2 border-red-500 shadow-[0_0_32px_-4px_rgba(239,68,68,0.55),inset_0_0_16px_rgba(239,68,68,0.18)]"
            >
              <span className="text-xl sm:text-2xl md:text-3xl leading-none select-none">
                🔥
              </span>
              <span className="text-lg sm:text-2xl md:text-3xl font-display font-black uppercase tracking-wider text-gold-metallic">
                CONDIÇÃO ESPECIAL DE LANÇAMENTO
              </span>
            </motion.div>

            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-300 font-medium">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4 text-brand-gold shrink-0"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="12" cy="12" r="1.1" fill="currentColor" />
                <line
                  x1="12"
                  y1="12"
                  x2="12"
                  y2="6.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 12 12"
                    to="360 12 12"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </line>
                <line
                  x1="12"
                  y1="12"
                  x2="15.5"
                  y2="12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 12 12"
                    to="360 12 12"
                    dur="24s"
                    repeatCount="indefinite"
                  />
                </line>
              </svg>
              <span>Preço especial disponível por tempo limitado.</span>
            </div>
          </div>

          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-brand-surface via-brand-graphite to-brand-obsidian border border-brand-gold/40 shadow-[0_25px_80px_-15px_rgba(212,175,55,0.18)] space-y-9 overflow-hidden">
            {/* Top metallic gold line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gold-metallic" />

            {/* Header with Price in place of ENTRE PARA O MESTRE EM FRASES */}
            <div className="text-center space-y-3">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
                TREINAMENTO MESTRE EM FRASES
              </p>

              <div className="pt-1 space-y-1">
                <p className="text-base sm:text-lg font-display font-bold text-red-500 line-through decoration-red-500 decoration-2 tracking-wide">
                  R$ 127,90
                </p>
                <div className="text-4xl sm:text-6xl font-display font-black text-gold-metallic tracking-tight leading-none">
                  {PRODUCT_CONFIG.commercial.cashPriceText || "R$ 47,90"}
                </div>
              </div>
            </div>

            {/* 10 Included Items Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 pb-4 border-t border-b border-white/[0.07]">
              {offerChecklist.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-zinc-200 text-sm sm:text-base py-1"
                >
                  <div className="w-5 h-5 rounded-md bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-brand-gold" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Primary Offer CTA & Minimalist Trust Bar */}
            <div className="space-y-6 pt-1">
              <motion.a
                href={PRODUCT_CONFIG.commercial.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                animate={{ scale: [1, 1.035, 1] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full py-5 px-6 rounded-xl bg-gold-metallic text-black font-display font-black text-base sm:text-lg tracking-wider uppercase cursor-pointer shadow-[0_12px_35px_-8px_rgba(212,175,55,0.45)] flex justify-center items-center gap-3 group"
              >
                <span>QUERO ACESSAR O MESTRE EM FRASES</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 shrink-0" />
              </motion.a>

              {/* Minimalist & Evident Side-by-Side Trust Badges */}
              <div className="pt-4 border-t border-white/[0.08] grid grid-cols-3 gap-2 sm:gap-4">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 text-center sm:text-left px-2 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="w-7 h-7 rounded-lg bg-brand-gold/15 border border-brand-gold/35 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-brand-gold" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-display font-bold text-zinc-200 tracking-wide leading-tight">
                    Compra 100% Segura
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 text-center sm:text-left px-2 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="w-7 h-7 rounded-lg bg-brand-gold/15 border border-brand-gold/35 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 text-brand-gold" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-display font-bold text-zinc-200 tracking-wide leading-tight">
                    Acesso Imediato
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 text-center sm:text-left px-2 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="w-7 h-7 rounded-lg bg-brand-gold/15 border border-brand-gold/35 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4 text-brand-gold" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-display font-bold text-zinc-200 tracking-wide leading-tight">
                    Garantia de Satisfação
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 7. FAQ ================= */}
        <FaqSection />
      </main>

      {/* ================= QUIET FOOTER ================= */}
      <footer className="w-full border-t border-white/[0.06] bg-[#050507] py-12 px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-zinc-400 text-sm">
          <div className="text-center">
            <p className="font-display font-extrabold text-white tracking-wider uppercase">
              MESTRE EM FRASES · PATRICK LEON
            </p>
            <p className="text-xs text-zinc-500 mt-0.5">
              Treinamento de Bateria — Todos os direitos reservados ©{" "}
              {new Date().getFullYear()}
            </p>
            <p className="text-[10px] text-zinc-600/80 mt-4 tracking-wide">
              Desenvolvimento e estrutura digital por Jeferson Ferreira
            </p>
          </div>
        </div>
      </footer>

      {/* Discreet Bottom-Left Sales Notifications */}
      <SalesToast />

      {/* Enrollment / Pre-Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
}
