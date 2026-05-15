'use client';
import { Card, CardHeader, CardTitle } from '@/components/ui/Card';
import type { AtmosphereStrategy, ColorStrategy } from '@/lib/types';
import { Palette, Type, Image, Layers } from 'lucide-react';

function ColorSwatch({ hex, label }: { hex: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-14 h-14 rounded-xl border border-surface-400 shadow-lg"
        style={{ backgroundColor: hex }}
      />
      <p className="text-xs text-zinc-400 text-center">{label}</p>
      <p className="text-xs font-mono text-zinc-500">{hex}</p>
    </div>
  );
}

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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
          <span className="text-gold-400 mt-0.5 flex-shrink-0">→</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function AtmosphereReport({
  atmosphere,
  colorStrategy,
}: {
  atmosphere: AtmosphereStrategy;
  colorStrategy: ColorStrategy;
}) {
  const palette = atmosphere.colorPalette;

  return (
    <div className="space-y-6">
      {/* Atmosphere Header */}
      <Card variant="gold">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider">Atmosphere Type</p>
            <p className="text-3xl font-black text-zinc-100 capitalize mt-1">{atmosphere.primaryAtmosphere}</p>
            <p className="text-zinc-400 mt-2">{atmosphere.storytellingStyle}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-zinc-500 mb-1">Visual Density</p>
            <p className="font-semibold text-gold-400 capitalize">{atmosphere.visualDensity}</p>
            <p className="text-xs text-zinc-500 mt-2 mb-1">Copywriting Tone</p>
            <p className="font-semibold text-zinc-300">{atmosphere.copywritingTone}</p>
          </div>
        </div>
      </Card>

      {/* Color Palette */}
      <Section title="Color Palette" icon={Palette}>
        <div className="space-y-6">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            <ColorSwatch hex={palette.primary} label="Primary" />
            <ColorSwatch hex={palette.secondary} label="Secondary" />
            <ColorSwatch hex={palette.accent} label="Accent" />
            <ColorSwatch hex={palette.background} label="Background" />
            <ColorSwatch hex={palette.surface} label="Surface" />
            <ColorSwatch hex={palette.text} label="Text" />
            <ColorSwatch hex={palette.textSecondary} label="Text 2nd" />
            <ColorSwatch hex={palette.cta} label="CTA" />
          </div>
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Rationale</p>
            <p className="text-sm text-zinc-300">{palette.rationale}</p>
          </div>
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Psychology</p>
            <p className="text-sm text-zinc-300">{colorStrategy.colorPsychologyRationale}</p>
          </div>
        </div>
      </Section>

      {/* Typography */}
      <Section title="Typography" icon={Type}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Heading Font</p>
            <p className="text-xl font-bold text-zinc-100">{atmosphere.typography.headingFont}</p>
            <p className="text-xs text-zinc-500 mt-1">Weight: {atmosphere.typography.headingWeight}</p>
          </div>
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Body Font</p>
            <p className="text-lg text-zinc-300">{atmosphere.typography.bodyFont}</p>
            <p className="text-xs text-zinc-500 mt-1">Size: {atmosphere.typography.bodySize} | Line: {atmosphere.typography.lineHeight}</p>
          </div>
          <div className="md:col-span-2 bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Rationale</p>
            <p className="text-sm text-zinc-300">{atmosphere.typography.rationale}</p>
          </div>
        </div>
      </Section>

      {/* Emotional Flow */}
      <Section title="Emotional Flow" icon={Layers}>
        <div className="flex items-center gap-3 flex-wrap">
          {atmosphere.emotionalFlow.map((emotion, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="bg-gold-500/10 border border-gold-500/20 text-gold-300 text-sm font-medium px-3 py-1.5 rounded-full">
                {emotion}
              </div>
              {i < atmosphere.emotionalFlow.length - 1 && (
                <span className="text-zinc-600">→</span>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Section Order</p>
          <div className="space-y-1">
            {atmosphere.sectionOrder.map((section, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xs text-zinc-600 w-5 text-right">{i + 1}</span>
                <div className="flex-1 bg-surface-800 rounded px-3 py-1.5 text-sm text-zinc-300">{section}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Imagery */}
      <Section title="Imagery Direction" icon={Image}>
        <ul className="space-y-2">
          {atmosphere.imagery.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
              <span className="text-gold-400 mt-0.5 flex-shrink-0">→</span>
              {item}
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
