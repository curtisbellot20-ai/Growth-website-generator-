# Growth Website Generator

An AI-powered Business Growth Website Generator that produces complete strategic blueprints optimized for SEO, GEO, AEO, conversion, trust, storytelling, customer acquisition, retention, referrals, and 16-dimension scoring.

## What It Does

This is not a template picker. This is a strategic intelligence system that thinks like:

- A luxury brand strategist
- A CRO expert
- A behavioral psychology expert
- An SEO/GEO/AEO expert
- A UI/UX designer
- A sales strategist
- A storyteller
- A local marketing expert
- A customer retention strategist
- A business intelligence analyst

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with luxury dark theme
- **AI**: Claude (Anthropic SDK) — claude-opus-4-7
- **State**: Zustand with localStorage persistence
- **Forms**: React Hook Form
- **Icons**: Lucide React

## Modules Generated

| Module | Description |
|--------|-------------|
| Strategic Intelligence | Customer psychology, emotional triggers, industry patterns |
| Atmosphere System | Color science, typography, emotional flow, visual density |
| SEO/GEO/AEO Engine | Google, AI search, voice search, local SEO |
| Ethical Persuasion | Trust-based conversion triggers |
| Storytelling Engine | Brand narrative, transformation copy, section briefs |
| Color Science | Psychology-based palette recommendations |
| Conversion Engine | CTAs, section flow, objection handlers, FAQs |
| Trust Architecture | Testimonials, guarantees, authority signals |
| Acquisition System | Lead magnets, funnels, email capture |
| Retention Engine | Follow-up sequences, loyalty, VIP offers |
| Referral System | Incentives, ambassadors, partnerships |
| Page Structure | Full sitemap, service pages, location pages |
| Content Strategy | 12-month calendar, clusters, authority plan |
| Scoring Engine | 16-dimension score with improvement roadmap |

## Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/curtisbellot20-ai/growth-website-generator-
cd growth-website-generator-
npm install
```

### 2. Set Up Environment

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Anthropic API key:

```
ANTHROPIC_API_KEY=your_api_key_here
```

Get your key at [console.anthropic.com](https://console.anthropic.com)

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push this repo to GitHub
2. Connect to Vercel
3. Add `ANTHROPIC_API_KEY` to environment variables
4. Deploy

> The `vercel.json` is pre-configured with a 120s function timeout for the AI generation route.

## Usage Flow

1. **Dashboard** (`/`) — View saved projects and stats
2. **Generator** (`/generator`) — Fill out the 5-step intake form
   - Step 1: Business information
   - Step 2: Customer intelligence (psychology, fears, desires)
   - Step 3: Offers & services
   - Step 4: Brand & atmosphere
   - Step 5: Website goals
3. **Generation** — AI processes and generates blueprint (~30-60s)
4. **Blueprint** (`/blueprint`) — View full strategic output across 7 tabs:
   - Scores (16-dimension scoring)
   - Intelligence (customer psychology)
   - SEO/GEO/AEO
   - Atmosphere (colors, typography, emotional flow)
   - Conversion (CTAs, storytelling, FAQs)
   - Growth (acquisition, retention, referral)
   - Pages (page structure, content calendar)

## Dashboard Sub-Pages

| Route | Description |
|-------|-------------|
| `/dashboard/seo-report` | SEO strategy deep-dive |
| `/dashboard/atmosphere` | Brand atmosphere & color |
| `/dashboard/conversion` | Conversion & storytelling |
| `/dashboard/acquisition` | Lead acquisition strategy |
| `/dashboard/retention` | Retention & email sequences |
| `/dashboard/referral` | Referral system |
| `/dashboard/projects` | All saved blueprints |

## Project Structure

```
src/
  app/
    api/generate/       ← Claude AI generation endpoint
    blueprint/          ← Blueprint viewer
    generator/          ← 5-step intake form
    dashboard/          ← Sub-pages for each module
    layout.tsx
    page.tsx            ← Home dashboard
  components/
    blueprint/          ← Report display components
    generator/          ← Form step components
    layout/             ← Sidebar, dashboard layout
    ui/                 ← Button, Card, Input, Select, etc.
  lib/
    claude/             ← Anthropic client + prompts
    store/              ← Zustand state management
    types/              ← TypeScript types
    utils/              ← Helpers
```

## Customization

### Change AI Model

Edit `src/lib/claude/client.ts`:
```typescript
model: 'claude-opus-4-7',  // or 'claude-sonnet-4-6' for faster/cheaper
```

### Extend the Prompt

Edit `src/lib/claude/prompts.ts` — the `SYSTEM_PROMPT` and `generateBlueprintPrompt()` function control everything the AI generates.

### Add More Atmosphere Types

Extend `AtmosphereType` in `src/lib/types/index.ts` and add options in `src/components/generator/Step4Brand.tsx`.

## Future Integrations

- [ ] Database persistence (Supabase/PlanetScale)
- [ ] User authentication
- [ ] PDF export of blueprints
- [ ] Team collaboration
- [ ] CRM integration (HubSpot, GoHighLevel)
- [ ] Website code generation
- [ ] Direct Vercel/GitHub deployment

## License

MIT
