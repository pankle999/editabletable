let tableData = [];

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(tableData);
    } else if (req.method === 'POST') {
        tableData = req.body;
        res.status(200).json({ message: 'Table data saved successfully' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
