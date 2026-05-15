import { NextRequest, NextResponse } from 'next/server';
import { generateExtendedBlueprint } from '@/lib/claude/extended-client';
import type { BusinessIntakeForm } from '@/lib/types';

export const maxDuration = 120;

export async function POST(request: NextRequest) {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json({ error: 'ANTHROPIC_API_KEY is not configured' }, { status: 500 });
    }

    const body = await request.json();
    const intake = body as BusinessIntakeForm;

    if (!intake.businessName || !intake.industry || !intake.location) {
      return NextResponse.json(
        { error: 'businessName, industry, and location are required' },
        { status: 400 }
      );
    }

    const extended = await generateExtendedBlueprint(intake);
    return NextResponse.json(extended);
  } catch (error) {
    console.error('Extended blueprint generation error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Extended generation failed' },
      { status: 500 }
    );
  }
}
