import { Router } from 'express';
import { getMainData, getSuiteData, getCoreData } from '../controller/dataController';

const router = Router();

// Main database routes
router.get('/main-data', getMainData);

// Suite (read-only) database routes
router.get('/suite-data', getSuiteData);

// Core system (mocked) routes
router.get('/core-data', getCoreData);

export default router;
