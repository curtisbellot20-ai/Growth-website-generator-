'use client';
import { Card } from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Textarea from '@/components/ui/Textarea';
import { Palette, Zap } from 'lucide-react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { BusinessIntakeForm } from '@/lib/types';

const atmosphereOptions = [
  { value: 'luxury', label: '✨ Luxury — Opulent, exclusive, premium' },
  { value: 'elegant', label: '🌸 Elegant — Refined, graceful, sophisticated' },
  { value: 'romantic', label: '💕 Romantic — Warm, intimate, emotional' },
  { value: 'corporate', label: '💼 Corporate — Professional, credible, polished' },
  { value: 'cinematic', label: '🎬 Cinematic — Bold, dramatic, visually stunning' },
  { value: 'urban-premium', label: '🏙️ Urban Premium — Modern, sleek, city-chic' },
  { value: 'family-friendly', label: '👨‍👩‍👧 Family Friendly — Warm, safe, approachable' },
  { value: 'high-energy', label: '⚡ High Energy — Bold, exciting, action-oriented' },
  { value: 'wellness', label: '🌿 Wellness — Calm, natural, healing' },
  { value: 'minimal', label: '◻️ Minimal — Clean, simple, focused' },
  { value: 'futuristic', label: '🚀 Futuristic — Tech-forward, innovative, cutting-edge' },
  { value: 'trustworthy', label: '🛡️ Trustworthy — Solid, reliable, safe choice' },
  { value: 'exclusive', label: '🔑 Exclusive — Members-only feel, high barrier' },
  { value: 'creative', label: '🎨 Creative — Artistic, expressive, unique' },
  { value: 'performance-driven', label: '📈 Performance-Driven — Results-first, data-backed' },
  { value: 'relaxing', label: '🧘 Relaxing — Peaceful, unhurried, stress-free' },
  { value: 'nightlife', label: '🌙 Nightlife — Dark, energetic, experiential' },
  { value: 'high-status', label: '👑 High Status — Aspirational, prestige, VIP' },
];

const luxuryOptions = [
  { value: 'budget', label: 'Budget — Accessible, value-focused' },
  { value: 'mid-range', label: 'Mid-Range — Quality at fair price' },
  { value: 'premium', label: 'Premium — Above average, quality-first' },
  { value: 'luxury', label: 'Luxury — High-end, exclusive pricing' },
  { value: 'ultra-luxury', label: 'Ultra-Luxury — No-limit, bespoke, elite' },
];

interface Props {
  register: UseFormRegister<BusinessIntakeForm>;
  errors: FieldErrors<BusinessIntakeForm>;
}

export default function Step4Brand({ register, errors }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-zinc-100 flex items-center gap-3">
          <Palette className="w-6 h-6 text-gold-400" />
          Brand & Atmosphere
        </h2>
        <p className="text-zinc-400 mt-1 text-sm">
          Atmosphere is invisible but felt immediately. Choose the emotional environment that makes your ideal customer say "this is exactly for me."
        </p>
      </div>

      <Card>
        <div className="space-y-5">
          <Select
            label="Desired Atmosphere"
            placeholder="Select the atmosphere..."
            options={atmosphereOptions}
            required
            error={errors.desiredBrandStyle?.message}
            {...register('desiredBrandStyle', { required: 'Please select an atmosphere' })}
          />

          <Select
            label="Luxury / Pricing Level"
            options={luxuryOptions}
            required
            {...register('luxuryLevel', { required: true })}
          />

          <Textarea
            label="Describe your desired atmosphere in your own words"
            placeholder="e.g. I want my website to feel like walking into a 5-star hotel lobby — dark, opulent, confident. The kind of brand that doesn't need to shout because its presence commands attention."
            rows={3}
            hint="Be as creative and specific as you like"
            {...register('desiredAtmosphere')}
          />

          <Input
            label="Desired Emotional Tone"
            placeholder="e.g. Confident, aspirational, trustworthy, exciting"
            hint="How do you want visitors to FEEL when they arrive?"
            {...register('desiredEmotionalTone')}
          />

          <div>
            <Input
              label="Brand Colors (optional)"
              placeholder="e.g. Black, gold, and white — or leave blank for AI recommendations"
              hint="If you have brand colors, specify them. Otherwise AI will recommend based on your industry and customer."
              {...register('brandColors')}
            />
          </div>
        </div>
      </Card>

      <Card variant="inset">
        <div className="flex gap-3">
          <Zap className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-zinc-200">Color Psychology</p>
            <p className="text-sm text-zinc-400 mt-1">
              The AI uses color psychology, industry patterns, and customer psychology to recommend the exact palette that maximizes trust and conversion for your specific audience.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
