'use client';
import DashboardLayout from '@/components/layout/DashboardLayout';
import SEOReport from '@/components/blueprint/SEOReport';
import { useBlueprintStore } from '@/lib/store/blueprint-store';
import { Card } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { Search, Sparkles } from 'lucide-react';

export default function SEOReportPage() {
  const { generation, projects } = useBlueprintStore();
  const blueprint = generation.blueprint ?? projects[0];

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-zinc-100 flex items-center gap-3">
              <Search className="w-7 h-7 text-gold-400" />
              SEO / GEO / AEO Report
            </h1>
            {blueprint && (
              <p className="text-zinc-400 mt-1">{blueprint.businessName} — {blueprint.industry}</p>
            )}
          </div>
          {!blueprint && (
            <Link href="/generator"><Button><Sparkles className="w-4 h-4" /> Generate Blueprint</Button></Link>
          )}
        </div>
        {blueprint ? (
          <SEOReport seo={blueprint.seoStrategy} />
        ) : (
          <Card variant="inset" padding="lg" className="text-center">
            <Search className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <p className="text-zinc-400">Generate a blueprint to see your SEO strategy</p>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
