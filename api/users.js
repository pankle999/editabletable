import { readFile } from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const filePath = path.join(process.cwd(), 'data', 'users.json');
            const fileContents = await readFile(filePath, 'utf8');
            const users = JSON.parse(fileContents);
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error reading users file', error });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
