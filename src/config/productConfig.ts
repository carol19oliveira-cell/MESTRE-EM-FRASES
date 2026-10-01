/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * ARQUIVO CENTRAL DE CONFIGURAÇÃO — MESTRE EM FRASES (PATRICK LEON)
 * Edite este arquivo para atualizar facilmente:
 * - Link de checkout, preço e condições comerciais
 * - Imagens oficiais do Patrick Leon, capa do produto e artes dos módulos
 * - Vídeo ou imagem real de demonstração da aula
 */

// @ts-ignore
import heroBundleWebp from "../assets/images/mestre-em-frases-hero.webp";
// @ts-ignore
import comoEstudarWebp from "../assets/images/como-estudar.webp";
// @ts-ignore
import moduloSemicolcheiaWebp from "../assets/images/modulo-2.webp";
// @ts-ignore
import moduloSextinaWebp from "../assets/images/modulo-sextina.webp";
// @ts-ignore
import moduloFusaWebp from "../assets/images/modulo-fusa.webp";
// @ts-ignore
import modulo4Webp from "../assets/images/modulo-4.webp";

export interface ModuleConfig {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  notationLabel: string;
  subdivisionPattern: string;
  description: string;
  /** Caminho ou URL da arte oficial do módulo (ex: "/images/modulo-1.webp") */
  coverImage: string;
  coverFallbackUrl?: string;
}

export const PRODUCT_CONFIG = {
  productName: "MESTRE EM FRASES",
  instructorName: "PATRICK LEON",
  niche: "BATERIA",

  // ============================================================================
  // IMAGENS E MÍDIAS OFICIAIS (Preencha com o caminho em /public ou URL externa)
  // ============================================================================
  media: {
    /** Imagem principal posicionada abaixo da Headline no Hero */
    heroMainImage:
      (heroBundleWebp as string) ||
      "https://i.ibb.co/fY1W72mq/Chat-GPT-Image-30-de-set-de-2026-14-42-18.webp",
    heroMainImageFallbackUrl:
      "https://i.ibb.co/fY1W72mq/Chat-GPT-Image-30-de-set-de-2026-14-42-18.webp",
    /** URL de embed de vídeo (YouTube/Vimeo/PandaVideo) da aula demonstrativa na seção "Veja como você vai estudar" */
    studyLessonVideoEmbedUrl: "",
    /** Imagem real na seção "Veja como você vai estudar" */
    studyLessonPreviewImage:
      (comoEstudarWebp as string) ||
      "https://i.ibb.co/nsq01K1T/IMG-2206.webp",
    studyLessonPreviewFallbackUrl:
      "https://i.ibb.co/nsq01K1T/IMG-2206.webp",
  },

  // ============================================================================
  // CONDIÇÕES COMERCIAIS E CHECKOUT (Edite aqui quando definir os valores)
  // ============================================================================
  commercial: {
    /** Link oficial do checkout (ex: Hotmart, Kiwify, Cakto, Eduzz, etc.) */
    checkoutUrl: "https://pay.cakto.com.br/32t23fu_1092499",
    /** Se true, exibe o bloco de preço configurado abaixo */
    isPriceConfigured: true,
    /** Preço anterior riscado */
    oldPriceText: "R$ 127,90",
    /** Preço principal */
    cashPriceText: "R$ 77,90",
  },

  // ============================================================================
  // MÓDULOS DO TREINAMENTO (Adicione as artes oficiais em coverImage)
  // ============================================================================
  modules: [
    {
      id: "modulo-1",
      number: "MÓDULO 1",
      title: "FRASES EM SEMICOLCHEIA",
      subtitle: "Precisão rítmica, acentuações e clareza na construção de ideias",
      notationLabel: "Subdivisão de 4 notas por tempo",
      subdivisionPattern: "R L R K  ·  R L K K  ·  K R L R",
      description:
        "Domine a base de semicolcheias com deslocamentos, acentos e orquestrações práticas para aplicar em diferentes andamentos e estilos.",
      coverImage:
        (moduloSemicolcheiaWebp as string) ||
        "https://i.ibb.co/S4LNBPwh/Imagem-do-Chat-GPT-1-de-out-elementor-io-optimized.webp",
      coverFallbackUrl:
        "https://i.ibb.co/S4LNBPwh/Imagem-do-Chat-GPT-1-de-out-elementor-io-optimized.webp",
    },
    {
      id: "modulo-2",
      number: "MÓDULO 2",
      title: "FRASES EM SEXTINA",
      subtitle: "Fluidez, distribuição e preenchimento nos tambores e pratos",
      notationLabel: "Subdivisão de 6 notas por tempo",
      subdivisionPattern: "R L R L K K  ·  R L L R L K",
      description:
        "Explore combinações entre mãos e bumbo em sextinas para construir frases fluidas, articuladas e cheias de movimento na bateria.",
      coverImage:
        (moduloSextinaWebp as string) ||
        "https://i.ibb.co/JFmpDfHY/Imagem-do-Chat-GPT-1-de-out-elementor-io-optimized-1.webp",
      coverFallbackUrl:
        "https://i.ibb.co/JFmpDfHY/Imagem-do-Chat-GPT-1-de-out-elementor-io-optimized-1.webp",
    },
    {
      id: "modulo-3",
      number: "MÓDULO 3",
      title: "FRASES EM FUSA",
      subtitle: "Densidade, velocidade controlada e frases de impacto",
      notationLabel: "Subdivisão de 8 notas por tempo",
      subdivisionPattern: "R L R L K K R L  ·  R L L R R L K K",
      description:
        "Entenda nota por nota como encaixar fusas com limpeza e definição, usando a versão lenta e a partitura integrada para dominar cada detalhe.",
      coverImage:
        (moduloFusaWebp as string) ||
        "https://i.ibb.co/CpbMPSGP/Imagem-do-Chat-GPT-1-de-out-elementor-io-optimized-2.webp",
      coverFallbackUrl:
        "https://i.ibb.co/CpbMPSGP/Imagem-do-Chat-GPT-1-de-out-elementor-io-optimized-2.webp",
    },
    {
      id: "modulo-4",
      number: "MÓDULO 4",
      title: "FRASES PARA SHUFFLE",
      subtitle: "Linguagem tercinada, swing e vocabulário específico para grooves shuffle",
      notationLabel: "Sensação rítmica tercinada / Shuffle feel",
      subdivisionPattern: "R · L R · K  ·  R L R K · L",
      description:
        "Desenvolva vocabulário próprio para o universo do shuffle, respeitando a pulsação e o balanço característicos dessa levada.",
      coverImage:
        (modulo4Webp as string) ||
        "https://i.ibb.co/847j2tZv/Imagem-do-Chat-GPT-1-de-out-de-2026-11-37-42.webp",
      coverFallbackUrl:
        "https://i.ibb.co/847j2tZv/Imagem-do-Chat-GPT-1-de-out-de-2026-11-37-42.webp",
    },
  ] as ModuleConfig[],
};
