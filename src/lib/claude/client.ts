import Anthropic from '@anthropic-ai/sdk';
import { SYSTEM_PROMPT, generateBlueprintPrompt } from './prompts';
import type { BusinessIntakeForm, WebsiteBlueprint } from '@/lib/types';
import { generateId } from '@/lib/utils/format';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function generateBlueprint(
  intake: BusinessIntakeForm
): Promise<WebsiteBlueprint> {
  const response = await anthropic.messages.create({
    model: 'claude-opus-4-7',
    max_tokens: 16000,
    temperature: 1,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: 'user',
        content: generateBlueprintPrompt(intake),
      },
    ],
  });

  const content = response.content[0];
  if (content.type !== 'text') {
    throw new Error('Unexpected response type from Claude');
  }

  let jsonText = content.text.trim();

  // Strip markdown code fences if present
  if (jsonText.startsWith('```')) {
    jsonText = jsonText.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
  }

  let parsed: Omit<WebsiteBlueprint, 'id' | 'businessName' | 'industry' | 'createdAt' | 'intake'>;
  try {
    parsed = JSON.parse(jsonText);
  } catch {
    // Attempt to extract JSON from the response
    const match = jsonText.match(/\{[\s\S]*\}/);
    if (!match) throw new Error('Could not parse blueprint JSON from Claude response');
    parsed = JSON.parse(match[0]);
  }

  return {
    id: generateId(),
    businessName: intake.businessName,
    industry: intake.industry,
    createdAt: new Date().toISOString(),
    intake,
    ...parsed,
  };
}
