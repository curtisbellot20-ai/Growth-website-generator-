'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, Suspense } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ScoringDashboard from '@/components/blueprint/ScoringDashboard';
import SEOReport from '@/components/blueprint/SEOReport';
import AtmosphereReport from '@/components/blueprint/AtmosphereReport';
import ConversionReport from '@/components/blueprint/ConversionReport';
import AcquisitionReport from '@/components/blueprint/AcquisitionReport';
import PageStructureView from '@/components/blueprint/PageStructureView';
import StrategicIntelligenceReport from '@/components/blueprint/StrategicIntelligenceReport';
import PricingCompetitorReport from '@/components/blueprint/PricingCompetitorReport';
import AdsScriptsReport from '@/components/blueprint/AdsScriptsReport';
import EmailABReport from '@/components/blueprint/EmailABReport';
import AnalyticsReputationReport from '@/components/blueprint/AnalyticsReputationReport';
import BrandJourneyReport from '@/components/blueprint/BrandJourneyReport';
import SecurityTechnicalReport from '@/components/blueprint/SecurityTechnicalReport';
import { TabList, useTabs } from '@/components/ui/Tabs';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { useBlueprintStore } from '@/lib/store/blueprint-store';
import {
  BarChart2, Search, Palette, Target, Users, Layout, Brain,
  ArrowLeft, Sparkles, Calendar, DollarSign, Globe, Megaphone,
  Mail, BarChart3, Star, Lock,
} from 'lucide-react';
import { formatDate } from '@/lib/utils/format';
import Link from 'next/link';

