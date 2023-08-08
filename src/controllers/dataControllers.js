import sensorData from "../model/dataSchema.js";


const sensorReadings=async(req,res)=>{
    const {temperature,spo2,bpm,flex}=req.body;

    try {
       const reading=await sensorData.create({temperature,spo2,heartbeat:bpm,flex});
       return res.status(201).json({
        data: reading,
        message: "Data posted successfully"
       }) 
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
        })
    }
}


export default sensorReadings;