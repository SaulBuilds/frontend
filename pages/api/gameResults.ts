import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const response = await fetch('http://localhost:5000/play_chsh', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    a_input: 1,  
                    b_input: 0,
                    mode: 'quantum',
                    iterations: 1000,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch from backend');
            }

            const data = await response.json();

            res.status(200).json(data);
        } catch (error: unknown) {
            let errorMessage = 'An unknown error occurred';
            if (error instanceof Error) errorMessage = error.message;
            res.status(500).json({ message: 'Error connecting to Flask backend', error: errorMessage });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}