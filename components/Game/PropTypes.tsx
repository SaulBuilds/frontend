import { ChangeEvent } from "react";


export interface QuantumInputProps {
    onInputChange: (e: ChangeEvent<HTMLInputElement>, player: 'alice' | 'bob') => void;
    onSubmit: () => void;
  }
export interface ClassicalInputProps {
    onInputChange: (e: ChangeEvent<HTMLInputElement>, player: 'alice' | 'bob') => void;
    onSubmit: () => void;
  }

export interface IntroductionProps {
    onNext: () => void;
  }

export interface GameInput {
    alice: number;
    bob: number;
  }
  
export interface GameConclusionProps {
    result: string;
    onRestart: () => void;
  }

export interface RoleSelectionProps {
    onRoleSelect: (role: string) => void;
  }

export interface IterationSelectorProps {
    onIterationSelect: (iterationCount: number) => void;
    iterations: number;
  }
  