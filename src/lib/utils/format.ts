import type { ScoringReport } from '@/lib/types';

export function formatScore(score: number): string {
  return `${score}/10`;
}

export function getScoreColor(score: number): string {
  if (score >= 9) return 'text-emerald-400';
  if (score >= 7) return 'text-gold-400';
  if (score >= 5) return 'text-amber-500';
  return 'text-red-400';
}

export function getScoreBarColor(score: number): string {
  if (score >= 9) return 'bg-emerald-400';
  if (score >= 7) return 'bg-gold-400';
  if (score >= 5) return 'bg-amber-500';
  return 'bg-red-400';
}

export function getScoreLabel(score: number): string {
  if (score === 10) return 'Perfect';
  if (score >= 9) return 'Excellent';
  if (score >= 8) return 'Great';
  if (score >= 7) return 'Good';
  if (score >= 6) return 'Fair';
  if (score >= 5) return 'Average';
  if (score >= 4) return 'Below Average';
  return 'Needs Work';
}

export function calculateOverallScore(scores: ScoringReport): number {
  const keys: (keyof Omit<ScoringReport, 'overall'>)[] = [
    'branding', 'seo', 'localSeo', 'geo', 'aeo', 'speed', 'mobileUx',
    'accessibility', 'conversion', 'trust', 'storytelling', 'atmosphere',
    'customerAcquisition', 'retention', 'referralReadiness', 'analyticsReadiness',
  ];
  const total = keys.reduce((sum, key) => sum + scores[key].score, 0);
  return Math.round((total / keys.length) * 10) / 10;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trimEnd() + '...';
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

export function generateId(): string {
  return `bp_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}
