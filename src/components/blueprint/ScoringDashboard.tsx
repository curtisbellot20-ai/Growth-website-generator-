'use client';
import { ScoreRing } from '@/components/ui/Progress';
import ProgressBar from '@/components/ui/Progress';
import { Card } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { getScoreColor, getScoreLabel } from '@/lib/utils/format';
import type { ScoringReport, ScoreItem } from '@/lib/types';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const SCORE_KEYS: { key: keyof Omit<ScoringReport, 'overall'>; label: string }[] = [
  { key: 'branding', label: 'Branding' },
  { key: 'seo', label: 'SEO' },
  { key: 'localSeo', label: 'Local SEO' },
  { key: 'geo', label: 'GEO' },
  { key: 'aeo', label: 'AEO' },
  { key: 'speed', label: 'Speed' },
  { key: 'mobileUx', label: 'Mobile UX' },
  { key: 'accessibility', label: 'Accessibility' },
  { key: 'conversion', label: 'Conversion' },
  { key: 'trust', label: 'Trust' },
  { key: 'storytelling', label: 'Storytelling' },
  { key: 'atmosphere', label: 'Atmosphere' },
  { key: 'customerAcquisition', label: 'Acquisition' },
  { key: 'retention', label: 'Retention' },
  { key: 'referralReadiness', label: 'Referral' },
  { key: 'analyticsReadiness', label: 'Analytics' },
];

function ScoreDetailCard({ label, item }: { label: string; item: ScoreItem }) {
  const [open, setOpen] = useState(false);
  return (
    <Card className="overflow-hidden">
      <button
        className="w-full flex items-center gap-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <ScoreRing score={item.score} size={60} strokeWidth={5} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-200">{label}</span>
            <Badge variant={item.score >= 8 ? 'green' : item.score >= 6 ? 'gold' : 'red'} size="sm">
              {getScoreLabel(item.score)}
            </Badge>
          </div>
          <p className="text-sm text-zinc-400 mt-0.5 line-clamp-1">{item.reasoning}</p>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
      </button>

      {open && (
        <div className="mt-4 pt-4 border-t border-surface-500 space-y-4">
          <div>
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Reasoning</p>
            <p className="text-sm text-zinc-300">{item.reasoning}</p>
          </div>
          {item.missing.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">What\'s Missing</p>
              <ul className="space-y-1">
                {item.missing.map((m, i) => (
                  <li key={i} className="text-sm text-zinc-400 flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">✗</span> {m}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {item.improvements.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gold-400 uppercase tracking-wider mb-2">To Reach 10/10</p>
              <ul className="space-y-1">
                {item.improvements.map((imp, i) => (
                  <li key={i} className="text-sm text-zinc-400 flex items-start gap-2">
                    <span className="text-gold-400 mt-0.5">→</span> {imp}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}

export default function ScoringDashboard({ scores }: { scores: ScoringReport }) {
  const overallColor = getScoreColor(scores.overall);

  return (
    <div className="space-y-8">
      {/* Overall Score */}
      <Card variant="gold" padding="lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <ScoreRing score={scores.overall} size={120} strokeWidth={8} />
          <div>
            <p className="text-sm text-zinc-400 uppercase tracking-wider mb-1">Overall Growth Score</p>
            <p className={`text-4xl font-black ${overallColor}`}>{scores.overall}/10</p>
            <p className="text-zinc-400 mt-2 max-w-md">
              This score reflects the strategic completeness of your website blueprint across all 16 growth dimensions.
            </p>
          </div>
          <div className="ml-auto grid grid-cols-4 gap-3">
            {SCORE_KEYS.slice(0, 8).map(({ key, label }) => (
              <ScoreRing key={key} score={scores[key].score} size={56} strokeWidth={5} label={label} />
            ))}
          </div>
        </div>
      </Card>

      {/* Score Grid */}
      <div className="grid grid-cols-2 gap-3">
        {SCORE_KEYS.map(({ key, label }) => (
          <ScoreDetailCard key={key} label={label} item={scores[key]} />
        ))}
      </div>
    </div>
  );
}
