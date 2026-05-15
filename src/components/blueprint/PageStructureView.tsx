'use client';
import { Card, CardHeader, CardTitle } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import type { PageStructure, ContentStrategy } from '@/lib/types';
import { Layout, Globe, BookOpen, Lightbulb, Calendar } from 'lucide-react';

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

export default function PageStructureView({
  pageStructure,
  contentStrategy,
}: {
  pageStructure: PageStructure;
  contentStrategy: ContentStrategy;
}) {
  return (
    <div className="space-y-6">
      {/* Homepage */}
      <Section title="Homepage Structure" icon={Layout}>
        <div className="space-y-3">
          {pageStructure.homepage.map((section, i) => (
            <div key={i} className="flex items-start gap-4 bg-surface-800 border border-surface-500 rounded-xl p-4">
              <div className="w-7 h-7 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-xs text-gold-400 font-bold flex-shrink-0">
                {i + 1}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-zinc-200">{section.name}</p>
                <p className="text-sm text-zinc-400 mt-0.5">{section.purpose}</p>
                <p className="text-sm text-zinc-500 mt-1 italic">{section.copyBrief}</p>
                {section.components.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {section.components.map((c, j) => (
                      <Badge key={j} variant="zinc" size="sm">{c}</Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Service Pages */}
      <Section title="Service Pages" icon={Globe}>
        <div className="space-y-3">
          {pageStructure.servicePages.map((page, i) => (
            <div key={i} className="border border-surface-500 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-zinc-200">{page.serviceName}</p>
                <Badge variant="zinc" size="sm">{page.slug}</Badge>
              </div>
              <p className="text-sm text-zinc-400 mt-1">{page.h1}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {page.targetKeywords.map((kw, j) => (
                  <Badge key={j} variant="blue" size="sm">{kw}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Blog Strategy */}
      <Section title="Blog & Content Strategy" icon={BookOpen}>
        <div className="space-y-3 mb-6">
          {pageStructure.blogStrategy.map((post, i) => (
            <div key={i} className="border border-surface-500 rounded-xl p-4">
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold text-zinc-200 flex-1">{post.title}</p>
                <Badge variant="amber" size="sm">{post.type}</Badge>
              </div>
              <p className="text-sm text-zinc-400 mt-1">{post.contentBrief}</p>
              <Badge variant="blue" size="sm" className="mt-2">{post.targetKeyword}</Badge>
            </div>
          ))}
        </div>
      </Section>

      {/* Content Calendar */}
      <Section title="12-Month Content Calendar" icon={Calendar}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {contentStrategy.contentCalendar.map((item, i) => (
            <div key={i} className="bg-surface-800 border border-surface-500 rounded-xl p-3">
              <p className="text-xs text-zinc-500 mb-1">
                Month {item.month} • <span className="capitalize">{item.format}</span>
              </p>
              <p className="text-sm font-medium text-zinc-200">{item.topic}</p>
              <Badge variant="blue" size="sm" className="mt-2">{item.targetKeyword}</Badge>
            </div>
          ))}
        </div>
      </Section>

      {/* Content Mission */}
      <Section title="Content Mission & Strategy" icon={Lightbulb}>
        <div className="space-y-4">
          <div className="bg-gold-500/5 border border-gold-500/20 rounded-xl p-4">
            <p className="text-sm font-semibold text-zinc-200 mb-1">Content Mission</p>
            <p className="text-sm text-zinc-300">{contentStrategy.contentMission}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Authority Building</p>
              <ul className="space-y-1.5">
                {contentStrategy.authorityBuilding.map((s, i) => (
                  <li key={i} className="text-sm text-zinc-300 flex items-start gap-2">
                    <span className="text-gold-400">→</span> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Video Strategy</p>
              <ul className="space-y-1.5">
                {contentStrategy.videoStrategy.map((s, i) => (
                  <li key={i} className="text-sm text-zinc-300 flex items-start gap-2">
                    <span className="text-gold-400">→</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
