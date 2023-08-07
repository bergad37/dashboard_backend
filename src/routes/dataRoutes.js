import express from 'express';
import sensorReadings from "../controllers/dataControllers.js";


const router=express .Router();

router.post('/',sensorReadings);


export default router;


