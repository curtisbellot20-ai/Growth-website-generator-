'use client';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { useBlueprintStore } from '@/lib/store/blueprint-store';
import { Card } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { GitBranch, Sparkles } from 'lucide-react';

export default function ReferralPage() {
  const { generation, projects } = useBlueprintStore();
  const blueprint = generation.blueprint ?? projects[0];
  const referral = blueprint?.referralStrategy;

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-zinc-100 flex items-center gap-3">
            <GitBranch className="w-7 h-7 text-gold-400" />
            Referral System
          </h1>
          {blueprint && <p className="text-zinc-400 mt-1">{blueprint.businessName}</p>}
        </div>

        {referral ? (
          <div className="space-y-6">
            <Card variant="gold">
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Program Overview</p>
              <p className="text-zinc-200 text-lg font-semibold">{referral.referralProgram}</p>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Incentive Structure</p>
                <p className="text-zinc-300">{referral.incentiveStructure}</p>
              </Card>
              <Card>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Ambassador Program</p>
                <p className="text-zinc-300">{referral.ambassadorProgram}</p>
              </Card>
              <Card>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Partnership Opportunities</p>
                <ul className="space-y-2">
                  {referral.partnershipOpportunities.map((p, i) => (
                    <li key={i} className="text-sm text-zinc-300 flex items-start gap-2">
                      <span className="text-gold-400">→</span> {p}
                    </li>
                  ))}
                </ul>
              </Card>
              <Card>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Social Sharing Triggers</p>
                <ul className="space-y-2">
                  {referral.socialSharingTriggers.map((t, i) => (
                    <li key={i} className="text-sm text-zinc-300 flex items-start gap-2">
                      <span className="text-blue-400">→</span> {t}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
            <Card>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Referral Mechanics</p>
              <ul className="space-y-2">
                {referral.referralMechanics.map((m, i) => (
                  <li key={i} className="text-sm text-zinc-300 flex items-start gap-2">
                    <span className="text-gold-400">→</span> {m}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        ) : (
          <Card variant="inset" padding="lg" className="text-center">
            <GitBranch className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <p className="text-zinc-400">Generate a blueprint to see your referral system</p>
            <div className="mt-4"><Link href="/generator"><Button><Sparkles className="w-4 h-4" /> Generate Blueprint</Button></Link></div>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
