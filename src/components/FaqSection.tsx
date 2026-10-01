/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "../types";

const faqData: FAQItem[] = [
  {
    id: "iniciantes",
    question: "O Mestre em Frases serve para iniciantes?",
    answer:
      "O treinamento apresenta cada frase com explicação objetiva, demonstração prática, partitura integrada à aula e execução em versão lenta para que o aluno consiga visualizar, ouvir e entender cada nota.",
  },
  {
    id: "acesso",
    question: "Como vou receber o acesso?",
    answer:
      "Assim que sua inscrição for confirmada, você receberá os dados de acesso à área de membros exclusiva e organizada por módulos diretamente no seu e-mail cadastrado.",
  },
  {
    id: "partitura-aula",
    question: "As aulas possuem partitura?",
    answer:
      "Sim. As videoaulas contam com a partitura integrada visualmente à tela, permitindo que você acompanhe as notas em tempo real enquanto assiste à explicação e à execução de Patrick Leon.",
  },
  {
    id: "partitura-pdf",
    question: "As partituras também estão disponíveis em PDF?",
    answer:
      "Sim. Além da partitura integrada visualmente às videoaulas, você também recebe as partituras completas em PDF para consultar, baixar e estudar.",
  },
  {
    id: "versoes-lentas",
    question: "As frases possuem versões lentas?",
    answer:
      "Sim. Todas as frases contam com a execução em velocidade normal e também com a execução lenta, para que você consiga visualizar, ouvir e entender cada nota e detalhe da frase.",
  },
  {
    id: "organizacao",
    question: "Como as aulas são organizadas?",
    answer:
      "As aulas são organizadas em uma área de membros dividida em quatro módulos práticos: Módulo 1 (Frases em Semicolcheia), Módulo 2 (Frases em Sextina), Módulo 3 (Frases em Fusa) e Módulo 4 (Frases para Shuffle).",
  },
  {
    id: "suporte",
    question: "Terei suporte para tirar dúvidas?",
    answer:
      "Sim. Você conta com suporte via WhatsApp para tirar suas dúvidas durante os estudos.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("partitura-aula");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq-section"
      className="py-20 md:py-28 px-6 max-w-4xl mx-auto relative z-10"
    >
      <div className="text-center mb-14 space-y-3">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
          TIRE SUAS DÚVIDAS
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
          PERGUNTAS FREQUENTES
        </h2>
      </div>

      <div className="space-y-3.5">
        {faqData.map((item, idx) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-xl bg-white transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "border-2 border-brand-gold shadow-[0_12px_35px_-10px_rgba(212,175,55,0.35)]"
                  : "border border-zinc-200 shadow-md hover:border-brand-gold/60"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left font-sans font-bold text-zinc-900 hover:text-black transition-colors cursor-pointer gap-4"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-mono text-xs font-extrabold tabular-nums ${
                      isOpen ? "text-amber-600" : "text-zinc-400"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}.
                  </span>
                  <span className="text-base md:text-lg">{item.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.18 }}
                  className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
                    isOpen
                      ? "bg-amber-500/15 border-amber-500/40 text-amber-700"
                      : "bg-zinc-100 border-zinc-200 text-zinc-600"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="px-6 pb-6 pt-3 text-sm md:text-base text-zinc-700 leading-relaxed border-t border-zinc-200">
                      <p>{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
