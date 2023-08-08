import mongoose from 'mongoose';
const sensorDataSchema = mongoose.Schema(
	{
		temperature: Number,
		spo2: Number,
		heartbeat: Number,
		flex: Number,
	},
	{ timestamps: true }
);

const SensorData = new mongoose.model("SensorData", sensorDataSchema);

export default SensorData;