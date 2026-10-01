/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2 } from "lucide-react";

interface SaleNotification {
  name: string;
  location: string;
  timeAgo: string;
}

const SALES_NOTIFICATIONS: SaleNotification[] = [
  { name: "Lucas M.", location: "São Paulo, SP", timeAgo: "agora mesmo" },
  { name: "Gabriel S.", location: "Belo Horizonte, MG", timeAgo: "há 1 min" },
  { name: "Rafael C.", location: "Curitiba, PR", timeAgo: "agora mesmo" },
  { name: "Matheus A.", location: "Rio de Janeiro, RJ", timeAgo: "há 2 min" },
  { name: "Thiago R.", location: "Brasília, DF", timeAgo: "agora mesmo" },
  { name: "Felipe D.", location: "Porto Alegre, RS", timeAgo: "há 1 min" },
  { name: "Bruno F.", location: "Goiânia, GO", timeAgo: "agora mesmo" },
  { name: "Daniel P.", location: "Recife, PE", timeAgo: "há 3 min" },
  { name: "André V.", location: "Campinas, SP", timeAgo: "agora mesmo" },
  { name: "Vinícius L.", location: "Florianópolis, SC", timeAgo: "há 1 min" },
  { name: "Rodrigo N.", location: "Salvador, BA", timeAgo: "agora mesmo" },
  { name: "Pedro H.", location: "Fortaleza, CE", timeAgo: "há 2 min" },
];

export default function SalesToast() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let showTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;
    let isCancelled = false;

    const scheduleNext = (initialDelay?: number) => {
      // Short random interval between 4.5s and 9s
      const randomDelay =
        initialDelay ?? Math.floor(Math.random() * 4500) + 4500;

      showTimer = setTimeout(() => {
        if (isCancelled) return;
        setIsVisible(true);

        // Stay visible for 3.8 seconds, then hide and schedule the next one
        hideTimer = setTimeout(() => {
          if (isCancelled) return;
          setIsVisible(false);
          setCurrentIndex((prev) => (prev + 1) % SALES_NOTIFICATIONS.length);
          scheduleNext();
        }, 3800);
      }, randomDelay);
    };

    // First notification appears after 3 seconds
    scheduleNext(3000);

    return () => {
      isCancelled = true;
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const currentSale = SALES_NOTIFICATIONS[currentIndex];

  return (
    <div className="fixed bottom-3.5 left-3.5 z-50 pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#111319]/95 backdrop-blur-md border border-brand-gold/30 shadow-[0_10px_28px_rgba(0,0,0,0.65)] max-w-[245px] sm:max-w-[270px]"
          >
            <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="min-w-0 flex-1 leading-tight">
              <div className="flex items-center justify-between gap-1.5">
                <p className="text-[11px] font-display font-bold text-white truncate">
                  {currentSale.name}{" "}
                  <span className="font-sans font-normal text-zinc-400 text-[10px]">
                    · {currentSale.location}
                  </span>
                </p>
              </div>
              <p className="text-[10.5px] text-zinc-300 truncate mt-0.5">
                Adquiriu o{" "}
                <span className="text-brand-gold font-semibold">
                  Mestre em Frases
                </span>
              </p>
              <p className="text-[9.5px] text-zinc-500 font-mono mt-0.5">
                {currentSale.timeAgo}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