const TABS = [
  { id: 'scores', label: 'Scores', icon: <BarChart2 className="w-4 h-4" /> },
  { id: 'intelligence', label: 'Intelligence', icon: <Brain className="w-4 h-4" /> },
  { id: 'seo', label: 'SEO/GEO/AEO', icon: <Search className="w-4 h-4" /> },
  { id: 'atmosphere', label: 'Atmosphere', icon: <Palette className="w-4 h-4" /> },
  { id: 'conversion', label: 'Conversion', icon: <Target className="w-4 h-4" /> },
  { id: 'acquisition', label: 'Growth', icon: <Users className="w-4 h-4" /> },
  { id: 'pages', label: 'Pages', icon: <Layout className="w-4 h-4" /> },
  { id: 'pricing', label: 'Pricing', icon: <DollarSign className="w-4 h-4" /> },
  { id: 'competition', label: 'Competition', icon: <Globe className="w-4 h-4" /> },
  { id: 'ads-scripts', label: 'Ads & Scripts', icon: <Megaphone className="w-4 h-4" /> },
  { id: 'email-testing', label: 'Email & Testing', icon: <Mail className="w-4 h-4" /> },
  { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-4 h-4" /> },
  { id: 'brand-journey', label: 'Brand & Journey', icon: <Star className="w-4 h-4" /> },
  { id: 'security-tech', label: 'Security & Tech', icon: <Lock className="w-4 h-4" /> },
];

function BlueprintContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get('id');
  const { generation, getProject, extendedData } = useBlueprintStore();
  const { activeTab, onTabChange } = useTabs('scores');

  const blueprint = id ? getProject(id) : generation.blueprint;

  if (!blueprint) {
    return (
      <DashboardLayout>
        <div className="min-h-screen flex items-center justify-center p-8">
          <div className="text-center">
            <Sparkles className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-zinc-100">No Blueprint Found</h2>
            <p className="text-zinc-400 mt-2">Generate a blueprint first</p>
            <div className="mt-6">
              <Link href="/generator">
                <Button><Sparkles className="w-4 h-4" /> Generate Blueprint</Button>
              </Link>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-sm mb-3 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <h1 className="text-3xl font-black text-zinc-100">{blueprint.businessName}</h1>
            <div className="flex items-center gap-3 mt-2">
              <Badge variant="zinc">{blueprint.industry}</Badge>
              <div className="flex items-center gap-1 text-xs text-zinc-500">
                <Calendar className="w-3 h-3" />
                {formatDate(blueprint.createdAt)}
              </div>
              <Badge variant="gold">Score: {blueprint.scores.overall}/10</Badge>
            </div>
          </div>
          <Link href="/generator">
            <Button variant="outline" size="sm">
              <Sparkles className="w-3.5 h-3.5" /> New Blueprint
            </Button>
          </Link>
        </div>

        {/* Tabs */}
        <div className="mb-8 overflow-x-auto">
          <TabList tabs={TABS} activeTab={activeTab} onTabChange={onTabChange} />
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in">
          {activeTab === 'scores' && (
            <ScoringDashboard scores={blueprint.scores} />
          )}
          {activeTab === 'intelligence' && (
            <StrategicIntelligenceReport
              intel={blueprint.strategicIntelligence}
              trust={blueprint.trustStrategy}
            />
          )}
          {activeTab === 'seo' && (
            <SEOReport seo={blueprint.seoStrategy} />
          )}
          {activeTab === 'atmosphere' && (
            <AtmosphereReport
              atmosphere={blueprint.atmosphereStrategy}
              colorStrategy={blueprint.colorStrategy}
            />
          )}
          {activeTab === 'conversion' && (
            <ConversionReport
              conversion={blueprint.conversionStrategy}
              storytelling={blueprint.storytellingStrategy}
              persuasion={blueprint.persuasionStrategy}
            />
          )}
          {activeTab === 'acquisition' && (
            <AcquisitionReport
              acquisition={blueprint.acquisitionStrategy}
              retention={blueprint.retentionStrategy}
              referral={blueprint.referralStrategy}
            />
          )}
          {activeTab === 'pages' && (
            <PageStructureView
              pageStructure={blueprint.pageStructure}
              contentStrategy={blueprint.contentStrategy}
            />
          )}

          {/* Extended Modules — require extendedData from second parallel API call */}
          {activeTab === 'pricing' && (
            extendedData?.pricingStrategy && extendedData?.competitorIntelligence ? (
              <PricingCompetitorReport
                pricing={extendedData.pricingStrategy}
                competitor={extendedData.competitorIntelligence}
              />
            ) : (
              <div className="flex items-center justify-center min-h-48 text-zinc-500 text-sm">
                Pricing data not available. Generate a new blueprint to include extended modules.
              </div>
            )
          )}
          {activeTab === 'competition' && (
            extendedData?.pricingStrategy && extendedData?.competitorIntelligence ? (
              <PricingCompetitorReport
                pricing={extendedData.pricingStrategy}
                competitor={extendedData.competitorIntelligence}
              />
            ) : (
              <div className="flex items-center justify-center min-h-48 text-zinc-500 text-sm">
                Competitor intelligence not available.
              </div>
            )
          )}
          {activeTab === 'ads-scripts' && (
            extendedData?.googleAdsBlueprint && extendedData?.salesScriptSystem ? (
              <AdsScriptsReport
                ads={extendedData.googleAdsBlueprint}
                scripts={extendedData.salesScriptSystem}
              />
            ) : (
              <div className="flex items-center justify-center min-h-48 text-zinc-500 text-sm">
                Ads & scripts data not available.
              </div>
            )
          )}
          {activeTab === 'email-testing' && (
            extendedData?.emailMarketingArchitecture && extendedData?.abTestingRoadmap ? (
              <EmailABReport
                email={extendedData.emailMarketingArchitecture}
                abTesting={extendedData.abTestingRoadmap}
              />
            ) : (
              <div className="flex items-center justify-center min-h-48 text-zinc-500 text-sm">
                Email & testing data not available.
              </div>
            )
          )}
          {activeTab === 'analytics' && (
            extendedData?.analyticsSetup && extendedData?.reputationManagement ? (
              <AnalyticsReputationReport
                analytics={extendedData.analyticsSetup}
                reputation={extendedData.reputationManagement}
              />
            ) : (
              <div className="flex items-center justify-center min-h-48 text-zinc-500 text-sm">
                Analytics data not available.
              </div>
            )
          )}
          {activeTab === 'brand-journey' && (
            extendedData?.brandVoiceGuide && extendedData?.customerJourneyMap ? (
              <BrandJourneyReport
                brandVoice={extendedData.brandVoiceGuide}
                journeyMap={extendedData.customerJourneyMap}
              />
            ) : (
              <div className="flex items-center justify-center min-h-48 text-zinc-500 text-sm">
                Brand & journey data not available.
              </div>
            )
          )}
          {activeTab === 'security-tech' && (
            extendedData?.securityLegalModule && extendedData?.technicalSEOChecklist ? (
              <SecurityTechnicalReport
                security={extendedData.securityLegalModule}
                technical={extendedData.technicalSEOChecklist}
              />
            ) : (
              <div className="flex items-center justify-center min-h-48 text-zinc-500 text-sm">
                Security & technical data not available.
              </div>
            )
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default function BlueprintPage() {
  return (
    <Suspense fallback={
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-zinc-500">Loading blueprint...</div>
        </div>
      </DashboardLayout>
    }>
      <BlueprintContent />
    </Suspense>
  );
}
