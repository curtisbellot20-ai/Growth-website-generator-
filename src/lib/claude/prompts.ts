import type { BusinessIntakeForm } from '@/lib/types';

export const SYSTEM_PROMPT = `You are an elite team of 10 world-class business growth experts who collaborate to generate comprehensive strategic website blueprints. Your team consists of:

1. LUXURY BRAND STRATEGIST — positions businesses for premium perception and status
2. CRO EXPERT — optimizes every element for conversion and revenue
3. BEHAVIORAL PSYCHOLOGY EXPERT — understands how customers think, feel, and decide
4. SEO/GEO/AEO EXPERT — dominates Google, AI search, voice search, and local discovery
5. UI/UX DESIGNER — creates atmosphere-driven, conversion-focused experiences
6. SALES STRATEGIST — turns visitors into buyers through strategic persuasion
7. MASTER STORYTELLER — crafts brand narratives that create emotional connection
8. LOCAL MARKETING EXPERT — dominates local search and community trust
9. CUSTOMER RETENTION STRATEGIST — maximizes lifetime value and loyalty
10. BUSINESS INTELLIGENCE ANALYST — extracts winning patterns from top performers

Your output is always:
- Deeply specific to the business, industry, and customer
- Rooted in proven psychological and behavioral patterns
- Focused on transformation (not just service descriptions)
- Ethical — no fake scarcity, no dark patterns, no manipulation
- Structured as valid, parseable JSON

Core philosophy:
- Sell the TRANSFORMATION, not the service
- Lead with EMOTION, validate with LOGIC
- Build TRUST before asking for the sale
- Use CLARITY as the ultimate persuasion tool
- Every element should serve CONVERSION or TRUST`;

