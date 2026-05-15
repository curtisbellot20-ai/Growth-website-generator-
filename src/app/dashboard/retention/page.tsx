'use client';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { useBlueprintStore } from '@/lib/store/blueprint-store';
import { Card } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';
import { RefreshCcw, Sparkles, Mail } from 'lucide-react';

export default function RetentionPage() {
  const { generation, projects } = useBlueprintStore();
  const blueprint = generation.blueprint ?? projects[0];
  const retention = blueprint?.retentionStrategy;

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-zinc-100 flex items-center gap-3">
              <RefreshCcw className="w-7 h-7 text-gold-400" />
              Retention Strategy
            </h1>
            {blueprint && <p className="text-zinc-400 mt-1">{blueprint.businessName}</p>}
          </div>
        </div>

        {retention ? (
          <div className="space-y-6">
            <Card>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Newsletter Strategy</p>
              <p className="text-zinc-200">{retention.newsletterStrategy}</p>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Loyalty Program Ideas</p>
                <ul className="space-y-2">
                  {retention.loyaltyProgramIdeas.map((idea, i) => (
                    <li key={i} className="text-sm text-zinc-300 flex items-start gap-2">
                      <span className="text-gold-400">→</span> {idea}
                    </li>
                  ))}
                </ul>
              </Card>
              <Card>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">VIP Offers</p>
                <ul className="space-y-2">
                  {retention.vipOffers.map((offer, i) => (
                    <li key={i} className="text-sm text-zinc-300 flex items-start gap-2">
                      <span className="text-amber-400">★</span> {offer}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <Card>
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-5 h-5 text-gold-400" />
                <p className="font-semibold text-zinc-100">Follow-Up Email Sequence</p>
              </div>
              <div className="space-y-3">
                {retention.followUpSequence.map((email, i) => (
                  <div key={i} className="flex items-start gap-4 bg-surface-800 border border-surface-500 rounded-xl p-4">
                    <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-gold-400">D{email.day}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-200">{email.subject}</p>
                      <Badge variant="zinc" size="sm" className="mt-1">{email.purpose}</Badge>
                      <p className="text-sm text-zinc-400 mt-2">{email.contentBrief}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Review Request Flow</p>
              <p className="text-zinc-300">{retention.reviewRequestFlow}</p>
            </Card>
          </div>
        ) : (
          <Card variant="inset" padding="lg" className="text-center">
            <RefreshCcw className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <p className="text-zinc-400">Generate a blueprint to see your retention strategy</p>
            <div className="mt-4"><Link href="/generator"><Button><Sparkles className="w-4 h-4" /> Generate Blueprint</Button></Link></div>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
