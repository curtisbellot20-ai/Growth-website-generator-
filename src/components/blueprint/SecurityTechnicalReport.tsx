'use client';
import { Card, CardHeader, CardTitle } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { Shield, Code, Gauge } from 'lucide-react';

interface CoreWebVitals { lcpTarget: string; inpTarget: string; clsTarget: string; lcpFixes: string[]; inpFixes: string[]; clsFixes: string[]; }
interface SecurityLegalModule { sslRecommendation: string; securityHeaders: string[]; privacyPolicyMustHaves: string[]; termsOfServiceElements: string[]; cookieConsentStrategy: string; gdprChecklist: string[]; industrySpecificCompliance: string[]; trustBadgesRecommended: string[]; accessibilityStandard: string; }
interface TechnicalSEOChecklist { coreWebVitals: CoreWebVitals; speedOptimizations: string[]; schemaMarkupPlan: string[]; crawlabilityChecklist: string[]; mobileChecklist: string[]; accessibilityChecklist: string[]; imageOptimization: string[]; priorityFixes: string[]; estimatedImpact: string; }

function Section({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Icon className="w-5 h-5 text-gold-400" />{title}</CardTitle></CardHeader>{children}</Card>
  );
}
function CheckList({ items, color = 'text-zinc-500' }: { items: string[]; color?: string }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <div className={`w-5 h-5 rounded border flex-shrink-0 mt-0.5 flex items-center justify-center ${color === 'text-gold-400' ? 'border-gold-500/40 bg-gold-500/10' : 'border-zinc-600'}`}>
            {color === 'text-gold-400' && <span className="text-gold-400 text-xs">✓</span>}
          </div>
          <span className="text-sm text-zinc-300">{item}</span>
        </li>
      ))}
    </ul>
  );
}
function Bullets({ items, color = 'text-gold-400' }: { items: string[]; color?: string }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-zinc-300"><span className={`${color} mt-0.5 flex-shrink-0`}>→</span>{item}</li>
      ))}
    </ul>
  );
}

export default function SecurityTechnicalReport({ security, technical }: { security: SecurityLegalModule; technical: TechnicalSEOChecklist }) {
  return (
    <div className="space-y-6">
      {/* Security Stats */}
      <Card variant="gold">
        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Security & Trust Impact (ConversionXL Research)</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { stat: '+15%', label: 'Conversion rate increase from security badges and certifications' },
            { stat: 'Required', label: 'SSL/HTTPS — Google flags non-HTTPS sites. It\'s a ticket to entry, not a differentiator' },
            { stat: 'WCAG 2.2', label: 'Accessibility standard that also improves Google rankings via Core Web Vitals alignment' },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-surface-800 rounded-xl p-4 border border-surface-500 text-center">
              <p className="text-2xl font-black text-gold-400">{stat}</p>
              <p className="text-xs text-zinc-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Core Web Vitals */}
      <Section title="Core Web Vitals (Google Ranking Signals)" icon={Gauge}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { label: 'LCP', desc: 'Largest Contentful Paint', target: technical.coreWebVitals.lcpTarget, note: 'Must load in < 2.5s', fixes: technical.coreWebVitals.lcpFixes, color: 'text-blue-400', border: 'border-blue-500/20' },
            { label: 'INP', desc: 'Interaction to Next Paint', target: technical.coreWebVitals.inpTarget, note: 'Must be < 200ms', fixes: technical.coreWebVitals.inpFixes, color: 'text-emerald-400', border: 'border-emerald-500/20' },
            { label: 'CLS', desc: 'Cumulative Layout Shift', target: technical.coreWebVitals.clsTarget, note: 'Must be < 0.1', fixes: technical.coreWebVitals.clsFixes, color: 'text-amber-400', border: 'border-amber-500/20' },
          ].map(({ label, desc, target, note, fixes, color, border }) => (
            <div key={label} className={`rounded-xl p-4 border bg-surface-800 ${border}`}>
              <div className="flex items-center justify-between mb-1">
                <p className={`font-black text-2xl ${color}`}>{label}</p>
                <Badge variant="zinc" size="sm">{target}</Badge>
              </div>
              <p className="text-sm text-zinc-300">{desc}</p>
              <p className="text-xs text-zinc-500 mb-3">{note}</p>
              <ul className="space-y-1">
                {fixes.map((fix, i) => <li key={i} className="text-xs text-zinc-400 flex items-start gap-1"><span className={color}>→</span>{fix}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Priority Fixes</p>
            <Bullets items={technical.priorityFixes} color="text-gold-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Speed Optimizations</p>
            <Bullets items={technical.speedOptimizations} />
          </div>
        </div>
        <div className="mt-4 bg-gold-500/5 border border-gold-500/20 rounded-xl p-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Estimated Impact</p>
          <p className="text-zinc-200">{technical.estimatedImpact}</p>
        </div>
      </Section>

      {/* Technical Checklists */}
      <Section title="Technical SEO Checklists" icon={Code}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Schema Markup Plan</p>
            <Bullets items={technical.schemaMarkupPlan} />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Crawlability</p>
            <CheckList items={technical.crawlabilityChecklist} />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Mobile Optimization</p>
            <CheckList items={technical.mobileChecklist} />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Image Optimization</p>
            <Bullets items={technical.imageOptimization} color="text-blue-400" />
          </div>
          <div className="md:col-span-2">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Accessibility Checklist (WCAG 2.2)</p>
            <CheckList items={technical.accessibilityChecklist} color="text-gold-400" />
          </div>
        </div>
      </Section>

      {/* Security & Legal */}
      <Section title="Security & Legal Compliance" icon={Shield}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">SSL Recommendation</p>
            <p className="text-sm text-zinc-200">{security.sslRecommendation}</p>
          </div>
          <div className="bg-surface-800 rounded-xl p-4 border border-surface-500">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Cookie Consent Strategy</p>
            <p className="text-sm text-zinc-200">{security.cookieConsentStrategy}</p>
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Security Headers to Add</p>
            <CheckList items={security.securityHeaders} color="text-gold-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Industry Compliance</p>
            <Bullets items={security.industrySpecificCompliance} color="text-amber-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">GDPR Checklist</p>
            <CheckList items={security.gdprChecklist} />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Trust Badges to Display</p>
            <div className="flex flex-wrap gap-2">
              {security.trustBadgesRecommended.map((b, i) => <Badge key={i} variant="green">{b}</Badge>)}
            </div>
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Privacy Policy Must-Haves</p>
            <CheckList items={security.privacyPolicyMustHaves} />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Terms of Service Elements</p>
            <CheckList items={security.termsOfServiceElements} />
          </div>
        </div>
      </Section>
    </div>
  );
}
