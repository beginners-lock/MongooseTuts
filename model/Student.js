import mongoose from "mongoose";
const { Schema, model } = mongoose;

const studentSchema = new Schema({
    name: String,
    age: Number,
    dob: Date,
    level: { type: Number, enum: [100, 200, 300, 400, 500]},
    probation: Boolean,
    courses: [{
        name: String,
        units: Number
    }]
});

const Student = model("Student", studentSchema);
export default Student;