export function generateBlueprintPrompt(intake: BusinessIntakeForm): string {
  return `Generate a comprehensive strategic website blueprint for this business.

═══════════════════════════════════════════
BUSINESS PROFILE
═══════════════════════════════════════════
Business Name: ${intake.businessName}
Industry: ${intake.industry}
Location: ${intake.location}
Service Area: ${intake.serviceArea}
Phone: ${intake.businessPhone}
Email: ${intake.businessEmail}
${intake.currentWebsiteUrl ? `Current Website: ${intake.currentWebsiteUrl}` : 'No current website'}

═══════════════════════════════════════════
CUSTOMER INTELLIGENCE
═══════════════════════════════════════════
Target Customer: ${intake.targetCustomer}
Pain Points: ${intake.customerPainPoints}
Desires: ${intake.customerDesires}
Fears: ${intake.customerFears}
Objections: ${intake.customerObjections}

═══════════════════════════════════════════
OFFERS & SERVICES
═══════════════════════════════════════════
Main Offer: ${intake.mainOffer}
Secondary Offers: ${intake.secondaryOffers}
Services: ${intake.services}
Locations Served: ${intake.locationsServed}

═══════════════════════════════════════════
BRAND & ATMOSPHERE
═══════════════════════════════════════════
Desired Atmosphere: ${intake.desiredAtmosphere}
Brand Style: ${intake.desiredBrandStyle}
Emotional Tone: ${intake.desiredEmotionalTone}
Luxury Level: ${intake.luxuryLevel}
Brand Colors: ${intake.brandColors || 'Not specified — recommend based on industry and customer'}

═══════════════════════════════════════════
GOALS
═══════════════════════════════════════════
Website Goal: ${intake.websiteGoal}
CTA Preference: ${intake.ctaPreference}
${intake.competitors ? `Competitors: ${intake.competitors}` : ''}
${intake.testimonials ? `Testimonials Available: ${intake.testimonials}` : ''}
${intake.reviews ? `Reviews Available: ${intake.reviews}` : ''}

═══════════════════════════════════════════
INSTRUCTIONS
═══════════════════════════════════════════
Generate a COMPLETE strategic blueprint as a single valid JSON object. Be deeply specific, industry-aware, and customer-psychology-driven. Think like all 10 experts simultaneously.

For storytelling: describe TRANSFORMATIONS not services. Example — not "we provide event draping" but "we transform ordinary venues into unforgettable luxury experiences your guests will talk about for years."

Return ONLY the JSON below with all fields populated — no markdown, no explanation, no code blocks:

{
  "strategicIntelligence": {
    "customerPsychology": "deep analysis of how this specific customer thinks, fears, hopes, and decides",
    "emotionalBuyingTriggers": ["trigger1", "trigger2", "trigger3", "trigger4", "trigger5"],
    "trustSignals": ["signal1", "signal2", "signal3", "signal4", "signal5"],
    "commonObjections": ["objection1", "objection2", "objection3", "objection4"],
    "highestConvertingOffers": ["offer1", "offer2", "offer3"],
    "retentionDrivers": ["driver1", "driver2", "driver3", "driver4"],
    "referralOpportunities": ["opportunity1", "opportunity2", "opportunity3"],
    "premiumPositioningCues": ["cue1", "cue2", "cue3", "cue4"],
    "industrySuccessPatterns": ["pattern1", "pattern2", "pattern3", "pattern4", "pattern5"],
    "competitiveAdvantages": ["advantage1", "advantage2", "advantage3"]
  },
  "atmosphereStrategy": {
    "primaryAtmosphere": "one of: luxury|romantic|corporate|cinematic|urban-premium|family-friendly|high-energy|wellness|minimal|elegant|futuristic|trustworthy|exclusive|creative|performance-driven|relaxing|nightlife|high-status",
    "colorPalette": {
      "primary": "#hexcode",
      "secondary": "#hexcode",
      "accent": "#hexcode",
      "background": "#hexcode",
      "surface": "#hexcode",
      "text": "#hexcode",
      "textSecondary": "#hexcode",
      "cta": "#hexcode",
      "rationale": "detailed explanation of why these colors work for this customer and industry"
    },
    "typography": {
      "headingFont": "font name",
      "bodyFont": "font name",
      "headingWeight": "700 or 800",
      "bodySize": "16px",
      "lineHeight": "1.6",
      "letterSpacing": "-0.01em",
      "rationale": "typography reasoning for this brand"
    },
    "spacing": "describe the whitespace and padding philosophy",
    "imagery": ["imagery direction 1", "imagery direction 2", "imagery direction 3"],
    "layoutPacing": "describe the visual rhythm",
    "ctaLanguage": "describe the CTA tone and style",
    "copywritingTone": "describe the overall tone",
    "animationStyle": "describe motion/animation approach",
    "emotionalFlow": ["first emotion", "second emotion", "third emotion", "fourth emotion", "fifth emotion"],
    "visualDensity": "airy|balanced|rich",
    "sectionOrder": ["Hero", "Trust Bar", "Emotional Hook", "Services", "Process", "Testimonials", "Before/After", "FAQ", "Lead Magnet", "Final CTA"],
    "storytellingStyle": "describe the narrative approach"
  },
  "seoStrategy": {
    "primaryKeywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"],
    "secondaryKeywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5", "keyword6"],
    "semanticKeywordMap": {
      "main topic": ["related1", "related2", "related3"]
    },
    "pageStructure": [
      {
        "pageName": "Homepage",
        "slug": "/",
        "h1": "SEO-optimized H1",
        "metaTitle": "meta title under 60 chars",
        "metaDescription": "meta description under 160 chars",
        "targetKeywords": ["kw1", "kw2"],
        "contentBrief": "what this page covers"
      }
    ],
    "localSEOStrategy": {
      "primaryCity": "main city",
      "targetCities": ["city1", "city2", "city3"],
      "locationPages": [
        {
          "city": "city name",
          "h1": "H1 for city page",
          "contentBrief": "localized content plan",
          "localKeywords": ["local kw1", "local kw2"]
        }
      ],
      "googleBusinessOptimization": ["tip1", "tip2", "tip3", "tip4"],
      "localSchemaData": "LocalBusiness schema guidance",
      "napConsistency": ["NAP item1", "NAP item2"],
      "localCitations": ["citation1", "citation2", "citation3"],
      "localContentStrategy": ["strategy1", "strategy2", "strategy3"]
    },
    "schemaMarkup": {
      "localBusiness": "LocalBusiness schema configuration",
      "services": ["Service1 schema", "Service2 schema"],
      "faq": "FAQ schema",
      "organization": "Organization schema"
    },
    "metaStrategy": {
      "titleTemplate": "[Page] | [City] [Industry] | [Business Name]",
      "descriptionTemplate": "template",
      "ogImageStrategy": "OG image strategy",
      "canonicalStrategy": "canonical strategy"
    },
    "contentClusters": [
      {
        "pillarTopic": "main topic",
        "supportingTopics": ["topic1", "topic2", "topic3"],
        "targetKeywords": ["kw1", "kw2"]
      }
    ],
    "voiceSearchQuestions": ["question1", "question2", "question3", "question4"],
    "aiSearchOptimization": ["strategy1", "strategy2", "strategy3"],
    "linkingStrategy": ["strategy1", "strategy2", "strategy3"]
  },
  "persuasionStrategy": {
    "primaryTriggers": ["trigger1", "trigger2", "trigger3"],
    "trustBuilders": ["builder1", "builder2", "builder3", "builder4"],
    "riskReducers": ["reducer1", "reducer2", "reducer3"],
    "socialProofStrategy": ["strategy1", "strategy2", "strategy3"],
    "clarityTactics": ["tactic1", "tactic2", "tactic3"],
    "confidenceBoosters": ["booster1", "booster2", "booster3"],
    "decisionSimplifiers": ["simplifier1", "simplifier2", "simplifier3"],
    "futurePacingElements": ["element1", "element2", "element3"],
    "transformationMessages": ["message1", "message2", "message3"]
  },
  "storytellingStrategy": {
    "brandNarrative": "the brand's compelling origin and mission story",
    "heroHeadline": "powerful emotional headline that sells the transformation",
    "emotionalIntro": "opening paragraph that creates immediate connection",
    "customerJourneyNarrative": "the story from pain to transformation",
    "painToSolutionMessaging": "problem-agitate-solution narrative",
    "futurePacingCopy": "paint the picture of life after working with this business",
    "identityBasedMessaging": "message that speaks to who the customer wants to be",
    "aspirationalCopy": "copy that speaks to their highest aspiration",
    "trustMicrocopy": ["microcopy1", "microcopy2", "microcopy3", "microcopy4"],
    "transformationStatement": "the single most powerful transformation promise",
    "sectionCopyBriefs": [
      {
        "section": "Hero",
        "headline": "hero headline",
        "subheadline": "hero subheadline",
        "bodyBrief": "supporting copy direction",
        "ctaText": "CTA button text"
      }
    ]
  },
  "colorStrategy": {
    "primaryColor": "#hexcode",
    "secondaryColor": "#hexcode",
    "accentColor": "#hexcode",
    "backgroundColor": "#hexcode",
    "textColor": "#hexcode",
    "ctaColor": "#hexcode",
    "colorPsychologyRationale": "detailed explanation of color psychology choices",
    "moodBoard": ["visual element1", "visual element2", "visual element3"],
    "industryAlignment": "how colors align with industry expectations",
    "customerAlignment": "how colors appeal to the target customer psychology",
    "luxuryAlignment": "how colors communicate the intended luxury level"
  },
  "conversionStrategy": {
    "heroCTA": "primary hero CTA text",
    "stickyMobileCTA": "mobile sticky bar CTA text",
    "trustBarElements": ["element1", "element2", "element3", "element4"],
    "testimonialStrategy": "how and where to use testimonials for max conversion",
    "beforeAfterConcept": "specific before/after transformation concept for this business",
    "leadMagnetIdea": "specific high-value lead magnet idea for this industry",
    "contactFormFields": ["field1", "field2", "field3", "field4"],
    "clickToCallPlacement": ["placement1", "placement2", "placement3"],
    "faqTopics": [
      {
        "question": "specific FAQ question",
        "answer": "specific FAQ answer",
        "schema": true
      }
    ],
    "objectionHandlers": [
      {
        "objection": "the specific objection",
        "response": "the persuasive response",
        "placement": "where on the page to address this"
      }
    ],
    "finalCTA": "closing CTA text",
    "clearNextSteps": ["step1", "step2", "step3"],
    "sectionFlow": ["section1", "section2", "section3", "section4", "section5", "section6", "section7", "section8"]
  },
  "trustStrategy": {
    "testimonialPlacements": ["placement1", "placement2", "placement3"],
    "googleReviewStrategy": "how to display and leverage Google reviews",
    "clientLogoStrategy": "how to use client/partner logos",
    "guarantees": ["guarantee1", "guarantee2"],
    "certifications": ["certification1", "certification2"],
    "processTransparency": ["step1", "step2", "step3", "step4"],
    "authoritySections": ["section1", "section2", "section3"],
    "trustSignals": ["signal1", "signal2", "signal3", "signal4", "signal5"]
  },
  "acquisitionStrategy": {
    "leadMagnets": [
      {
        "title": "lead magnet title",
        "type": "guide",
        "description": "what it covers",
        "deliveryMethod": "email/download"
      }
    ],
    "emailCaptureStrategy": "email capture approach",
    "smsCaptureStrategy": "SMS capture approach",
    "retargetingRecommendations": ["recommendation1", "recommendation2", "recommendation3"],
    "socialContentIdeas": ["idea1", "idea2", "idea3", "idea4"],
    "referralCampaignIdeas": ["idea1", "idea2", "idea3"],
    "consultationFunnel": ["step1", "step2", "step3", "step4"],
    "paidAdStrategy": ["strategy1", "strategy2", "strategy3"]
  },
  "retentionStrategy": {
    "newsletterStrategy": "newsletter content and cadence approach",
    "loyaltyProgramIdeas": ["idea1", "idea2", "idea3"],
    "vipOffers": ["offer1", "offer2", "offer3"],
    "reactivationCampaigns": ["campaign1", "campaign2"],
    "anniversaryCampaigns": ["campaign1", "campaign2"],
    "followUpSequence": [
      {
        "day": 1,
        "subject": "email subject line",
        "purpose": "trust building",
        "contentBrief": "what the email covers"
      },
      {
        "day": 3,
        "subject": "email subject line",
        "purpose": "social proof",
        "contentBrief": "what the email covers"
      },
      {
        "day": 5,
        "subject": "email subject line",
        "purpose": "education",
        "contentBrief": "what the email covers"
      },
      {
        "day": 7,
        "subject": "email subject line",
        "purpose": "CTA",
        "contentBrief": "what the email covers"
      },
      {
        "day": 14,
        "subject": "email subject line",
        "purpose": "value delivery",
        "contentBrief": "what the email covers"
      }
    ],
    "customerSpotlightSystem": "how to feature happy customers",
    "reviewRequestFlow": "review request timing and method",
    "referralSystem": "referral program design"
  },
  "referralStrategy": {
    "referralProgram": "program overview",
    "incentiveStructure": "how incentives work",
    "referralMechanics": ["mechanic1", "mechanic2", "mechanic3"],
    "partnershipOpportunities": ["partner1", "partner2", "partner3"],
    "ambassadorProgram": "ambassador program concept",
    "socialSharingTriggers": ["trigger1", "trigger2", "trigger3"]
  },
  "pageStructure": {
    "homepage": [
      {
        "name": "Hero",
        "purpose": "purpose",
        "components": ["component1", "component2"],
        "copyBrief": "copy direction"
      }
    ],
    "servicePages": [
      {
        "serviceName": "service name",
        "slug": "/services/slug",
        "h1": "H1 heading",
        "sections": ["section1", "section2"],
        "targetKeywords": ["kw1", "kw2"]
      }
    ],
    "locationPages": [
      {
        "city": "city name",
        "slug": "/location/slug",
        "h1": "H1 heading",
        "sections": ["section1", "section2"]
      }
    ],
    "blogStrategy": [
      {
        "title": "blog post title",
        "slug": "/blog/slug",
        "type": "how-to",
        "targetKeyword": "target keyword",
        "contentBrief": "what to cover in this post"
      }
    ],
    "supportPages": [
      {
        "name": "About Us",
        "slug": "/about",
        "purpose": "trust and authority building"
      }
    ]
  },
  "contentStrategy": {
    "contentMission": "the content strategy mission statement",
    "primaryTopics": ["topic1", "topic2", "topic3", "topic4"],
    "contentCalendar": [
      {
        "month": 1,
        "topic": "content topic",
        "format": "blog",
        "targetKeyword": "keyword"
      }
    ],
    "authorityBuilding": ["strategy1", "strategy2", "strategy3"],
    "localContentStrategy": ["strategy1", "strategy2", "strategy3"],
    "videoStrategy": ["strategy1", "strategy2", "strategy3"],
    "socialContentStrategy": ["strategy1", "strategy2", "strategy3"]
  },
  "scores": {
    "overall": 7,
    "branding": {"score": 7, "reasoning": "specific reasoning", "missing": ["item1"], "improvements": ["improvement1"]},
    "seo": {"score": 6, "reasoning": "specific reasoning", "missing": ["item1"], "improvements": ["improvement1"]},
    "localSeo": {"score": 7, "reasoning": "specific reasoning", "missing": ["item1"], "improvements": ["improvement1"]},
    "geo": {"score": 5, "reasoning": "specific reasoning", "missing": ["item1"], "improvements": ["improvement1"]},
    "aeo": {"score": 5, "reasoning": "specific reasoning", "missing": ["item1"], "improvements": ["improvement1"]},
    "speed": {"score": 8, "reasoning": "specific reasoning", "missing": ["item1"], "improvements": ["improvement1"]},
    "mobileUx": {"score": 7, "reasoning": "specific reasoning", "missing": ["item1"], "improvements": ["improvement1"]},
    "accessibility": {"score": 6, "reasoning": "specific reasoning", "missing": ["item1"], "improvements": ["improvement1"]},
    "conversion": {"score": 7, "reasoning": "specific reasoning", "missing": ["item1"], "improvements": ["improvement1"]},
    "trust": {"score": 7, "reasoning": "specific reasoning", "missing": ["item1"], "improvements": ["improvement1"]},
    "storytelling": {"score": 8, "reasoning": "specific reasoning", "missing": ["item1"], "improvements": ["improvement1"]},
    "atmosphere": {"score": 8, "reasoning": "specific reasoning", "missing": ["item1"], "improvements": ["improvement1"]},
    "customerAcquisition": {"score": 7, "reasoning": "specific reasoning", "missing": ["item1"], "improvements": ["improvement1"]},
    "retention": {"score": 6, "reasoning": "specific reasoning", "missing": ["item1"], "improvements": ["improvement1"]},
    "referralReadiness": {"score": 5, "reasoning": "specific reasoning", "missing": ["item1"], "improvements": ["improvement1"]},
    "analyticsReadiness": {"score": 6, "reasoning": "specific reasoning", "missing": ["item1"], "improvements": ["improvement1"]}
  }
}`;
}
