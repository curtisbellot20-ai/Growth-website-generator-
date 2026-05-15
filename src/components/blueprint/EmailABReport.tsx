'use client';
import { Card, CardHeader, CardTitle } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { Mail, FlaskConical, TrendingUp } from 'lucide-react';

interface EmailDetail { sequence: number; timing: string; subject: string; preheader: string; purpose: string; contentBrief: string; cta: string; }
interface EmailKPIs { openRateTarget: string; clickRateTarget: string; conversionRateTarget: string; revenuePerRecipientTarget: string; }
interface EmailMarketingArchitecture { welcomeSeries: EmailDetail[]; winBackSeries: EmailDetail[]; promotionalStrategy: string; segmentationStrategy: string; personalizationApproach: string; subjectLineBestPractices: string[]; frequencyRecommendation: string; listGrowthTactics: string[]; deliverabilityChecklist: string[]; kpiTargets: EmailKPIs; }
interface ABTest { priority: number; element: string; hypothesis: string; controlVariant: string; testVariant: string; successMetric: string; estimatedImpact: string; minimumSampleSize: string; testDuration: string; }
interface ABTestingRoadmap { prioritizedTests: ABTest[]; testingCalendar: string; statisticalSignificanceTarget: string; toolRecommendations: string[]; winnerImplementationProcess: string; hypothesisFramework: string; avoidMistakes: string[]; }

function Section({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Icon className="w-5 h-5 text-gold-400" />{title}</CardTitle></CardHeader>{children}</Card>
  );
}
function Bullets({ items, color = 'text-gold-400' }: { items: string[]; color?: string }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-zinc-300"><span className={`${color} mt-0.5 flex-shrink-0`}>→</span>{item}</li>
      ))}
    </ul>
  );
}

const purposeColors: Record<string, 'gold' | 'green' | 'blue' | 'amber' | 'zinc'> = {
  'welcome': 'gold', 'trust': 'blue', 'social proof': 'green', 'education': 'amber',
  'cta': 'gold', 'win-back': 'red' as 'zinc', 'value': 'green',
};

function EmailCard({ email, index }: { email: EmailDetail; index: number }) {
  const color = purposeColors[email.purpose.toLowerCase()] ?? 'zinc';
  return (
    <div className="flex items-start gap-4 bg-surface-800 border border-surface-500 rounded-xl p-4">
      <div className="text-center flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
          <span className="text-sm font-bold text-gold-400">{String(index).padStart(2, '0')}</span>
        </div>
        <p className="text-xs text-zinc-500 mt-1">{email.timing}</p>
      </div>
      <div className="flex-1">
        <p className="font-bold text-zinc-100">{email.subject}</p>
        <p className="text-sm text-zinc-500 italic">{email.preheader}</p>
        <Badge variant={color} size="sm" className="mt-1.5">{email.purpose}</Badge>
        <p className="text-sm text-zinc-400 mt-2">{email.contentBrief}</p>
        <p className="text-sm font-semibold text-gold-400 mt-2">CTA: {email.cta}</p>
      </div>
    </div>
  );
}

