import React, { useState, useEffect } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

// Assuming each game result has a similar structure
interface GameResult {
  id: number; // Unique identifier for each game
  mode: string; // 'classical' or 'quantum'
  outcome: string; // Win/Loss
  winRate: number; // Win rate percentage
  // Add other relevant fields here
}

const GameResultsTable: React.FC = () => {
  const [gameResults, setGameResults] = useState<GameResult[]>([]);

  useEffect(() => {
    const fetchGameResults = async () => {
      try {
        const response = await fetch('/api/gameResults'); // Adjust the API endpoint as necessary
        if (!response.ok) {
          throw new Error('Failed to fetch game results');
        }
        const data: GameResult[] = await response.json();
        setGameResults(data);
      } catch (error) {
        console.error("Error fetching game results:", error);
      }
    };

    fetchGameResults();
  }, []);

  return (
    <TableContainer component={Paper} style={{ maxHeight: 400 }}> {/* Adjust maxHeight as needed */}
      <Table stickyHeader aria-label="game results table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Mode</TableCell>
            <TableCell align="right">Outcome</TableCell>
            <TableCell align="right">Win Rate (%)</TableCell>
            {/* Add more table headers here as needed */}
          </TableRow>
        </TableHead>
        <TableBody>
          {gameResults.map((result) => (
            <TableRow key={result.id}>
              <TableCell component="th" scope="row">
                {result.id}
              </TableCell>
              <TableCell align="right">{result.mode}</TableCell>
              <TableCell align="right">{result.outcome}</TableCell>
              <TableCell align="right">{result.winRate}</TableCell>
              {/* Add more cells here as needed */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GameResultsTable;
