'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StepIndicator from '@/components/generator/StepIndicator';
import Step1Business from '@/components/generator/Step1Business';
import Step2Customer from '@/components/generator/Step2Customer';
import Step3Offers from '@/components/generator/Step3Offers';
import Step4Brand from '@/components/generator/Step4Brand';
import Step5Goals from '@/components/generator/Step5Goals';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { useBlueprintStore } from '@/lib/store/blueprint-store';
import type { BusinessIntakeForm } from '@/lib/types';
import { ArrowLeft, ArrowRight, Sparkles, Zap } from 'lucide-react';

const GENERATION_STEPS = [
  'Analyzing your business profile...',
  'Studying your ideal customer psychology...',
  'Identifying industry success patterns...',
  'Crafting your emotional atmosphere...',
  'Building SEO & local search strategy...',
  'Engineering conversion architecture...',
  'Designing trust architecture...',
  'Crafting storytelling strategy...',
  'Building acquisition & retention systems...',
  'Calculating your 16-dimension growth score...',
  'Finalizing your growth blueprint...',
];

export default function GeneratorPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [generating, setGenerating] = useState(false);
  const [genStep, setGenStep] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const { setBlueprint, saveProject, setExtendedData } = useBlueprintStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<BusinessIntakeForm>({
    defaultValues: {
      luxuryLevel: 'premium',
      desiredBrandStyle: 'elegant',
      ctaPreference: 'consultation',
      websiteGoal: 'leads',
    },
  });

  const STEP_FIELDS: (keyof BusinessIntakeForm)[][] = [
    ['businessName', 'industry', 'location'],
    ['targetCustomer'],
    ['mainOffer'],
    ['desiredBrandStyle', 'luxuryLevel'],
    ['websiteGoal', 'ctaPreference'],
  ];

  const handleNext = async () => {
    const valid = await trigger(STEP_FIELDS[currentStep - 1]);
    if (valid) setCurrentStep((s) => Math.min(5, s + 1));
  };

  const handleBack = () => setCurrentStep((s) => Math.max(1, s - 1));

  const onSubmit = async (data: BusinessIntakeForm) => {
    setGenerating(true);
    setError(null);
    setGenStep(0);

    // Animate generation steps
    const interval = setInterval(() => {
      setGenStep((s) => {
        if (s < GENERATION_STEPS.length - 1) return s + 1;
        clearInterval(interval);
        return s;
      });
    }, 4000);

    try {
      // Run both API calls in parallel for efficiency
      const [coreRes, extendedRes] = await Promise.all([
        fetch('/api/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }),
        fetch('/api/generate-extended', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }),
      ]);

      if (!coreRes.ok) {
        const err = await coreRes.json();
        throw new Error(err.error || 'Generation failed');
      }

      const blueprint = await coreRes.json();
      clearInterval(interval);

      setBlueprint(blueprint);
      saveProject(blueprint);

      if (extendedRes.ok) {
        const extended = await extendedRes.json();
        setExtendedData(extended);
      }

      router.push(`/blueprint?id=${blueprint.id}`);
    } catch (err) {
      clearInterval(interval);
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setGenerating(false);
    }
  };

  if (generating) {
    return (
      <DashboardLayout>
        <div className="min-h-screen flex items-center justify-center p-8">
          <div className="max-w-md w-full text-center">
            <div className="w-20 h-20 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-gold-400 animate-pulse" />
            </div>
            <h2 className="text-2xl font-black text-zinc-100 mb-2">Generating Your Blueprint</h2>
            <p className="text-zinc-400 mb-8">Our 10 AI experts are working simultaneously...</p>

            <div className="space-y-2 mb-8">
              {GENERATION_STEPS.map((step, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-500 ${
                    i === genStep
                      ? 'bg-gold-500/10 border border-gold-500/20 text-zinc-200'
                      : i < genStep
                      ? 'text-zinc-600'
                      : 'text-zinc-700'
                  }`}
                >
                  {i < genStep ? (
                    <span className="text-gold-400 text-xs">✓</span>
                  ) : i === genStep ? (
                    <Zap className="w-3 h-3 text-gold-400 animate-pulse" />
                  ) : (
                    <span className="w-3 h-3 rounded-full bg-surface-500" />
                  )}
                  <span className={`text-sm ${i === genStep ? 'font-medium' : ''}`}>{step}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-zinc-600">This usually takes 30–60 seconds</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-black text-zinc-100">Generate Your Blueprint</h1>
            <p className="text-zinc-400 mt-1">Complete all 5 steps for the most strategic output</p>
          </div>

          {/* Step Indicator */}
          <div className="mb-8">
            <StepIndicator currentStep={currentStep} />
          </div>

          {/* Error */}
          {error && (
            <Card variant="inset" className="mb-6 border-red-500/30">
              <p className="text-red-400 text-sm">⚠️ {error}</p>
            </Card>
          )}

          {/* Step Content */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-8">
              {currentStep === 1 && <Step1Business register={register} errors={errors} />}
              {currentStep === 2 && <Step2Customer register={register} errors={errors} />}
              {currentStep === 3 && <Step3Offers register={register} errors={errors} />}
              {currentStep === 4 && <Step4Brand register={register} errors={errors} />}
              {currentStep === 5 && <Step5Goals register={register} errors={errors} />}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button
                type="button"
                variant="ghost"
                onClick={handleBack}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </Button>

              {currentStep < 5 ? (
                <Button type="button" onClick={handleNext} size="lg">
                  Continue <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button type="submit" size="lg" className="group">
                  <Sparkles className="w-5 h-5" />
                  Generate Blueprint
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