export default function EmailABReport({ email, abTesting }: { email: EmailMarketingArchitecture; abTesting: ABTestingRoadmap }) {
  return (
    <div className="space-y-6">
      {/* Email KPI Targets */}
      <Card variant="gold">
        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-4">Email KPI Targets (Based on Klaviyo 2025 Benchmarks)</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Open Rate', value: email.kpiTargets.openRateTarget, note: 'Welcome: 91%' },
            { label: 'Click Rate', value: email.kpiTargets.clickRateTarget, note: 'Industry avg' },
            { label: 'Conversion Rate', value: email.kpiTargets.conversionRateTarget, note: 'Top 10%: 10.53%' },
            { label: 'Revenue / Recipient', value: email.kpiTargets.revenuePerRecipientTarget, note: 'Avg: $2.65' },
          ].map(({ label, value, note }) => (
            <div key={label} className="bg-surface-800 rounded-xl p-4 border border-surface-500 text-center">
              <p className="text-2xl font-black text-gold-400">{value}</p>
              <p className="text-sm font-semibold text-zinc-200 mt-1">{label}</p>
              <p className="text-xs text-zinc-500 mt-0.5">{note}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Welcome Series */}
      <Section title="Welcome Series" icon={Mail}>
        <div className="space-y-3">
          {email.welcomeSeries.map((e, i) => <EmailCard key={i} email={e} index={i + 1} />)}
        </div>
      </Section>

      {/* Win-Back Series */}
      {email.winBackSeries.length > 0 && (
        <Section title="Win-Back Campaign" icon={TrendingUp}>
          <div className="space-y-3">
            {email.winBackSeries.map((e, i) => <EmailCard key={i} email={e} index={i + 1} />)}
          </div>
        </Section>
      )}

      {/* Strategy */}
      <Section title="Email Strategy" icon={Mail}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Segmentation</p>
            <p className="text-sm text-zinc-300">{email.segmentationStrategy}</p>
          </div>
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Personalization</p>
            <p className="text-sm text-zinc-300">{email.personalizationApproach}</p>
          </div>
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Send Frequency</p>
            <p className="text-sm text-zinc-300">{email.frequencyRecommendation}</p>
          </div>
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Promotional Strategy</p>
            <p className="text-sm text-zinc-300">{email.promotionalStrategy}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Subject Line Best Practices</p>
          <Bullets items={email.subjectLineBestPractices} />
        </div>
        <div className="mt-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Deliverability Checklist</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {email.deliverabilityChecklist.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                <span className="w-4 h-4 rounded border border-zinc-600 flex-shrink-0" />{item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* A/B Testing Roadmap */}
      <Section title="A/B Testing Roadmap (CXL Methodology)" icon={FlaskConical}>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-surface-800 rounded-xl p-3 border border-surface-500">
            <p className="text-xs text-zinc-500 mb-1">Significance Target</p>
            <p className="font-bold text-gold-400">{abTesting.statisticalSignificanceTarget}</p>
          </div>
          <div className="bg-surface-800 rounded-xl p-3 border border-surface-500">
            <p className="text-xs text-zinc-500 mb-1">Testing Calendar</p>
            <p className="text-sm text-zinc-300">{abTesting.testingCalendar}</p>
          </div>
          <div className="bg-surface-800 rounded-xl p-3 border border-surface-500">
            <p className="text-xs text-zinc-500 mb-1">Hypothesis Framework</p>
            <p className="text-sm text-zinc-300">{abTesting.hypothesisFramework}</p>
          </div>
        </div>
        <div className="space-y-4">
          {abTesting.prioritizedTests.map((test, i) => (
            <div key={i} className="border border-surface-500 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-sm font-bold text-gold-400">
                  #{test.priority}
                </div>
                <div>
                  <p className="font-bold text-zinc-100">{test.element}</p>
                  <p className="text-xs text-zinc-500">{test.testDuration} • {test.minimumSampleSize} needed</p>
                </div>
                <Badge variant="green" size="sm" className="ml-auto">{test.estimatedImpact}</Badge>
              </div>
              <p className="text-sm text-zinc-400 italic mb-3">“{test.hypothesis}”</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-surface-800 rounded-lg p-3">
                  <p className="text-xs text-zinc-500 mb-1">Control</p>
                  <p className="text-sm text-zinc-300">{test.controlVariant}</p>
                </div>
                <div className="bg-gold-500/5 border border-gold-500/20 rounded-lg p-3">
                  <p className="text-xs text-gold-400 mb-1">Test Variant</p>
                  <p className="text-sm text-zinc-300">{test.testVariant}</p>
                </div>
              </div>
              <p className="text-xs text-zinc-500 mt-2">Success Metric: <span className="text-zinc-300">{test.successMetric}</span></p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Common Mistakes to Avoid</p>
          <Bullets items={abTesting.avoidMistakes} color="text-red-400" />
        </div>
      </Section>
    </div>
  );
}
