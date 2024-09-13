import { AppDataSource, SuiteDataSource } from '../config/data-source';
import { fetchCoreData } from '../config/coreConnection';

export const getMainData = async (req, res) => {
    try {
        const result = await AppDataSource.query('SELECT * FROM issuedetector');
        res.json(result);
    } catch (err) {
        console.error('Error fetching data from main database:', err);
        res.status(500).json({ error: 'Database error' });
    }
};

export const getSuiteData = async (req, res) => {
    try {
        const result = await SuiteDataSource.query('SELECT * FROM suite_table');
        res.json(result);
    } catch (err) {
        console.error('Error fetching data from suite database:', err);
        res.status(500).json({ error: 'Database error' });
    }
};


export const getCoreData = async (req, res) => {
    try {
        const coreData = await fetchCoreData();
        res.json(coreData);
    } catch (err) {
        console.error('Error fetching data from core system:', err);
        res.status(500).json({ error: 'Core system error' });
    }
};
