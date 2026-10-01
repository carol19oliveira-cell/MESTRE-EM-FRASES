/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  editableNote?: string;
}

export interface DeliverableCard {
  id: string;
  index: string;
  title: string;
  description: string;
  iconName: "video" | "music" | "fileText" | "gauge" | "turtle" | "layout";
}

export interface StudyStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  modeTag: string;
}

export interface TransformationPoint {
  id: string;
  index: string;
  title: string;
  description: string;
}
