import express from 'express';

import { getIndex, getDiff } from '../controllers/handlers.js';

const router = express.Router();

router.get('/', getIndex);
router.get('/diff', getDiff);

//post or get for a form submission for a diffchecker

export default router;