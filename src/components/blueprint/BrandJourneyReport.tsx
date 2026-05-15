'use client';
import { Card, CardHeader, CardTitle } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { Volume2, Map, ArrowRight } from 'lucide-react';

interface PersonalityTrait { trait: string; description: string; inPractice: string; rightExample: string; wrongExample: string; }
interface VoiceDimension { dimension: string; percentage: string; description: string; }
interface BrandVoiceGuide { personalityTraits: PersonalityTrait[]; toneOfVoice: string; voiceDimensions: VoiceDimension[]; useWords: string[]; avoidWords: string[]; brandPhrases: string[]; messagingPillars: string[]; dosList: string[]; dontsList: string[]; taglines: string[]; }
interface JourneyStage { stage: string; customerGoal: string; emotions: string[]; touchpoints: string[]; painPoints: string[]; opportunities: string[]; metrics: string[]; }
interface CustomerJourneyMap { stages: JourneyStage[]; criticalMoments: string[]; dropoffRisks: string[]; optimizationOpportunities: string[]; emotionalLow: string; emotionalHigh: string; }

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

const stageColors = ['bg-blue-500/10 border-blue-500/20', 'bg-amber-500/10 border-amber-500/20', 'bg-emerald-500/10 border-emerald-500/20', 'bg-gold-500/10 border-gold-500/20', 'bg-purple-500/10 border-purple-500/20', 'bg-pink-500/10 border-pink-500/20'];
const stageTextColors = ['text-blue-400', 'text-amber-400', 'text-emerald-400', 'text-gold-400', 'text-purple-400', 'text-pink-400'];

