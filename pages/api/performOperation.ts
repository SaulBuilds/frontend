// pages/api/performOperation.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const backendOperationUrl = 'http://localhost:5000/api/performOperation'; // Adjust based on actual Flask endpoint

try {
    const response = await fetch(backendOperationUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
    });

    if (!response.ok) throw new Error('Failed to perform operation on backend');

    const result = await response.json();
    res.status(200).json(result);
} catch (error: any) {
    console.error(error);
    res.status(500).json({ message: 'Error performing operation', error: error.message });
}
}
