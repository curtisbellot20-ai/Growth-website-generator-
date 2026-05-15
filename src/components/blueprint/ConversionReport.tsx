'use client';
import { Card, CardHeader, CardTitle } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import type { ConversionStrategy, StorytellingStrategy, PersuasionStrategy } from '@/lib/types';
import { Target, BookOpen, Brain, MessageCircle, HelpCircle } from 'lucide-react';

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

function BulletList({ items, color = 'text-gold-400' }: { items: string[]; color?: string }) {
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

export default function ConversionReport({
  conversion,
  storytelling,
  persuasion,
}: {
  conversion: ConversionStrategy;
  storytelling: StorytellingStrategy;
  persuasion: PersuasionStrategy;
}) {
  return (
    <div className="space-y-6">
      {/* Storytelling */}
      <Card variant="gold">
        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Transformation Statement</p>
        <p className="text-2xl font-bold text-zinc-100 leading-snug">"{storytelling.transformationStatement}"</p>
        <div className="mt-4 border-t border-surface-500 pt-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Hero Headline</p>
          <p className="text-lg font-semibold text-zinc-200">{storytelling.heroHeadline}</p>
        </div>
      </Card>

      {/* CTA Strategy */}
      <Section title="CTA Strategy" icon={Target}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Hero CTA</p>
            <p className="text-lg font-bold text-gold-400">{conversion.heroCTA}</p>
          </div>
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Mobile Sticky CTA</p>
            <p className="text-lg font-bold text-gold-400">{conversion.stickyMobileCTA}</p>
          </div>
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Final CTA</p>
            <p className="text-lg font-bold text-gold-400">{conversion.finalCTA}</p>
          </div>
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Before/After Concept</p>
            <p className="text-sm text-zinc-300">{conversion.beforeAfterConcept}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Trust Bar Elements</p>
          <div className="flex flex-wrap gap-2">
            {conversion.trustBarElements.map((el, i) => (
              <Badge key={i} variant="gold">{el}</Badge>
            ))}
          </div>
        </div>
      </Section>

      {/* Section Flow */}
      <Section title="Page Conversion Flow" icon={Target}>
        <div className="space-y-2">
          {conversion.sectionFlow.map((section, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-xs text-gold-400 font-bold flex-shrink-0">
                {i + 1}
              </div>
              <div className="flex-1 bg-surface-800 rounded-lg px-4 py-2.5 text-sm text-zinc-300">
                {section}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Storytelling Sections */}
      <Section title="Section Copy Briefs" icon={BookOpen}>
        <div className="space-y-4">
          {storytelling.sectionCopyBriefs.map((brief, i) => (
            <div key={i} className="border border-surface-500 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-zinc-200">{brief.section}</span>
                <Badge variant="zinc" size="sm">CTA: {brief.ctaText}</Badge>
              </div>
              <div>
                <p className="text-gold-300 font-medium">{brief.headline}</p>
                <p className="text-zinc-400 text-sm mt-1">{brief.subheadline}</p>
                <p className="text-zinc-500 text-sm mt-2 italic">{brief.bodyBrief}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Persuasion Triggers */}
      <Section title="Persuasion Triggers" icon={Brain}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Primary Triggers</p>
            <BulletList items={persuasion.primaryTriggers} />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Risk Reducers</p>
            <BulletList items={persuasion.riskReducers} color="text-emerald-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Transformation Messages</p>
            <BulletList items={persuasion.transformationMessages} />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Future Pacing</p>
            <BulletList items={persuasion.futurePacingElements} color="text-blue-400" />
          </div>
        </div>
      </Section>

      {/* Trust Microcopy */}
      <Section title="Trust Microcopy" icon={MessageCircle}>
        <div className="flex flex-wrap gap-2">
          {storytelling.trustMicrocopy.map((copy, i) => (
            <div key={i} className="bg-surface-800 border border-surface-500 rounded-lg px-3 py-2 text-sm text-zinc-300 italic">
              "{copy}"
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ & Objections */}
      <Section title="FAQs & Objection Handlers" icon={HelpCircle}>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">FAQs (with Schema Markup)</p>
            {conversion.faqTopics.map((faq, i) => (
              <div key={i} className="border border-surface-500 rounded-lg p-4 mb-3">
                <p className="font-medium text-zinc-200 flex items-start gap-2">
                  <span className="text-gold-400">Q:</span> {faq.question}
                  {faq.schema && <Badge variant="green" size="sm">Schema</Badge>}
                </p>
                <p className="text-sm text-zinc-400 mt-2 pl-5">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Objection Handlers</p>
            {conversion.objectionHandlers.map((obj, i) => (
              <div key={i} className="border border-surface-500 rounded-lg p-4 mb-3">
                <p className="font-medium text-red-400">"{obj.objection}"</p>
                <p className="text-sm text-zinc-300 mt-2">{obj.response}</p>
                <Badge variant="zinc" size="sm" className="mt-2">Place: {obj.placement}</Badge>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
