import express from "express";
import urlApis from "../api/url/index.js";
const router = express.Router();


router.use("/api/url", urlApis);

export default router;
