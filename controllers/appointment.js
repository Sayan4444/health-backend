const Appointment = require('../model/Appointment');

exports.addData = async (req, res) => {
    console.log(req.body);
    try {
        await Appointment.create(req.body);
        res.status(200).json({
            success: true,
            data: req.body
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}