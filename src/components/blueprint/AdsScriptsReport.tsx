'use client';
import { Card, CardHeader, CardTitle } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { Megaphone, FileText, Phone, MessageCircle } from 'lucide-react';

interface AdGroup { name: string; keywords: string[]; matchTypes: string[]; }
interface AdCampaign { name: string; type: string; objective: string; adGroups: AdGroup[]; }
interface AdCopyVariation { headline1: string; headline2: string; headline3: string; description1: string; description2: string; calloutExtensions: string[]; }
interface GoogleAdsBlueprint { campaignStructure: AdCampaign[]; adCopyVariations: AdCopyVariation[]; audienceTargeting: string[]; budgetRecommendation: string; biddingStrategy: string; negativeKeywords: string[]; extensionStrategy: string[]; qualityScoreTips: string[]; remarketingStrategy: string; landingPageTips: string[]; }
interface SpinQuestions { situation: string[]; problem: string[]; implication: string[]; needPayoff: string[]; }
interface PhoneScript { opener: string; rapportBuilder: string; discoveryTransition: string; voicemail: string; }
interface ObjectionScript { objection: string; technique: string; script: string; }
interface SalesScriptSystem { spinQuestions: SpinQuestions; phoneScript: PhoneScript; dmScript: string; consultationOpener: string; consultationDiscoveryQuestions: string[]; consultationPresentationFramework: string; closingTechniques: string[]; objectionScripts: ObjectionScript[]; followUpTexts: string[]; }

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

export default function AdsScriptsReport({ ads, scripts }: { ads: GoogleAdsBlueprint; scripts: SalesScriptSystem }) {
  return (
    <div className="space-y-6">
      {/* Google Ads Strategy */}
      <Card variant="gold">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Budget Recommendation</p>
            <p className="text-xl font-bold text-zinc-100">{ads.budgetRecommendation}</p>
          </div>
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Bidding Strategy</p>
            <p className="text-sm text-zinc-200 font-semibold">{ads.biddingStrategy}</p>
          </div>
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Remarketing</p>
            <p className="text-sm text-zinc-300">{ads.remarketingStrategy}</p>
          </div>
        </div>
      </Card>

      {/* Campaign Structure */}
      <Section title="Campaign Structure" icon={Megaphone}>
        <div className="space-y-4">
          {ads.campaignStructure.map((campaign, i) => (
            <div key={i} className="border border-surface-500 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="gold">{campaign.type}</Badge>
                <span className="font-bold text-zinc-100">{campaign.name}</span>
              </div>
              <p className="text-sm text-zinc-400 mb-3">{campaign.objective}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {campaign.adGroups.map((ag, j) => (
                  <div key={j} className="bg-surface-800 rounded-lg p-3">
                    <p className="text-sm font-semibold text-zinc-200 mb-2">{ag.name}</p>
                    <div className="flex flex-wrap gap-1">
                      {ag.keywords.map((kw, k) => <Badge key={k} variant="blue" size="sm">{kw}</Badge>)}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {ag.matchTypes.map((mt, k) => <Badge key={k} variant="zinc" size="sm">{mt}</Badge>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Ad Copy Variations */}
      <Section title="Ad Copy Variations" icon={FileText}>
        <div className="space-y-4">
          {ads.adCopyVariations.map((ad, i) => (
            <div key={i} className="border border-surface-500 rounded-xl p-4">
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Variation {i + 1}</p>
              <div className="space-y-2">
                <p><span className="text-xs text-gold-400 font-semibold">H1:</span> <span className="text-zinc-200">{ad.headline1}</span></p>
                <p><span className="text-xs text-gold-400 font-semibold">H2:</span> <span className="text-zinc-200">{ad.headline2}</span></p>
                <p><span className="text-xs text-gold-400 font-semibold">H3:</span> <span className="text-zinc-200">{ad.headline3}</span></p>
                <p className="text-sm text-zinc-400">{ad.description1}</p>
                <p className="text-sm text-zinc-400">{ad.description2}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {ad.calloutExtensions.map((ce, j) => <Badge key={j} variant="amber" size="sm">{ce}</Badge>)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Quality Score Tips</p>
            <Bullets items={ads.qualityScoreTips} />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Negative Keywords</p>
            <div className="flex flex-wrap gap-1.5">
              {ads.negativeKeywords.map((kw, i) => <Badge key={i} variant="red" size="sm">{kw}</Badge>)}
            </div>
          </div>
        </div>
      </Section>

      {/* SPIN Selling */}
      <Section title="SPIN Selling Framework (Neil Rackham)" icon={MessageCircle}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'S — Situation', items: scripts.spinQuestions.situation, color: 'text-blue-400' },
            { label: 'P — Problem', items: scripts.spinQuestions.problem, color: 'text-amber-400' },
            { label: 'I — Implication', items: scripts.spinQuestions.implication, color: 'text-red-400' },
            { label: 'N — Need-Payoff', items: scripts.spinQuestions.needPayoff, color: 'text-emerald-400' },
          ].map(({ label, items, color }) => (
            <div key={label} className="bg-surface-800 rounded-xl p-4 border border-surface-500">
              <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${color}`}>{label}</p>
              <ul className="space-y-1.5">
                {items.map((q, i) => <li key={i} className="text-sm text-zinc-300 italic">"{q}"</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Phone Script */}
      <Section title="Phone Script" icon={Phone}>
        <div className="space-y-3">
          {[
            { label: 'Opener', content: scripts.phoneScript.opener, color: 'border-gold-500/30' },
            { label: 'Rapport Builder', content: scripts.phoneScript.rapportBuilder, color: 'border-blue-500/30' },
            { label: 'Discovery Transition', content: scripts.phoneScript.discoveryTransition, color: 'border-emerald-500/30' },
            { label: 'Voicemail Script', content: scripts.phoneScript.voicemail, color: 'border-zinc-500/30' },
          ].map(({ label, content, color }) => (
            <div key={label} className={`bg-surface-800 rounded-xl p-4 border ${color}`}>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">{label}</p>
              <p className="text-sm text-zinc-200 italic leading-relaxed">&quot;{content}&quot;</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Objection Scripts */}
      <Section title="Objection Handling Scripts" icon={MessageCircle}>
        <div className="space-y-3">
          {scripts.objectionScripts.map((obj, i) => (
            <div key={i} className="border border-surface-500 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="red" size="sm">Objection</Badge>
                <span className="text-zinc-200 font-medium">&quot;{obj.objection}&quot;</span>
              </div>
              <Badge variant="amber" size="sm" className="mb-2">{obj.technique}</Badge>
              <p className="text-sm text-zinc-300 italic leading-relaxed">&quot;{obj.script}&quot;</p>
            </div>
          ))}
        </div>
      </Section>

      {/* DM Script */}
      <Section title="DM / Text Script" icon={MessageCircle}>
        <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
          <p className="text-sm text-zinc-200 italic leading-relaxed whitespace-pre-line">{scripts.dmScript}</p>
        </div>
        {scripts.followUpTexts.length > 0 && (
          <div className="mt-4">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Follow-Up Text Templates</p>
            <div className="space-y-2">
              {scripts.followUpTexts.map((t, i) => (
                <div key={i} className="bg-surface-800 rounded-lg p-3 border border-surface-500">
                  <p className="text-sm text-zinc-300 italic">&quot;{t}&quot;</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Section>
    </div>
  );
}
