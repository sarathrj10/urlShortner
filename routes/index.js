import express from "express";
import { getOriginalurl } from "../api/url/controller.js";
const router = express.Router();


router.get('/:shortUrl',getOriginalurl)

export default router;