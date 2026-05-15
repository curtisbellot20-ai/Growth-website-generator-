'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { WebsiteBlueprint, GenerationState, BusinessIntakeForm } from '@/lib/types';

interface BlueprintStore {
  // Current generation
  generation: GenerationState;
  setGenerationStatus: (status: GenerationState['status']) => void;
  setGenerationProgress: (progress: number, step: string) => void;
  setBlueprint: (blueprint: WebsiteBlueprint) => void;
  setGenerationError: (error: string) => void;
  resetGeneration: () => void;

  // Saved projects
  projects: WebsiteBlueprint[];
  saveProject: (blueprint: WebsiteBlueprint) => void;
  deleteProject: (id: string) => void;
  getProject: (id: string) => WebsiteBlueprint | undefined;

  // Draft intake
  draftIntake: Partial<BusinessIntakeForm> | null;
  setDraftIntake: (intake: Partial<BusinessIntakeForm>) => void;
  clearDraftIntake: () => void;
}

const initialGeneration: GenerationState = {
  status: 'idle',
  progress: 0,
  currentStep: '',
  blueprint: null,
  error: null,
};

export const useBlueprintStore = create<BlueprintStore>()(
  persist(
    (set, get) => ({
      generation: initialGeneration,

      setGenerationStatus: (status) =>
        set((s) => ({ generation: { ...s.generation, status } })),

      setGenerationProgress: (progress, currentStep) =>
        set((s) => ({ generation: { ...s.generation, progress, currentStep } })),

      setBlueprint: (blueprint) =>
        set((s) => ({
          generation: { ...s.generation, blueprint, status: 'complete', progress: 100 },
        })),

      setGenerationError: (error) =>
        set((s) => ({ generation: { ...s.generation, error, status: 'error' } })),

      resetGeneration: () => set({ generation: initialGeneration }),

      projects: [],

      saveProject: (blueprint) =>
        set((s) => ({
          projects: [
            blueprint,
            ...s.projects.filter((p) => p.id !== blueprint.id),
          ].slice(0, 20),
        })),

      deleteProject: (id) =>
        set((s) => ({ projects: s.projects.filter((p) => p.id !== id) })),

      getProject: (id) => get().projects.find((p) => p.id === id),

      draftIntake: null,
      setDraftIntake: (intake) => set({ draftIntake: intake }),
      clearDraftIntake: () => set({ draftIntake: null }),
    }),
    {
      name: 'growth-generator-store',
      partialize: (s) => ({ projects: s.projects, draftIntake: s.draftIntake }),
    }
  )
);
