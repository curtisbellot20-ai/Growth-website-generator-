'use client';
import { Card, CardHeader, CardTitle } from '@/components/ui/Card';
import type { StrategicIntelligence, TrustStrategy } from '@/lib/types';
import { Brain, Shield, Lightbulb, TrendingUp, Star } from 'lucide-react';

function Section({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-gold-400" />
          {title}
        </CardTitle>
      </CardHeader>
      {children}
    </Card>
  );
}

function TagGrid({ items, color = 'text-gold-400' }: { items: string[]; color?: string }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
          <span className={`${color} mt-0.5 flex-shrink-0`}>→</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function StrategicIntelligenceReport({
  intel,
  trust,
}: {
  intel: StrategicIntelligence;
  trust: TrustStrategy;
}) {
  return (
    <div className="space-y-6">
      {/* Customer Psychology */}
      <Card variant="gold">
        <div className="flex gap-3">
          <Brain className="w-6 h-6 text-gold-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Customer Psychology Analysis</p>
            <p className="text-zinc-200 leading-relaxed">{intel.customerPsychology}</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Section title="Emotional Buying Triggers" icon={Lightbulb}>
          <TagGrid items={intel.emotionalBuyingTriggers} color="text-amber-400" />
        </Section>

        <Section title="Trust Signals" icon={Shield}>
          <TagGrid items={intel.trustSignals} color="text-emerald-400" />
        </Section>

        <Section title="Common Objections" icon={Brain}>
          <TagGrid items={intel.commonObjections} color="text-red-400" />
        </Section>

        <Section title="Highest-Converting Offers" icon={Star}>
          <TagGrid items={intel.highestConvertingOffers} color="text-gold-400" />
        </Section>

        <Section title="Industry Success Patterns" icon={TrendingUp}>
          <TagGrid items={intel.industrySuccessPatterns} />
        </Section>

        <Section title="Premium Positioning Cues" icon={Star}>
          <TagGrid items={intel.premiumPositioningCues} color="text-amber-400" />
        </Section>

        <Section title="Retention Drivers" icon={Shield}>
          <TagGrid items={intel.retentionDrivers} color="text-blue-400" />
        </Section>

        <Section title="Competitive Advantages" icon={TrendingUp}>
          <TagGrid items={intel.competitiveAdvantages} color="text-emerald-400" />
        </Section>
      </div>

      {/* Trust Architecture */}
      <Section title="Trust Architecture" icon={Shield}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Guarantees</p>
            <TagGrid items={trust.guarantees} color="text-emerald-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Process Transparency</p>
            <TagGrid items={trust.processTransparency} color="text-blue-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Authority Sections</p>
            <TagGrid items={trust.authoritySections} />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Trust Signals</p>
            <TagGrid items={trust.trustSignals} color="text-gold-400" />
          </div>
        </div>
      </Section>
    </div>
  );
}
