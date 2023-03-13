const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
            trim: true,
            maxlength: [50, 'Name can not be more than 50 characters']
        },
        phone: {
            type: String,
            maxlength: [20, 'Phone number can not be longer than 20 characters'],
            required: [true, 'Please add a phone number'],
            unique: true,
        },
        email: {
            type: String,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please add a valid email'
            ],
            required: [true, 'Please add a email'],
            unique: true,
        },
        date: {
            type: String,
            required: [true, 'Please add a appoitment date'],

        },
    });

const Appointment = mongoose.model('Appointment', AppointmentSchema);
module.exports = Appointment;