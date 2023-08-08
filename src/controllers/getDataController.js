import SensorData from "../model/dataSchema.js";

const getData=async (req,res)=>{
    try {
        const data=await SensorData.find();

        res.status(200).json({
            data: data
        })
    } catch (error) {
        console.error(error.message);
    }
}



export default getData;