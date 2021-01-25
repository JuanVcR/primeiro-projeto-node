import { request, response, Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import Appointment from '../models/Appointment';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();

  return response.json(appointments);
});


appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parserdDate = startOfHour(parseISO(date));

  const findappointmentInsameDate = appointmentsRepository.findByDate(parserdDate);


  if (findappointmentInsameDate) {
    return response.status(400)
    .json({ message: 'This appointment is already booked' })
  }

  const appointment = appointmentsRepository.create({
    provider,
    date: parserdDate,
  });

  return response.json(appointment);
});

export default appointmentsRouter;
