'use client';
import { Card, CardHeader, CardTitle } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import type { AcquisitionStrategy, RetentionStrategy, ReferralStrategy } from '@/lib/types';
import { Users, Mail, GitBranch, Gift, RefreshCcw, Repeat2 } from 'lucide-react';

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

const leadMagnetTypeColors: Record<string, 'gold' | 'green' | 'blue' | 'amber'> = {
  guide: 'blue',
  checklist: 'green',
  template: 'amber',
  video: 'gold',
  consultation: 'green',
  audit: 'blue',
};

export default function AcquisitionReport({
  acquisition,
  retention,
  referral,
}: {
  acquisition: AcquisitionStrategy;
  retention: RetentionStrategy;
  referral: ReferralStrategy;
}) {
  return (
    <div className="space-y-6">
      {/* Lead Magnets */}
      <Section title="Lead Magnets" icon={Gift}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {acquisition.leadMagnets.map((lm, i) => (
            <div key={i} className="bg-surface-800 border border-surface-500 rounded-xl p-4 space-y-2">
              <div className="flex items-center justify-between">
                <Badge variant={leadMagnetTypeColors[lm.type] ?? 'zinc'}>{lm.type}</Badge>
                <span className="text-xs text-zinc-500">{lm.deliveryMethod}</span>
              </div>
              <p className="font-semibold text-zinc-200">{lm.title}</p>
              <p className="text-sm text-zinc-400">{lm.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Capture Strategy */}
      <Section title="Capture Strategy" icon={Mail}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Email Capture</p>
            <p className="text-sm text-zinc-300">{acquisition.emailCaptureStrategy}</p>
          </div>
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">SMS Capture</p>
            <p className="text-sm text-zinc-300">{acquisition.smsCaptureStrategy}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Consultation Funnel</p>
          <div className="space-y-2">
            {acquisition.consultationFunnel.map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-xs text-gold-400 font-bold flex-shrink-0">{i+1}</div>
                <p className="text-sm text-zinc-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Social Content */}
      <Section title="Social Content Ideas" icon={Users}>
        <BulletList items={acquisition.socialContentIdeas} />
      </Section>

      {/* Follow-up Sequence */}
      <Section title="Email Follow-Up Sequence" icon={RefreshCcw}>
        <div className="space-y-3">
          {retention.followUpSequence.map((email, i) => (
            <div key={i} className="flex items-start gap-4 bg-surface-800 border border-surface-500 rounded-xl p-4">
              <div className="text-center min-w-[48px]">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                  <span className="text-sm font-bold text-gold-400">D{email.day}</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-zinc-200">{email.subject}</p>
                <Badge variant="zinc" size="sm" className="mt-1">{email.purpose}</Badge>
                <p className="text-sm text-zinc-400 mt-2">{email.contentBrief}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Retention */}
      <Section title="Retention Strategy" icon={Repeat2}>
        <div className="space-y-4">
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Newsletter Strategy</p>
            <p className="text-sm text-zinc-300">{retention.newsletterStrategy}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Loyalty Program Ideas</p>
              <BulletList items={retention.loyaltyProgramIdeas} />
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">VIP Offers</p>
              <BulletList items={retention.vipOffers} color="text-amber-400" />
            </div>
          </div>
        </div>
      </Section>

      {/* Referral */}
      <Section title="Referral System" icon={GitBranch}>
        <div className="space-y-4">
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Program Overview</p>
            <p className="text-sm text-zinc-300">{referral.referralProgram}</p>
          </div>
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Incentive Structure</p>
            <p className="text-sm text-zinc-300">{referral.incentiveStructure}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Partnership Opportunities</p>
              <BulletList items={referral.partnershipOpportunities} />
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Social Sharing Triggers</p>
              <BulletList items={referral.socialSharingTriggers} color="text-blue-400" />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
