// pages/api/playCHSH.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const backendUrl = 'http://localhost:5000/play_chsh'; 

try {
    const flaskResponse = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body), 
    });

    if (!flaskResponse.ok) throw new Error('Network response was not ok from Flask backend');

    const data = await flaskResponse.json();
    res.status(200).json(data); 
} catch (error: any) {
    console.error(error);
    res.status(500).json({ message: 'Error connecting to Flask backend', error: error.message });
}
}
