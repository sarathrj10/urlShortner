import express from 'express';
const router = express.Router()
import { shortUrlGenerator } from './controller.js';

router.post('/generate',shortUrlGenerator)

export default router;