export default function BrandJourneyReport({ brandVoice, journeyMap }: { brandVoice: BrandVoiceGuide; journeyMap: CustomerJourneyMap }) {
  return (
    <div className="space-y-6">
      {/* Brand Voice Stats */}
      <Card variant="gold">
        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Why Brand Voice Matters (Edelman Trust Barometer 2025)</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { stat: '76%', label: 'of consumers decide whether to trust a brand based on consistent communication' },
            { stat: '33%', label: 'revenue increase from consistent brand voice across all touchpoints' },
            { stat: '68%', label: 'of consumers agree consistency boosts trust' },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-surface-800 rounded-xl p-4 border border-surface-500 text-center">
              <p className="text-3xl font-black text-gold-400">{stat}</p>
              <p className="text-xs text-zinc-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Personality Traits */}
      <Section title="Brand Personality Traits" icon={Volume2}>
        <p className="text-sm text-zinc-400 mb-4">Tone of Voice: <span className="text-zinc-200 font-semibold">{brandVoice.toneOfVoice}</span></p>
        <div className="space-y-4">
          {brandVoice.personalityTraits.map((trait, i) => (
            <div key={i} className="border border-surface-500 rounded-xl p-4">
              <p className="font-bold text-gold-400 text-lg">{trait.trait}</p>
              <p className="text-sm text-zinc-300 mt-1">{trait.description}</p>
              <p className="text-xs text-zinc-500 mt-2">{trait.inPractice}</p>
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-3">
                  <p className="text-xs text-emerald-400 font-semibold mb-1">✓ RIGHT</p>
                  <p className="text-xs text-zinc-300 italic">&quot;{trait.rightExample}&quot;</p>
                </div>
                <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-3">
                  <p className="text-xs text-red-400 font-semibold mb-1">✗ WRONG</p>
                  <p className="text-xs text-zinc-300 italic">&quot;{trait.wrongExample}&quot;</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Voice Dimensions */}
      <Section title="Voice Dimensions" icon={Volume2}>
        <div className="space-y-3">
          {brandVoice.voiceDimensions.map((dim, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-32 flex-shrink-0">
                <p className="text-sm font-semibold text-zinc-200">{dim.dimension}</p>
                <p className="text-xs text-gold-400">{dim.percentage}</p>
              </div>
              <div className="flex-1 bg-surface-500 rounded-full h-2">
                <div
                  className="bg-gold-500 h-2 rounded-full"
                  style={{ width: dim.percentage }}
                />
              </div>
              <p className="text-xs text-zinc-400 w-48 flex-shrink-0">{dim.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Vocabulary */}
      <Section title="Brand Vocabulary" icon={Volume2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-emerald-400 uppercase tracking-wider font-semibold mb-2">Words to USE</p>
            <div className="flex flex-wrap gap-1.5">
              {brandVoice.useWords.map((w, i) => <Badge key={i} variant="green">{w}</Badge>)}
            </div>
          </div>
          <div>
            <p className="text-xs text-red-400 uppercase tracking-wider font-semibold mb-2">Words to AVOID</p>
            <div className="flex flex-wrap gap-1.5">
              {brandVoice.avoidWords.map((w, i) => <Badge key={i} variant="red">{w}</Badge>)}
            </div>
          </div>
          <div>
            <p className="text-xs text-gold-400 uppercase tracking-wider font-semibold mb-2">Brand Phrases</p>
            <div className="space-y-1">
              {brandVoice.brandPhrases.map((p, i) => <p key={i} className="text-sm text-zinc-300 italic">&quot;{p}&quot;</p>)}
            </div>
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Tagline Options</p>
            <div className="space-y-1">
              {brandVoice.taglines.map((t, i) => <p key={i} className="text-sm text-zinc-200 font-semibold">&quot;{t}&quot;</p>)}
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-emerald-400 uppercase tracking-wider font-semibold mb-2">DO</p>
            <Bullets items={brandVoice.dosList} color="text-emerald-400" />
          </div>
          <div>
            <p className="text-xs text-red-400 uppercase tracking-wider font-semibold mb-2">DON'T</p>
            <Bullets items={brandVoice.dontsList} color="text-red-400" />
          </div>
        </div>
      </Section>

      {/* Journey Map */}
      <Section title="Customer Journey Map" icon={Map}>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
            <p className="text-xs text-emerald-400 uppercase tracking-wider mb-1">Emotional High Point</p>
            <p className="text-sm text-zinc-200">{journeyMap.emotionalHigh}</p>
          </div>
          <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
            <p className="text-xs text-red-400 uppercase tracking-wider mb-1">Emotional Low Point</p>
            <p className="text-sm text-zinc-200">{journeyMap.emotionalLow}</p>
          </div>
        </div>
        <div className="space-y-4">
          {journeyMap.stages.map((stage, i) => (
            <div key={i} className={`rounded-xl p-4 border ${stageColors[i % stageColors.length]}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${stageColors[i % stageColors.length]} border`}>
                  {i + 1}
                </div>
                <p className={`font-bold text-lg ${stageTextColors[i % stageTextColors.length]}`}>{stage.stage}</p>
                <ArrowRight className="w-4 h-4 text-zinc-600" />
                <p className="text-sm text-zinc-400">{stage.customerGoal}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <p className="text-xs text-zinc-500 mb-1">Emotions</p>
                  <div className="flex flex-wrap gap-1">
                    {stage.emotions.map((e, j) => <Badge key={j} variant="zinc" size="sm">{e}</Badge>)}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 mb-1">Touchpoints</p>
                  {stage.touchpoints.map((t, j) => <p key={j} className="text-xs text-zinc-400">• {t}</p>)}
                </div>
                <div>
                  <p className="text-xs text-red-400 mb-1">Pain Points</p>
                  {stage.painPoints.map((p, j) => <p key={j} className="text-xs text-zinc-400">• {p}</p>)}
                </div>
                <div>
                  <p className="text-xs text-gold-400 mb-1">Opportunities</p>
                  {stage.opportunities.map((o, j) => <p key={j} className="text-xs text-zinc-400">• {o}</p>)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-red-400 uppercase tracking-wider font-semibold mb-2">Drop-off Risks</p>
            <Bullets items={journeyMap.dropoffRisks} color="text-red-400" />
          </div>
          <div>
            <p className="text-xs text-gold-400 uppercase tracking-wider font-semibold mb-2">Optimization Opportunities</p>
            <Bullets items={journeyMap.optimizationOpportunities} />
          </div>
        </div>
      </Section>
    </div>
  );
}
