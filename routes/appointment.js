const express = require("express");
const router = express.Router();

const {
  createAppointment,
  getUserAppointments,
  getDoctorAppointments,
  updateUserAppointment,
  updateHcpAppointment,
  deleteAppointment,
} = require('../controllers/appointmentController');

router.post('/', createAppointment);
router.get('/user/:userId', getUserAppointments);
router.get('/doctor/:doctorId', getDoctorAppointments);
router.put('/user/:appointmentId', updateUserAppointment);
router.put('/hcp/:appointmentId', updateHcpAppointment);
router.delete('/:appointmentId', deleteAppointment);

module.exports = router;
