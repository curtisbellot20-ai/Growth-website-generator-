export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended: boolean;
  ctaText: string;
}

export interface PricingStrategy {
  anchorPrice: string;
  decoyTier: string;
  tieredPackages: PricingTier[];
  pricingPageStructure: string;
  psychologicalTactics: string[];
  valueFraming: string;
  guaranteeStrategy: string;
  paymentOptions: string[];
  priceObjectionHandlers: string[];
}

export interface Competitor {
  name: string;
  strengths: string[];
  weaknesses: string[];
  contentGaps: string[];
  opportunitiesToExploit: string[];
}

export interface CompetitorIntelligence {
  topCompetitors: Competitor[];
  keywordGaps: string[];
  contentGaps: string[];
  positioningGaps: string[];
  technicalAdvantages: string[];
  uniquePositioning: string;
  differentiators: string[];
  quickWins: string[];
  mediumTermMoves: string[];
  longTermStrategy: string[];
}

export interface AdGroup {
  name: string;
  keywords: string[];
  matchTypes: string[];
}

export interface AdCampaign {
  name: string;
  type: string;
  objective: string;
  adGroups: AdGroup[];
}

export interface AdCopyVariation {
  headline1: string;
  headline2: string;
  headline3: string;
  description1: string;
  description2: string;
  calloutExtensions: string[];
}

export interface GoogleAdsBlueprint {
  campaignStructure: AdCampaign[];
  adCopyVariations: AdCopyVariation[];
  audienceTargeting: string[];
  budgetRecommendation: string;
  biddingStrategy: string;
  negativeKeywords: string[];
  extensionStrategy: string[];
  qualityScoreTips: string[];
  remarketingStrategy: string;
  landingPageTips: string[];
}

export interface SpinQuestions {
  situation: string[];
  problem: string[];
  implication: string[];
  needPayoff: string[];
}

export interface PhoneScript {
  opener: string;
  rapportBuilder: string;
  discoveryTransition: string;
  voicemail: string;
}

export interface ObjectionScript {
  objection: string;
  technique: string;
  script: string;
}

export interface SalesScriptSystem {
  spinQuestions: SpinQuestions;
  phoneScript: PhoneScript;
  dmScript: string;
  consultationOpener: string;
  consultationDiscoveryQuestions: string[];
  consultationPresentationFramework: string;
  closingTechniques: string[];
  objectionScripts: ObjectionScript[];
  followUpTexts: string[];
}

export interface EmailDetail {
  sequence: number;
  timing: string;
  subject: string;
  preheader: string;
  purpose: string;
  contentBrief: string;
  cta: string;
}

export interface EmailKPIs {
  openRateTarget: string;
  clickRateTarget: string;
  conversionRateTarget: string;
  revenuePerRecipientTarget: string;
}

export interface EmailMarketingArchitecture {
  welcomeSeries: EmailDetail[];
  winBackSeries: EmailDetail[];
  promotionalStrategy: string;
  segmentationStrategy: string;
  personalizationApproach: string;
  subjectLineBestPractices: string[];
  frequencyRecommendation: string;
  listGrowthTactics: string[];
  deliverabilityChecklist: string[];
  kpiTargets: EmailKPIs;
}

export interface ABTest {
  priority: number;
  element: string;
  hypothesis: string;
  controlVariant: string;
  testVariant: string;
  successMetric: string;
  estimatedImpact: string;
  minimumSampleSize: string;
  testDuration: string;
}

export interface ABTestingRoadmap {
  prioritizedTests: ABTest[];
  testingCalendar: string;
  statisticalSignificanceTarget: string;
  toolRecommendations: string[];
  winnerImplementationProcess: string;
  hypothesisFramework: string;
  avoidMistakes: string[];
}

export interface GA4Config {
  eventsToTrack: string[];
  conversionsToMark: string[];
  audiencesToCreate: string[];
  reportsToEnable: string[];
}

export interface GTMConfig {
  tagsToInstall: string[];
  triggersToCreate: string[];
  variablesToCreate: string[];
}

export interface AnalyticsSetup {
  ga4Config: GA4Config;
  gtmConfig: GTMConfig;
  metaPixelEvents: string[];
  heatmapStrategy: string;
  keyConversionGoals: string[];
  dashboardKPIs: string[];
  reportingCadence: string;
  criticalMistakesToAvoid: string[];
}

export interface ReviewResponseTemplate {
  type: 'five-star' | 'four-star' | 'negative' | 'neutral';
  template: string;
}

export interface ReputationManagement {
  reviewGenerationScript: string;
  requestTiming: string;
  platformPriority: string[];
  responseTemplates: ReviewResponseTemplate[];
  negativeReviewProtocol: string;
  monitoringPlan: string;
  aiSearchReputationStrategy: string;
  reputationKPIs: string[];
  automationTools: string[];
}

export interface PersonalityTrait {
  trait: string;
  description: string;
  inPractice: string;
  rightExample: string;
  wrongExample: string;
}

export interface VoiceDimension {
  dimension: string;
  percentage: string;
  description: string;
}

export interface BrandVoiceGuide {
  personalityTraits: PersonalityTrait[];
  toneOfVoice: string;
  voiceDimensions: VoiceDimension[];
  useWords: string[];
  avoidWords: string[];
  brandPhrases: string[];
  messagingPillars: string[];
  dosList: string[];
  dontsList: string[];
  taglines: string[];
}

export interface JourneyStage {
  stage: string;
  customerGoal: string;
  emotions: string[];
  touchpoints: string[];
  painPoints: string[];
  opportunities: string[];
  metrics: string[];
}

export interface CustomerJourneyMap {
  stages: JourneyStage[];
  criticalMoments: string[];
  dropoffRisks: string[];
  optimizationOpportunities: string[];
  emotionalLow: string;
  emotionalHigh: string;
}

export interface CoreWebVitals {
  lcpTarget: string;
  inpTarget: string;
  clsTarget: string;
  lcpFixes: string[];
  inpFixes: string[];
  clsFixes: string[];
}

export interface SecurityLegalModule {
  sslRecommendation: string;
  securityHeaders: string[];
  privacyPolicyMustHaves: string[];
  termsOfServiceElements: string[];
  cookieConsentStrategy: string;
  gdprChecklist: string[];
  industrySpecificCompliance: string[];
  trustBadgesRecommended: string[];
  accessibilityStandard: string;
}

export interface TechnicalSEOChecklist {
  coreWebVitals: CoreWebVitals;
  speedOptimizations: string[];
  schemaMarkupPlan: string[];
  crawlabilityChecklist: string[];
  mobileChecklist: string[];
  accessibilityChecklist: string[];
  imageOptimization: string[];
  priorityFixes: string[];
  estimatedImpact: string;
}

export interface ExtendedWebsiteBlueprint {
  id?: string;
  businessName?: string;
  industry?: string;
  createdAt?: string;
  intake?: Record<string, unknown>;
  pricingStrategy?: PricingStrategy;
  competitorIntelligence?: CompetitorIntelligence;
  googleAdsBlueprint?: GoogleAdsBlueprint;
  salesScriptSystem?: SalesScriptSystem;
  emailMarketingArchitecture?: EmailMarketingArchitecture;
  abTestingRoadmap?: ABTestingRoadmap;
  analyticsSetup?: AnalyticsSetup;
  reputationManagement?: ReputationManagement;
  brandVoiceGuide?: BrandVoiceGuide;
  customerJourneyMap?: CustomerJourneyMap;
  securityLegalModule?: SecurityLegalModule;
  technicalSEOChecklist?: TechnicalSEOChecklist;
}
