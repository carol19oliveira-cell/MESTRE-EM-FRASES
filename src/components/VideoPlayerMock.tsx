/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Film, Gauge, Sliders } from "lucide-react";
import { StudyStep } from "../types";

export const studyStepsData: StudyStep[] = [
  {
    id: "normal",
    stepNumber: "01",
    title: "VEJA EM VELOCIDADE NORMAL",
    description:
      "Primeiro, veja a frase completa e entenda como ela soa na execução real.",
    modeTag: "Ver a Frase",
  },
  {
    id: "explicacao",
    stepNumber: "02",
    title: "ENTENDA A FRASE",
    description:
      "Patrick explica a construção da frase e os detalhes da execução.",
    modeTag: "Entender a Frase",
  },
  {
    id: "lenta",
    stepNumber: "03",
    title: "ESTUDE NOTA POR NOTA",
    description:
      "Acompanhe a frase lentamente, junto com a partitura caso queira, para entender cada nota e movimento.",
    modeTag: "Estudar Nota por Nota",
  },
];

export default function VideoPlayerMock() {
  const getStepIcon = (id: string) => {
    const className = "w-5 h-5 text-brand-gold";
    switch (id) {
      case "normal":
        return <Gauge className={className} />;
      case "explicacao":
        return <Film className={className} />;
      case "lenta":
        return <Sliders className={className} />;
      default:
        return <Gauge className={className} />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
      {studyStepsData.map((step) => (
        <div
          key={step.id}
          className="group text-left p-6 md:p-7 rounded-xl card-metallic hover:border-brand-gold/35 transition-all duration-200 relative overflow-hidden flex flex-col justify-between gap-5"
        >
          {/* Top subtle gold bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-200" />

          <div className="flex items-center justify-between w-full">
            <span className="font-mono text-xs font-bold tracking-widest tabular-nums text-brand-gold">
              ETAPA {step.stepNumber}
            </span>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center border bg-brand-gold/15 border-brand-gold/35">
              {getStepIcon(step.id)}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-display font-bold text-lg md:text-xl tracking-tight uppercase text-white">
              {step.title}
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
