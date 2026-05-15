// ─── Business Intake ────────────────────────────────────────────────────────

export type AtmosphereType =
  | 'luxury' | 'romantic' | 'corporate' | 'cinematic' | 'urban-premium'
  | 'family-friendly' | 'high-energy' | 'wellness' | 'minimal' | 'elegant'
  | 'futuristic' | 'trustworthy' | 'exclusive' | 'creative' | 'performance-driven'
  | 'relaxing' | 'nightlife' | 'high-status';

export type LuxuryLevel = 'budget' | 'mid-range' | 'premium' | 'luxury' | 'ultra-luxury';
export type CTAType = 'call' | 'form' | 'booking' | 'quote' | 'consultation' | 'shop';
export type WebsiteGoal = 'leads' | 'sales' | 'bookings' | 'awareness' | 'authority' | 'local-seo';

export interface BusinessIntakeForm {
  businessName: string;
  industry: string;
  location: string;
  serviceArea: string;
  businessPhone: string;
  businessEmail: string;
  currentWebsiteUrl?: string;
  targetCustomer: string;
  customerPainPoints: string;
  customerDesires: string;
  customerFears: string;
  customerObjections: string;
  mainOffer: string;
  secondaryOffers: string;
  services: string;
  locationsServed: string;
  desiredAtmosphere: string;
  desiredBrandStyle: AtmosphereType;
  desiredEmotionalTone: string;
  luxuryLevel: LuxuryLevel;
  brandColors?: string;
  competitors?: string;
  socialLinks?: string;
  googleBusinessProfile?: string;
  ctaPreference: CTAType;
  websiteGoal: WebsiteGoal;
  testimonials?: string;
  reviews?: string;
  logoPlaceholder?: boolean;
  imagePlaceholder?: boolean;
}

// ─── Blueprint Sections ───────────────────────────────────────────────────────

export interface StrategicIntelligence {
  customerPsychology: string;
  emotionalBuyingTriggers: string[];
  trustSignals: string[];
  commonObjections: string[];
  highestConvertingOffers: string[];
  retentionDrivers: string[];
  referralOpportunities: string[];
  premiumPositioningCues: string[];
  industrySuccessPatterns: string[];
  competitiveAdvantages: string[];
}

export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  cta: string;
  rationale: string;
}

export interface Typography {
  headingFont: string;
  bodyFont: string;
  headingWeight: string;
  bodySize: string;
  lineHeight: string;
  letterSpacing: string;
  rationale: string;
}

export interface AtmosphereStrategy {
  primaryAtmosphere: AtmosphereType;
  colorPalette: ColorPalette;
  typography: Typography;
  spacing: string;
  imagery: string[];
  layoutPacing: string;
  ctaLanguage: string;
  copywritingTone: string;
  animationStyle: string;
  emotionalFlow: string[];
  visualDensity: string;
  sectionOrder: string[];
  storytellingStyle: string;
}

export interface LocationPage {
  city: string;
  h1: string;
  contentBrief: string;
  localKeywords: string[];
}

export interface LocalSEOStrategy {
  primaryCity: string;
  targetCities: string[];
  locationPages: LocationPage[];
  googleBusinessOptimization: string[];
  localSchemaData: string;
  napConsistency: string[];
  localCitations: string[];
  localContentStrategy: string[];
}

export interface SchemaMarkup {
  localBusiness: string;
  services: string[];
  faq: string;
  organization: string;
}

export interface MetaStrategy {
  titleTemplate: string;
  descriptionTemplate: string;
  ogImageStrategy: string;
  canonicalStrategy: string;
}

export interface ContentCluster {
  pillarTopic: string;
  supportingTopics: string[];
  targetKeywords: string[];
}

export interface SEOPageStructure {
  pageName: string;
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  targetKeywords: string[];
  contentBrief: string;
}

export interface SEOStrategy {
  primaryKeywords: string[];
  secondaryKeywords: string[];
  semanticKeywordMap: Record<string, string[]>;
  pageStructure: SEOPageStructure[];
  localSEOStrategy: LocalSEOStrategy;
  schemaMarkup: SchemaMarkup;
  metaStrategy: MetaStrategy;
  contentClusters: ContentCluster[];
  voiceSearchQuestions: string[];
  aiSearchOptimization: string[];
  linkingStrategy: string[];
}

export interface PersuasionStrategy {
  primaryTriggers: string[];
  trustBuilders: string[];
  riskReducers: string[];
  socialProofStrategy: string[];
  clarityTactics: string[];
  confidenceBoosters: string[];
  decisionSimplifiers: string[];
  futurePacingElements: string[];
  transformationMessages: string[];
}

export interface SectionCopy {
  section: string;
  headline: string;
  subheadline: string;
  bodyBrief: string;
  ctaText: string;
}

export interface StorytellingStrategy {
  brandNarrative: string;
  heroHeadline: string;
  emotionalIntro: string;
  customerJourneyNarrative: string;
  painToSolutionMessaging: string;
  futurePacingCopy: string;
  identityBasedMessaging: string;
  aspirationalCopy: string;
  trustMicrocopy: string[];
  transformationStatement: string;
  sectionCopyBriefs: SectionCopy[];
}

export interface ColorStrategy {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  ctaColor: string;
  colorPsychologyRationale: string;
  moodBoard: string[];
  industryAlignment: string;
  customerAlignment: string;
  luxuryAlignment: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  schema: boolean;
}

