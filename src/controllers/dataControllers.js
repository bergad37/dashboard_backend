import sensorDataSchema from "../model/dataSchema.js";


const sensorReadings=async(req,res)=>{
    const {temperature,spo2,bpm,flex}=req.params;
    try {
       const reading=await sensorDataSchema.create({temperature,spo2,bpm,flex});
       return res.status(201).json({
        data: reading,
        message: "Data posted successfully"
       }) 
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}


export default sensorReadings;