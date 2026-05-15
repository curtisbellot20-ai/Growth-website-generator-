import Anthropic from '@anthropic-ai/sdk';
import type { BusinessIntakeForm } from '@/lib/types';
import type { ExtendedWebsiteBlueprint } from '@/lib/types/extended';
import { EXTENDED_SYSTEM_PROMPT, generateExtendedPrompt } from './extended-prompts';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function generateExtendedBlueprint(
  intake: BusinessIntakeForm
): Promise<ExtendedWebsiteBlueprint> {
  const response = await anthropic.messages.create({
    model: 'claude-opus-4-7',
    max_tokens: 16000,
    temperature: 1,
    system: EXTENDED_SYSTEM_PROMPT,
    messages: [{ role: 'user', content: generateExtendedPrompt(intake) }],
  });

  const content = response.content[0];
  if (content.type !== 'text') {
    throw new Error('Unexpected response type from Claude');
  }

  let jsonText = content.text.trim();

  // Strip markdown code fences if present
  jsonText = jsonText.replace(/^```(?:json)?\n?/i, '').replace(/\n?```$/i, '').trim();

  let parsed: ExtendedWebsiteBlueprint;
  try {
    parsed = JSON.parse(jsonText);
  } catch {
    const match = jsonText.match(/\{[\s\S]*\}/);
    if (!match) {
      throw new Error('Could not parse extended JSON from Claude response');
    }
    parsed = JSON.parse(match[0]);
  }

  return parsed;
}