export interface ObjectionHandler {
  objection: string;
  response: string;
  placement: string;
}

export interface ConversionStrategy {
  heroCTA: string;
  stickyMobileCTA: string;
  trustBarElements: string[];
  testimonialStrategy: string;
  beforeAfterConcept: string;
  leadMagnetIdea: string;
  contactFormFields: string[];
  clickToCallPlacement: string[];
  faqTopics: FAQItem[];
  objectionHandlers: ObjectionHandler[];
  finalCTA: string;
  clearNextSteps: string[];
  sectionFlow: string[];
}

export interface TrustStrategy {
  testimonialPlacements: string[];
  googleReviewStrategy: string;
  clientLogoStrategy: string;
  guarantees: string[];
  certifications: string[];
  processTransparency: string[];
  authoritySections: string[];
  trustSignals: string[];
}

export interface LeadMagnet {
  title: string;
  type: 'guide' | 'checklist' | 'template' | 'video' | 'consultation' | 'audit';
  description: string;
  deliveryMethod: string;
}

export interface AcquisitionStrategy {
  leadMagnets: LeadMagnet[];
  emailCaptureStrategy: string;
  smsCaptureStrategy: string;
  retargetingRecommendations: string[];
  socialContentIdeas: string[];
  referralCampaignIdeas: string[];
  consultationFunnel: string[];
  paidAdStrategy: string[];
}

export interface EmailSequence {
  day: number;
  subject: string;
  purpose: string;
  contentBrief: string;
}

export interface RetentionStrategy {
  newsletterStrategy: string;
  loyaltyProgramIdeas: string[];
  vipOffers: string[];
  reactivationCampaigns: string[];
  anniversaryCampaigns: string[];
  followUpSequence: EmailSequence[];
  customerSpotlightSystem: string;
  reviewRequestFlow: string;
  referralSystem: string;
}

export interface ReferralStrategy {
  referralProgram: string;
  incentiveStructure: string;
  referralMechanics: string[];
  partnershipOpportunities: string[];
  ambassadorProgram: string;
  socialSharingTriggers: string[];
}

export interface PageSection {
  name: string;
  purpose: string;
  components: string[];
  copyBrief: string;
}

export interface ServicePage {
  serviceName: string;
  slug: string;
  h1: string;
  sections: string[];
  targetKeywords: string[];
}

export interface LocationPageStructure {
  city: string;
  slug: string;
  h1: string;
  sections: string[];
}

export interface BlogPost {
  title: string;
  slug: string;
  type: string;
  targetKeyword: string;
  contentBrief: string;
}

export interface SupportPage {
  name: string;
  slug: string;
  purpose: string;
}

export interface PageStructure {
  homepage: PageSection[];
  servicePages: ServicePage[];
  locationPages: LocationPageStructure[];
  blogStrategy: BlogPost[];
  supportPages: SupportPage[];
}

export interface ContentCalendarItem {
  month: number;
  topic: string;
  format: string;
  targetKeyword: string;
}

export interface ContentStrategy {
  contentMission: string;
  primaryTopics: string[];
  contentCalendar: ContentCalendarItem[];
  authorityBuilding: string[];
  localContentStrategy: string[];
  videoStrategy: string[];
  socialContentStrategy: string[];
}

export interface ScoreItem {
  score: number;
  reasoning: string;
  missing: string[];
  improvements: string[];
}

export interface ScoringReport {
  overall: number;
  branding: ScoreItem;
  seo: ScoreItem;
  localSeo: ScoreItem;
  geo: ScoreItem;
  aeo: ScoreItem;
  speed: ScoreItem;
  mobileUx: ScoreItem;
  accessibility: ScoreItem;
  conversion: ScoreItem;
  trust: ScoreItem;
  storytelling: ScoreItem;
  atmosphere: ScoreItem;
  customerAcquisition: ScoreItem;
  retention: ScoreItem;
  referralReadiness: ScoreItem;
  analyticsReadiness: ScoreItem;
}

// ─── Full Blueprint ───────────────────────────────────────────────────────────

export interface WebsiteBlueprint {
  id: string;
  businessName: string;
  industry: string;
  createdAt: string;
  intake: BusinessIntakeForm;
  strategicIntelligence: StrategicIntelligence;
  atmosphereStrategy: AtmosphereStrategy;
  seoStrategy: SEOStrategy;
  persuasionStrategy: PersuasionStrategy;
  storytellingStrategy: StorytellingStrategy;
  colorStrategy: ColorStrategy;
  conversionStrategy: ConversionStrategy;
  trustStrategy: TrustStrategy;
  acquisitionStrategy: AcquisitionStrategy;
  retentionStrategy: RetentionStrategy;
  referralStrategy: ReferralStrategy;
  pageStructure: PageStructure;
  contentStrategy: ContentStrategy;
  scores: ScoringReport;
}

// ─── UI State ─────────────────────────────────────────────────────────────────

export type GenerationStatus =
  | 'idle'
  | 'analyzing'
  | 'generating'
  | 'complete'
  | 'error';

export interface GenerationState {
  status: GenerationStatus;
  progress: number;
  currentStep: string;
  blueprint: WebsiteBlueprint | null;
  error: string | null;
}
