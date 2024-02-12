import React, { useState, ChangeEvent } from 'react';
import { Box, Container, Typography, TextField } from '@mui/material';
import Introduction from './Introduction';
import ClassicalInput from './ClassicalInput';
import QuantumIntro from './QuantumIntro';
import QuantumInput from './QuantumInput';
import GameConclusion from './GameConclusion';
import RoleSelection from './RoleSelector';
import IterationSelector from './Iterations';
import QM_Explainer from './QM_Explainer';
import EBitCreationExplainer from './EBit_Explainer';
import QuantumAdvantageChart from './QMAdvantageChart';
import QuantumOperationVisual from './EbitVisualizer';

interface ClassicalInputProps {
  onInputChange: (event: ChangeEvent<HTMLInputElement>, player: 'alice' | 'bob') => void;
  onSubmit: () => void;
}

interface QuantumInputProps {
  onInputChange: (event: ChangeEvent<HTMLInputElement>, player: 'alice' | 'bob') => void;
  onSubmit: () => void;
}
interface GameInput {
  alice: number;
  bob: number;
}

interface VisualizationDataItem {
  label: string;
  value: number;
  color: string;
}

const CHSHGameComponent: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [gameInput, setGameInput] = useState<GameInput>({ alice: 0, bob: 0 });
  const [gameResult, setGameResult] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [classicalColor, setClassicalColor] = useState('#ff6384');
  const [quantumColor, setQuantumColor] = useState('#36a2eb');
  const [iterations, setIterations] = useState<number>(10);
  const [visualizationData, setVisualizationData] = useState<VisualizationDataItem[]>([]);
  

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, player: 'alice' | 'bob') => {
    const value = e.target.value;
    setGameInput((prev) => ({
      ...prev,
      [player]: parseInt(value, 10) // Ensure numeric conversion
    }));
  };

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>, type: 'classical' | 'quantum') => {
    const { value } = event.target;
    if (type === 'classical') {
      setClassicalColor(value);
    } else {
      setQuantumColor(value);
    }
  };

    
  const submitGame = async (mode: 'classical' | 'quantum', ruleset: string) => {
    setError('');
    try {
      const requestBody = {
        a_input: gameInput.alice,
        b_input: gameInput.bob,
        mode,
        iterations,
        ruleset,
      };
  
      const response = await fetch('/api/playCHSH', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch from server');
      }
  
      const data = await response.json();
  
      // Check if 'data' has the 'win_count' and 'total_games' properties
      if (typeof data.win_count !== "undefined" && typeof data.total_games !== "undefined") {
        const quantumValue = mode === 'quantum' ? data.win_rate : (100 - data.win_rate);
        const classicalValue = 100 - quantumValue;
  
        setVisualizationData([
          { label: 'Classical', value: classicalValue, color: classicalColor },
          { label: 'Quantum', value: quantumValue, color: quantumColor },
        ]);
        setGameResult(`Outcome: ${data.win_count} wins out of ${data.total_games} games`);
      } else {
        throw new Error("Invalid data structure received from server");
      }
  
      setStep(step + 1);
    } catch (err) {
      console.error("Fetch error:", err instanceof Error ? err.message : 'Unknown error');
      setError('Error connecting to the game server. Please try again.');
    }
  };

    const renderStepContent = () => {
        switch (step) {
            case 0:
                return <RoleSelection onRoleSelect={(role) => { console.log(role); setStep(1); }} />;
            case 1:
                return <QM_Explainer onNext={() => setStep(2)} />;
            case 2:
                return <EBitCreationExplainer onNext={() => setStep(3)} />;
            case 3:
                return <IterationSelector onIterationSelect={(count: number) => { setIterations(count); setStep(4); } } iterations={0} />;
            case 4:
                return <Introduction onNext={() => setStep(5)} />;
            case 5:
                return <ClassicalInput onInputChange={handleInputChange} onSubmit={() => submitGame('classical', 'ruleset')} />;
            case 6:
                const onNextStep = () => {
                    setStep(step + 1);
                };(
                    // ...
                    <Container maxWidth="sm">
                        <Box my={4}>
                            return <QuantumOperationVisual onVisualizationComplete={onNextStep} />;
                        </Box>
                    </Container>
                );
            case 7:
                return <QuantumIntro onNext={() => setStep(7)} />;
            case 8:
                return <QuantumInput onInputChange={handleInputChange} onSubmit={() => submitGame('quantum', 'ruleset')} />;
            case 9:
                return <GameConclusion result={gameResult} onRestart={() => setStep(0)} />;
            default:
                return <Typography variant="h6">Step not recognized.</Typography>;
        }
    };

    return (
        <Container maxWidth="sm">
            
            <Box my={4}>
            <Box display="flex" justifyContent="space-between" mb={2}>
          <TextField
            type="color"
            label="Classical Color"
            value={classicalColor}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleColorChange(e, 'classical')}
            variant="outlined"
            sx={{ width: '45%' }}
          />
          <TextField
            type="color"
            label="Quantum Color"
            value={quantumColor}
            onChange={(e:ChangeEvent<HTMLInputElement>) => handleColorChange(e, 'quantum')}
            variant="outlined"
            sx={{ width: '45%' }}
          />
        </Box>
        <QuantumAdvantageChart data={visualizationData} />
                
                {error && <Typography color="error">{error}</Typography>}
                {renderStepContent()}
                        {step === 7 && <QuantumAdvantageChart data={visualizationData} />}

            </Box>
        </Container>
    );
};

export default CHSHGameComponent;
