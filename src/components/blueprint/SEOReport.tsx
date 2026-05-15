'use client';
import { Card, CardHeader, CardTitle } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import type { SEOStrategy } from '@/lib/types';
import { Search, MapPin, FileText, Mic, Bot, Tag } from 'lucide-react';

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

function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <Badge key={i} variant="zinc">{item}</Badge>
      ))}
    </div>
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

export default function SEOReport({ seo }: { seo: SEOStrategy }) {
  return (
    <div className="space-y-6">
      {/* Keywords */}
      <Section title="Primary Keywords" icon={Tag}>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Primary</p>
            <TagList items={seo.primaryKeywords} />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Secondary</p>
            <TagList items={seo.secondaryKeywords} />
          </div>
        </div>
      </Section>

      {/* Page Structure */}
      <Section title="Page Structure" icon={FileText}>
        <div className="space-y-4">
          {seo.pageStructure.map((page, i) => (
            <div key={i} className="border border-surface-500 rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-zinc-200">{page.pageName}</span>
                <Badge variant="zinc" size="sm">{page.slug}</Badge>
              </div>
              <div className="space-y-1">
                <p className="text-sm"><span className="text-zinc-500">H1:</span> <span className="text-zinc-300">{page.h1}</span></p>
                <p className="text-sm"><span className="text-zinc-500">Title:</span> <span className="text-zinc-300">{page.metaTitle}</span></p>
                <p className="text-sm"><span className="text-zinc-500">Description:</span> <span className="text-zinc-400">{page.metaDescription}</span></p>
                {page.targetKeywords.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {page.targetKeywords.map((kw, j) => (
                      <Badge key={j} variant="blue" size="sm">{kw}</Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Local SEO */}
      <Section title="Local SEO Strategy" icon={MapPin}>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Target Cities</p>
            <TagList items={seo.localSEOStrategy.targetCities} />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Google Business Optimization</p>
            <BulletList items={seo.localSEOStrategy.googleBusinessOptimization} />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Local Content Strategy</p>
            <BulletList items={seo.localSEOStrategy.localContentStrategy} />
          </div>
          {seo.localSEOStrategy.locationPages.length > 0 && (
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Location Pages</p>
              <div className="space-y-3">
                {seo.localSEOStrategy.locationPages.map((page, i) => (
                  <div key={i} className="border border-surface-500 rounded-lg p-3">
                    <p className="font-medium text-zinc-200">{page.city}</p>
                    <p className="text-sm text-zinc-400 mt-1">{page.h1}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {page.localKeywords.map((kw, j) => (
                        <Badge key={j} variant="green" size="sm">{kw}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* Voice Search */}
      <Section title="Voice Search Questions" icon={Mic}>
        <BulletList items={seo.voiceSearchQuestions} />
      </Section>

      {/* AI Search */}
      <Section title="AI Search Optimization (GEO / AEO)" icon={Bot}>
        <BulletList items={seo.aiSearchOptimization} />
      </Section>

      {/* Content Clusters */}
      <Section title="Content Clusters" icon={Search}>
        <div className="space-y-4">
          {seo.contentClusters.map((cluster, i) => (
            <div key={i} className="border border-surface-500 rounded-lg p-4">
              <p className="font-semibold text-zinc-200 mb-2">{cluster.pillarTopic}</p>
              <div className="flex flex-wrap gap-1">
                {cluster.supportingTopics.map((t, j) => (
                  <Badge key={j} variant="amber" size="sm">{t}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
