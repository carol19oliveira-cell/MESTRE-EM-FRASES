/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { PRODUCT_CONFIG } from "../config/productConfig";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState<"form" | "confirmed">("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMsg("Por favor, preencha o seu nome e e-mail.");
      return;
    }
    setErrorMsg("");

    // If an external checkout URL is configured, redirect there
    if (
      PRODUCT_CONFIG.commercial.checkoutUrl &&
      PRODUCT_CONFIG.commercial.checkoutUrl !== "#oferta"
    ) {
      window.location.href = PRODUCT_CONFIG.commercial.checkoutUrl;
      return;
    }

    setStep("confirmed");
  };

  const resetModal = () => {
    setStep("form");
    setErrorMsg("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetModal}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.96, y: 16, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 16, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="relative w-full max-w-lg rounded-2xl border border-brand-gold/30 bg-brand-graphite overflow-hidden shadow-2xl z-10"
          >
            {/* Top gold accent bar */}
            <div className="h-1 w-full bg-gold-metallic" />

            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-brand-gold" />
                <span className="text-sm font-display font-bold tracking-wider text-white uppercase">
                  MESTRE EM FRASES · PATRICK LEON
                </span>
              </div>
              <button
                type="button"
                onClick={resetModal}
                className="p-1.5 rounded-lg hover:bg-white/[0.06] text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8">
              {step === "form" ? (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono uppercase tracking-widest text-brand-gold">
                      INSCRIÇÃO NO TREINAMENTO
                    </span>
                    <h3 className="text-2xl font-display font-extrabold text-white uppercase tracking-tight">
                      Preencha seus dados de acesso
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400">
                      Informe seu nome e o e-mail onde deseja receber o acesso à
                      área de membros do Mestre em Frases.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-brand-wine/30 border border-brand-wine-light text-xs text-zinc-100">
                      {errorMsg}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 uppercase mb-1.5">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Digite seu nome completo"
                        className="w-full px-4 py-3 rounded-xl border border-white/[0.1] bg-black/40 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-gold transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-300 uppercase mb-1.5">
                        E-mail para Acesso
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seuemail@exemplo.com"
                        className="w-full px-4 py-3 rounded-xl border border-white/[0.1] bg-black/40 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-gold transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-300 uppercase mb-1.5">
                        WhatsApp (Opcional)
                      </label>
                      <input
                        type="tel"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="(00) 00000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-white/[0.1] bg-black/40 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-gold transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gold-metallic text-black font-display font-extrabold text-sm uppercase tracking-wider cursor-pointer shadow-lg shadow-brand-gold/20 flex justify-center items-center gap-2 transition-transform active:scale-[0.99]"
                  >
                    CONTINUAR PARA INSCRIÇÃO
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-4 space-y-5">
                  <div className="w-14 h-14 rounded-full bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center mx-auto text-brand-gold">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-extrabold text-white uppercase">
                      Dados Registrados
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      Olá, <strong className="text-white">{name}</strong>. Para
                      concluir a configuração de vendas, defina o link oficial
                      de checkout em{" "}
                      <code className="text-brand-gold font-mono text-xs">
                        src/config/productConfig.ts
                      </code>{" "}
                      (propriedade <code className="text-brand-gold font-mono text-xs">checkoutUrl</code>).
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={resetModal}
                    className="w-full py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] font-display font-bold text-white text-sm uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Fechar
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
