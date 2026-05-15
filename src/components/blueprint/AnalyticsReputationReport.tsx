'use client';
import { Card, CardHeader, CardTitle } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { BarChart2, Star, MessageSquare } from 'lucide-react';

interface GA4Config { eventsToTrack: string[]; conversionsToMark: string[]; audiencesToCreate: string[]; reportsToEnable: string[]; }
interface GTMConfig { tagsToInstall: string[]; triggersToCreate: string[]; variablesToCreate: string[]; }
interface AnalyticsSetup { ga4Config: GA4Config; gtmConfig: GTMConfig; metaPixelEvents: string[]; heatmapStrategy: string; keyConversionGoals: string[]; dashboardKPIs: string[]; reportingCadence: string; criticalMistakesToAvoid: string[]; }
interface ReviewResponseTemplate { type: 'five-star' | 'four-star' | 'negative' | 'neutral'; template: string; }
interface ReputationManagement { reviewGenerationScript: string; requestTiming: string; platformPriority: string[]; responseTemplates: ReviewResponseTemplate[]; negativeReviewProtocol: string; monitoringPlan: string; aiSearchReputationStrategy: string; reputationKPIs: string[]; automationTools: string[]; }

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

const reviewTypeColors: Record<string, 'green' | 'gold' | 'red' | 'zinc'> = {
  'five-star': 'green', 'four-star': 'gold', 'negative': 'red', 'neutral': 'zinc',
};

export default function AnalyticsReputationReport({ analytics, reputation }: { analytics: AnalyticsSetup; reputation: ReputationManagement }) {
  return (
    <div className="space-y-6">
      {/* Analytics Overview */}
      <Card variant="gold">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Reporting Cadence</p>
            <p className="text-sm text-zinc-200 font-semibold">{analytics.reportingCadence}</p>
          </div>
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Heatmap Strategy</p>
            <p className="text-sm text-zinc-200">{analytics.heatmapStrategy}</p>
          </div>
        </div>
      </Card>

      {/* GA4 Setup */}
      <Section title="GA4 Configuration" icon={BarChart2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Events to Track</p>
            <Bullets items={analytics.ga4Config.eventsToTrack} />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Mark as Conversions</p>
            <Bullets items={analytics.ga4Config.conversionsToMark} color="text-gold-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Audiences to Create</p>
            <Bullets items={analytics.ga4Config.audiencesToCreate} color="text-blue-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Reports to Enable</p>
            <Bullets items={analytics.ga4Config.reportsToEnable} color="text-emerald-400" />
          </div>
        </div>
      </Section>

      {/* GTM + Meta Pixel */}
      <Section title="GTM & Meta Pixel Setup" icon={BarChart2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">GTM Tags to Install</p>
            <Bullets items={analytics.gtmConfig.tagsToInstall} />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">GTM Triggers</p>
            <Bullets items={analytics.gtmConfig.triggersToCreate} color="text-blue-400" />
          </div>
          <div className="md:col-span-2">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Meta Pixel Standard Events</p>
            <div className="flex flex-wrap gap-2">
              {analytics.metaPixelEvents.map((e, i) => <Badge key={i} variant="blue" size="sm">{e}</Badge>)}
            </div>
          </div>
        </div>
      </Section>

      {/* Dashboard KPIs */}
      <Section title="Dashboard KPIs" icon={BarChart2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {analytics.dashboardKPIs.map((kpi, i) => (
            <div key={i} className="flex items-center gap-3 bg-surface-800 rounded-lg px-4 py-3 border border-surface-500">
              <div className="w-2 h-2 rounded-full bg-gold-400 flex-shrink-0" />
              <p className="text-sm text-zinc-300">{kpi}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Critical Mistakes to Avoid</p>
          <Bullets items={analytics.criticalMistakesToAvoid} color="text-red-400" />
        </div>
      </Section>

      {/* Reputation Stats */}
      <Card variant="gold">
        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Reputation By The Numbers (BrightLocal 2025)</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { stat: '98%', label: 'of customers read reviews before choosing a local business' },
            { stat: '88%', label: 'will use a business that responds to ALL reviews (vs 47% that doesn\'t)' },
            { stat: '79%', label: 'of all online reviews are on Google — it\'s the only platform that truly matters' },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-surface-800 rounded-xl p-4 border border-surface-500 text-center">
              <p className="text-3xl font-black text-gold-400">{stat}</p>
              <p className="text-xs text-zinc-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Review Generation */}
      <Section title="Review Generation System" icon={Star}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Request Timing</p>
            <p className="text-sm text-zinc-200 font-semibold">{reputation.requestTiming}</p>
          </div>
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Platform Priority</p>
            <div className="space-y-1">
              {reputation.platformPriority.map((p, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-gold-400 text-xs font-bold">#{i+1}</span>
                  <span className="text-sm text-zinc-300">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 bg-surface-800 rounded-xl p-4 border border-surface-500">
          <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Review Request Script</p>
          <p className="text-sm text-zinc-200 italic leading-relaxed">&quot;{reputation.reviewGenerationScript}&quot;</p>
        </div>
        <div className="mt-4 bg-surface-800 rounded-xl p-4 border border-surface-500">
          <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Negative Review Protocol</p>
          <p className="text-sm text-zinc-300">{reputation.negativeReviewProtocol}</p>
        </div>
      </Section>

      {/* Response Templates */}
      <Section title="Review Response Templates" icon={MessageSquare}>
        <div className="space-y-4">
          {reputation.responseTemplates.map((tmpl, i) => (
            <div key={i} className="border border-surface-500 rounded-xl p-4">
              <Badge variant={reviewTypeColors[tmpl.type] ?? 'zinc'} className="mb-3 capitalize">{tmpl.type.replace('-', ' ')} Review Response</Badge>
              <p className="text-sm text-zinc-300 leading-relaxed italic">&quot;{tmpl.template}&quot;</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">AI Search Reputation Strategy</p>
          <p className="text-sm text-zinc-300">{reputation.aiSearchReputationStrategy}</p>
        </div>
      </Section>
    </div>
  );
}
