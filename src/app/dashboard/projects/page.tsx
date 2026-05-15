'use client';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { useBlueprintStore } from '@/lib/store/blueprint-store';
import { Card } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';
import {
  FolderOpen, Sparkles, ArrowRight, Trash2,
  Calendar, TrendingUp, MapPin,
} from 'lucide-react';
import { formatDate, getScoreColor } from '@/lib/utils/format';

export default function ProjectsPage() {
  const { projects, deleteProject } = useBlueprintStore();

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-zinc-100 flex items-center gap-3">
              <FolderOpen className="w-7 h-7 text-gold-400" />
              Saved Projects
            </h1>
            <p className="text-zinc-400 mt-1">{projects.length} blueprint{projects.length !== 1 ? 's' : ''} saved</p>
          </div>
          <Link href="/generator">
            <Button>
              <Sparkles className="w-4 h-4" /> New Blueprint
            </Button>
          </Link>
        </div>

        {projects.length === 0 ? (
          <Card variant="inset" padding="lg" className="text-center">
            <FolderOpen className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-zinc-400">No projects yet</h3>
            <p className="text-zinc-600 mt-2">Generated blueprints are automatically saved here</p>
            <div className="mt-6">
              <Link href="/generator">
                <Button><Sparkles className="w-4 h-4" /> Generate Your First Blueprint</Button>
              </Link>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="hover:border-gold-500/30 transition-all duration-200 group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-zinc-100 text-lg">{project.businessName}</h3>
                    <p className="text-zinc-400 text-sm">{project.industry}</p>
                  </div>
                  <button
                    onClick={() => deleteProject(project.id)}
                    className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-zinc-600 hover:text-red-400 hover:bg-red-500/10 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span className="text-zinc-400">{project.intake.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span className="text-zinc-400">{formatDate(project.createdAt)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-zinc-500" />
                    <span className={`font-bold ${getScoreColor(project.scores.overall)}`}>
                      {project.scores.overall}/10
                    </span>
                    <span className="text-zinc-500 text-sm">overall score</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="zinc" size="sm">{project.intake.luxuryLevel}</Badge>
                  <Badge variant="amber" size="sm">{project.intake.desiredBrandStyle}</Badge>
                  <Badge variant="blue" size="sm">{project.intake.websiteGoal}</Badge>
                </div>

                <Link href={`/blueprint?id=${project.id}`}>
                  <Button variant="outline" size="sm" className="w-full group/btn">
                    View Blueprint
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
