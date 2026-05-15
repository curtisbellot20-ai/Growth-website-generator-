'use client';
import { Card, CardHeader, CardTitle } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { DollarSign, TrendingUp, Target, Check, Star } from 'lucide-react';

interface PricingTier {
  name: string; price: string; description: string;
  features: string[]; recommended: boolean; ctaText: string;
}
interface PricingStrategy {
  anchorPrice: string; decoyTier: string;
  tieredPackages: PricingTier[]; pricingPageStructure: string;
  psychologicalTactics: string[]; valueFraming: string;
  guaranteeStrategy: string; paymentOptions: string[];
  priceObjectionHandlers: string[];
}
interface Competitor {
  name: string; strengths: string[]; weaknesses: string[];
  contentGaps: string[]; opportunitiesToExploit: string[];
}
interface CompetitorIntelligence {
  topCompetitors: Competitor[]; keywordGaps: string[];
  contentGaps: string[]; positioningGaps: string[];
  technicalAdvantages: string[]; uniquePositioning: string;
  differentiators: string[]; quickWins: string[];
  mediumTermMoves: string[]; longTermStrategy: string[];
}

function Section({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader><CardTitle className="flex items-center gap-2"><Icon className="w-5 h-5 text-gold-400" />{title}</CardTitle></CardHeader>
      {children}
    </Card>
  );
}
function Bullets({ items, color = 'text-gold-400' }: { items: string[]; color?: string }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
          <span className={`${color} mt-0.5 flex-shrink-0`}>→</span>{item}
        </li>
      ))}
    </ul>
  );
}

export default function PricingCompetitorReport({ pricing, competitor }: { pricing: PricingStrategy; competitor: CompetitorIntelligence }) {
  return (
    <div className="space-y-6">
      {/* Pricing Hero */}
      <Card variant="gold" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Anchor Price</p>
            <p className="text-2xl font-black text-zinc-100">{pricing.anchorPrice}</p>
            <p className="text-xs text-zinc-500 mt-1">Show first to frame value</p>
          </div>
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Decoy Tier</p>
            <p className="text-lg font-bold text-zinc-300">{pricing.decoyTier}</p>
            <p className="text-xs text-zinc-500 mt-1">Makes main offer look best (30–45% lift)</p>
          </div>
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Value Framing</p>
            <p className="text-sm text-zinc-300">{pricing.valueFraming}</p>
          </div>
        </div>
        <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
          <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Guarantee Strategy</p>
          <p className="text-zinc-200 font-medium">{pricing.guaranteeStrategy}</p>
        </div>
      </Card>

      {/* Tiered Packages */}
      <Section title="Tiered Pricing Packages" icon={DollarSign}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pricing.tieredPackages.map((tier, i) => (
            <div key={i} className={`rounded-xl p-5 border ${
              tier.recommended
                ? 'bg-gold-500/10 border-gold-500/40 relative'
                : 'bg-surface-800 border-surface-500'
            }`}>
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="gold"><Star className="w-3 h-3 mr-1" />Most Popular</Badge>
                </div>
              )}
              <p className="font-bold text-zinc-100 text-lg">{tier.name}</p>
              <p className="text-3xl font-black text-gold-400 mt-1">{tier.price}</p>
              <p className="text-sm text-zinc-400 mt-1 mb-4">{tier.description}</p>
              <ul className="space-y-2 mb-5">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <div className={`text-center py-2.5 rounded-lg text-sm font-bold ${
                tier.recommended ? 'bg-gold-500 text-surface-950' : 'bg-surface-600 text-zinc-200'
              }`}>{tier.ctaText}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Psychological Tactics */}
      <Section title="Psychological Pricing Tactics" icon={Target}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Tactics to Apply</p>
            <Bullets items={pricing.psychologicalTactics} />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Price Objection Handlers</p>
            <Bullets items={pricing.priceObjectionHandlers} color="text-emerald-400" />
          </div>
          <div className="md:col-span-2">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Payment Options</p>
            <div className="flex flex-wrap gap-2">
              {pricing.paymentOptions.map((p, i) => <Badge key={i} variant="zinc">{p}</Badge>)}
            </div>
          </div>
        </div>
      </Section>

      {/* Competitor Intelligence */}
      <Section title="Competitor Intelligence" icon={TrendingUp}>
        <div className="mb-4 p-4 bg-gold-500/5 border border-gold-500/20 rounded-xl">
          <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Unique Positioning</p>
          <p className="text-zinc-200 font-semibold">{competitor.uniquePositioning}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Your Differentiators</p>
            <Bullets items={competitor.differentiators} color="text-emerald-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Quick Wins (Under 30 Days)</p>
            <Bullets items={competitor.quickWins} color="text-gold-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Content Gaps to Fill</p>
            <Bullets items={competitor.contentGaps} />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Keyword Gaps</p>
            <div className="flex flex-wrap gap-1.5">
              {competitor.keywordGaps.map((k, i) => <Badge key={i} variant="blue" size="sm">{k}</Badge>)}
            </div>
          </div>
        </div>
        {competitor.topCompetitors.length > 0 && (
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Competitor Analysis</p>
            <div className="space-y-3">
              {competitor.topCompetitors.map((comp, i) => (
                <div key={i} className="border border-surface-500 rounded-xl p-4">
                  <p className="font-bold text-zinc-100 mb-3">{comp.name}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <p className="text-xs text-emerald-400 uppercase tracking-wider mb-1">Strengths</p>
                      {comp.strengths.map((s, j) => <p key={j} className="text-xs text-zinc-400">• {s}</p>)}
                    </div>
                    <div>
                      <p className="text-xs text-red-400 uppercase tracking-wider mb-1">Weaknesses</p>
                      {comp.weaknesses.map((w, j) => <p key={j} className="text-xs text-zinc-400">• {w}</p>)}
                    </div>
                    <div>
                      <p className="text-xs text-gold-400 uppercase tracking-wider mb-1">Exploit</p>
                      {comp.opportunitiesToExploit.map((o, j) => <p key={j} className="text-xs text-zinc-400">• {o}</p>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Section>
    </div>
  );
}
