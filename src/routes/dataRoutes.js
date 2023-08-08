import express from 'express';
import dataControllers from "../controllers/dataControllers.js";
import getDataController from '../controllers/getDataController.js'


const router=express .Router();

router.post('/',dataControllers);
router.get('/',getDataController);


export default router;


