'use client';
import Textarea from '@/components/ui/Textarea';
import Input from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { Users, Heart, AlertTriangle, Shield, MessageCircle } from 'lucide-react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { BusinessIntakeForm } from '@/lib/types';

interface Props {
  register: UseFormRegister<BusinessIntakeForm>;
  errors: FieldErrors<BusinessIntakeForm>;
}

const hints = [
  {
    icon: Users,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    label: 'Target Customer',
    example: '"Brides aged 25-40 planning high-end weddings in Atlanta with budgets over $30K"',
  },
  {
    icon: Heart,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    label: 'Customer Desires',
    example: '"A stress-free, unforgettable wedding day that impresses their guests"',
  },
  {
    icon: AlertTriangle,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    label: 'Customer Fears',
    example: '"Vendor no-shows, ugly setups, wasting money on things that look cheap"',
  },
];

export default function Step2Customer({ register, errors }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-zinc-100 flex items-center gap-3">
          <Users className="w-6 h-6 text-gold-400" />
          Customer Intelligence
        </h2>
        <p className="text-zinc-400 mt-1 text-sm">
          Deep customer insight is the #1 conversion driver. Be specific and honest.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {hints.map(({ icon: Icon, color, bg, label, example }) => (
          <div key={label} className={`rounded-xl p-4 ${bg} border border-white/5`}>
            <Icon className={`w-5 h-5 ${color} mb-2`} />
            <p className="text-xs font-semibold text-zinc-300 mb-1">{label}</p>
            <p className="text-xs text-zinc-500 italic">{example}</p>
          </div>
        ))}
      </div>

      <Card>
        <div className="space-y-5">
          <Input
            label="Who is your ideal customer?"
            placeholder="Age, gender, income, lifestyle, event type, budget range..."
            required
            error={errors.targetCustomer?.message}
            {...register('targetCustomer', { required: 'Target customer is required' })}
          />
          <Textarea
            label="What are their biggest pain points?"
            placeholder="What problems keep them up at night? What frustrates them about other providers?"
            rows={3}
            hint="Be as specific as possible — this drives your messaging"
            {...register('customerPainPoints')}
          />
          <Textarea
            label="What do they deeply desire?"
            placeholder="What outcome do they want? What would make them say 'WOW this was perfect'?"
            rows={3}
            {...register('customerDesires')}
          />
          <Textarea
            label="What are they afraid of?"
            placeholder="Wasting money, being embarrassed, getting scammed, missing their vision..."
            rows={3}
            {...register('customerFears')}
          />
          <Textarea
            label="What objections stop them from buying?"
            placeholder="Too expensive, not sure if worth it, need to check reviews first, not sure who to trust..."
            rows={3}
            hint="Your website should address every one of these"
            {...register('customerObjections')}
          />
        </div>
      </Card>

      <Card variant="inset">
        <div className="flex gap-3">
          <MessageCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-zinc-200">Why this matters</p>
            <p className="text-sm text-zinc-400 mt-1">
              The AI will use this intelligence to generate headlines, copy, FAQs, objection handlers, and emotional triggers that speak directly to YOUR specific customer — not generic visitors.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
