'use client';
import { Card } from '@/components/ui/Card';
import Select from '@/components/ui/Select';
import { Rocket, CheckCircle } from 'lucide-react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { BusinessIntakeForm } from '@/lib/types';

const ctaOptions = [
  { value: 'call', label: '📞 Call Now — Drive inbound calls' },
  { value: 'form', label: '📝 Contact Form — Lead capture form' },
  { value: 'booking', label: '📅 Book Appointment — Online booking' },
  { value: 'quote', label: '💰 Get a Quote — Custom quote request' },
  { value: 'consultation', label: '☕ Free Consultation — Discovery call' },
  { value: 'shop', label: '🛒 Shop Now — Direct purchase' },
];

const goalOptions = [
  { value: 'leads', label: '🎯 Generate Leads — Fill the pipeline' },
  { value: 'sales', label: '💳 Drive Sales — Direct revenue' },
  { value: 'bookings', label: '📅 Increase Bookings — Fill the calendar' },
  { value: 'awareness', label: '📢 Brand Awareness — Get discovered' },
  { value: 'authority', label: '🏆 Build Authority — Become the expert' },
  { value: 'local-seo', label: '📍 Dominate Local SEO — #1 in Google Maps' },
];

const features = [
  'Full website blueprint with page structure',
  'SEO + Local SEO + GEO + AEO strategy',
  'Emotional atmosphere & color strategy',
  'Persuasive copy briefs for every section',
  'Customer acquisition system',
  'Retention & referral strategies',
  'Lead magnet & email sequence ideas',
  'Trust architecture plan',
  'Scoring report across 16 dimensions',
  'FAQ & objection handling content',
  '12-month content strategy',
  'Follow-up email sequence (5 emails)',
];

interface Props {
  register: UseFormRegister<BusinessIntakeForm>;
  errors: FieldErrors<BusinessIntakeForm>;
}

export default function Step5Goals({ register, errors }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-zinc-100 flex items-center gap-3">
          <Rocket className="w-6 h-6 text-gold-400" />
          Website Goals
        </h2>
        <p className="text-zinc-400 mt-1 text-sm">
          What is this website supposed to do for your business? This drives your entire conversion architecture.
        </p>
      </div>

      <Card>
        <div className="space-y-5">
          <Select
            label="Primary Website Goal"
            options={goalOptions}
            required
            error={errors.websiteGoal?.message}
            {...register('websiteGoal', { required: 'Please select a goal' })}
          />

          <Select
            label="Primary CTA Action"
            hint="What should visitors do when they're ready?"
            options={ctaOptions}
            required
            {...register('ctaPreference', { required: true })}
          />
        </div>
      </Card>

      <Card variant="gold" padding="lg">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
            <Rocket className="w-5 h-5 text-gold-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-zinc-100 mb-3">Your Blueprint Will Include:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span className="text-sm text-zinc-300">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
