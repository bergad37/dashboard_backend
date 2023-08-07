import express from "express";
import dataRoutes from './dataRoutes.js'

const router=express.Router();

router.use('/fetch',dataRoutes);


export default router;