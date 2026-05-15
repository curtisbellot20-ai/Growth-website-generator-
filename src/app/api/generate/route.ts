import { NextRequest, NextResponse } from 'next/server';
import { generateBlueprint } from '@/lib/claude/client';
import type { BusinessIntakeForm } from '@/lib/types';

export const maxDuration = 120;

export async function POST(request: NextRequest) {
  try {
    const intake: BusinessIntakeForm = await request.json();

    if (!intake.businessName || !intake.industry || !intake.location) {
      return NextResponse.json(
        { error: 'Business name, industry, and location are required.' },
        { status: 400 }
      );
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'ANTHROPIC_API_KEY is not configured.' },
        { status: 500 }
      );
    }

    const blueprint = await generateBlueprint(intake);
    return NextResponse.json(blueprint);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Generation failed';
    console.error('[generate]', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
