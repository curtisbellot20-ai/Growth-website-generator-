'use client';
import Link from 'next/link';
import { useBlueprintStore } from '@/lib/store/blueprint-store';
import {
  Sparkles, ArrowRight, Search, Palette, Target, Users,
  RefreshCcw, GitBranch, TrendingUp, Star, Clock, Trash2,
  BarChart2, Globe, Brain, Shield,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { formatDate, getScoreColor } from '@/lib/utils/format';

const features = [
  { icon: Brain, title: 'Strategic Intelligence', desc: 'Customer psychology, emotional triggers, and industry success patterns' },
  { icon: Palette, title: 'Atmosphere System', desc: 'Color science, typography, emotional flow, and visual density' },
  { icon: Search, title: 'SEO/GEO/AEO Engine', desc: 'Google, AI search, voice search, and local map domination' },
  { icon: Target, title: 'Conversion Engine', desc: 'Hero CTAs, objection handlers, trust bars, and section flow' },
  { icon: Shield, title: 'Trust Architecture', desc: 'Testimonial placement, guarantees, and authority signals' },
  { icon: Users, title: 'Acquisition System', desc: 'Lead magnets, email sequences, and consultation funnels' },
  { icon: RefreshCcw, title: 'Retention Engine', desc: 'VIP offers, reactivation, loyalty programs, and follow-ups' },
  { icon: GitBranch, title: 'Referral Strategy', desc: 'Ambassador programs, partner opportunities, and incentives' },
  { icon: Globe, title: 'Page Structure', desc: 'Full sitemap, service pages, location pages, and blog strategy' },
  { icon: BarChart2, title: '16-Dimension Score', desc: 'Score every aspect of your website with actionable improvements' },
];

export default function HomePage() {
  const { projects, deleteProject } = useBlueprintStore();

  return (
    <DashboardLayout>
      <div className="p-8 max-w-7xl mx-auto">
        {/* Hero */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3 h-3" />
            Powered by Claude AI
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-100 leading-tight">
            Turn Any Business Into a
            <span className="text-gradient-gold block">Growth Machine</span>
          </h1>
          <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
            Generate a complete strategic website blueprint in minutes. Powered by 10 expert AI personas — luxury brand strategist, CRO expert, behavioral psychologist, SEO master, and more.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <Link href="/generator">
              <Button size="xl" className="group">
                <Sparkles className="w-5 h-5" />
                Generate Blueprint
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            {projects.length > 0 && (
              <Link href="/dashboard/projects">
                <Button size="xl" variant="outline">
                  View {projects.length} Saved {projects.length === 1 ? 'Project' : 'Projects'}
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-zinc-100 mb-6">What Gets Generated</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {features.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="hover:border-gold-500/30 transition-all duration-200 group">
                <div className="w-9 h-9 rounded-lg bg-gold-500/10 flex items-center justify-center mb-3 group-hover:bg-gold-500/20 transition-colors">
                  <Icon className="w-4 h-4 text-gold-400" />
                </div>
                <p className="font-semibold text-zinc-200 text-sm">{title}</p>
                <p className="text-xs text-zinc-500 mt-1">{desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Projects */}
        {projects.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-zinc-100">Recent Projects</h2>
              <Link href="/dashboard/projects">
                <Button variant="ghost" size="sm">
                  View All <ArrowRight className="w-3 h-3" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.slice(0, 6).map((project) => (
                <Card key={project.id} className="hover:border-gold-500/30 transition-all duration-200 group">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-bold text-zinc-100">{project.businessName}</p>
                      <p className="text-sm text-zinc-400 mt-0.5">{project.industry}</p>
                    </div>
                    <button
                      onClick={() => deleteProject(project.id)}
                      className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-zinc-600 hover:text-red-400 hover:bg-red-500/10 transition-all"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-zinc-500" />
                      <span className={`text-sm font-bold ${getScoreColor(project.scores.overall)}`}>
                        {project.scores.overall}/10
                      </span>
                    </div>
                    <Badge variant="zinc" size="sm">{project.intake.industry}</Badge>
                    <div className="flex items-center gap-1 ml-auto">
                      <Clock className="w-3 h-3 text-zinc-600" />
                      <span className="text-xs text-zinc-600">{formatDate(project.createdAt)}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href={`/blueprint?id=${project.id}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        View Blueprint <ArrowRight className="w-3 h-3" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {projects.length === 0 && (
          <Card variant="inset" padding="lg" className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-gold-400" />
            </div>
            <h3 className="text-xl font-bold text-zinc-200">Your first blueprint awaits</h3>
            <p className="text-zinc-400 mt-2 max-w-md mx-auto">
              Complete the 5-step intake form and let AI generate your complete strategic website blueprint in under 2 minutes.
            </p>
            <div className="mt-6">
              <Link href="/generator">
                <Button size="lg">
                  <Sparkles className="w-4 h-4" />
                  Start Generating
                </Button>
              </Link>
            </div>
          </Card>
        )}

        {/* Stats Footer */}
        <div className="mt-12 pt-8 border-t border-surface-500 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Modules Generated', value: '16' },
            { label: 'Growth Dimensions Scored', value: '16' },
            { label: 'Expert Personas', value: '10' },
            { label: 'Blueprints Created', value: projects.length.toString() },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-3xl font-black text-gradient-gold">{value}</p>
              <p className="text-sm text-zinc-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
