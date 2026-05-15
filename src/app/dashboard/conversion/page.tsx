'use client';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ConversionReport from '@/components/blueprint/ConversionReport';
import { useBlueprintStore } from '@/lib/store/blueprint-store';
import { Card } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { Target, Sparkles } from 'lucide-react';

export default function ConversionPage() {
  const { generation, projects } = useBlueprintStore();
  const blueprint = generation.blueprint ?? projects[0];

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-zinc-100 flex items-center gap-3">
              <Target className="w-7 h-7 text-gold-400" />
              Conversion & Storytelling
            </h1>
            {blueprint && <p className="text-zinc-400 mt-1">{blueprint.businessName}</p>}
          </div>
        </div>
        {blueprint ? (
          <ConversionReport
            conversion={blueprint.conversionStrategy}
            storytelling={blueprint.storytellingStrategy}
            persuasion={blueprint.persuasionStrategy}
          />
        ) : (
          <Card variant="inset" padding="lg" className="text-center">
            <Target className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <p className="text-zinc-400">Generate a blueprint to see your conversion strategy</p>
            <div className="mt-4"><Link href="/generator"><Button><Sparkles className="w-4 h-4" /> Generate Blueprint</Button></Link></div>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
