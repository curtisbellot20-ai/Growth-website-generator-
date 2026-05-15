'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sparkles, LayoutDashboard, Search, Palette, Target,
  Users, RefreshCcw, GitBranch, FolderOpen, ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const navItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/generator', label: 'New Blueprint', icon: Sparkles, highlight: true },
  { href: '/dashboard/seo-report', label: 'SEO / GEO / AEO', icon: Search },
  { href: '/dashboard/atmosphere', label: 'Atmosphere', icon: Palette },
  { href: '/dashboard/conversion', label: 'Conversion', icon: Target },
  { href: '/dashboard/acquisition', label: 'Acquisition', icon: Users },
  { href: '/dashboard/retention', label: 'Retention', icon: RefreshCcw },
  { href: '/dashboard/referral', label: 'Referral', icon: GitBranch },
  { href: '/dashboard/projects', label: 'Saved Projects', icon: FolderOpen },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-surface-800 border-r border-surface-500 flex flex-col flex-shrink-0">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-surface-500">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gold-500 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-surface-950" />
          </div>
          <div>
            <div className="text-sm font-bold text-zinc-100 leading-tight">Growth</div>
            <div className="text-xs text-zinc-500">Website Generator</div>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map(({ href, label, icon: Icon, highlight }) => {
          const active = pathname === href || (href !== '/' && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150',
                active
                  ? 'bg-gold-500/10 text-gold-400 border border-gold-500/20'
                  : highlight
                  ? 'bg-gold-500 text-surface-950 hover:bg-gold-400 shadow-md shadow-gold-500/20'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-surface-600'
              )}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="flex-1">{label}</span>
              {active && !highlight && (
                <ChevronRight className="w-3 h-3 text-gold-400" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-surface-500">
        <p className="text-xs text-zinc-600">Powered by Claude AI</p>
        <p className="text-xs text-zinc-700 mt-0.5">v1.0.0 • MVP</p>
      </div>
    </aside>
  );
}
