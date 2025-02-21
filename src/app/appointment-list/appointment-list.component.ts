import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent implements OnInit {
  // Properties
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = [];

  ngOnInit(): void {
    // OnInit of this component, try to load the saved appointments, it can return null or undefined
    let savedAppointments = localStorage.getItem('appointments');

    // If we have a savedAppointments, load it, otherwise initialize an empty array
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  addAppointment() {
    // Add an appointment only if the user added infos
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(), // Change it with a guid, is better
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      };

      // Add appointment to the array
      this.appointments.push(newAppointment);

      // Clear properties
      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();

      // Save all the appointments in the browser local storage to make it available also if the server is restarted
      // This is just for demo purpose, is not a database
      localStorage.setItem('appointments', JSON.stringify(this.appointments));
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);

    // Save the appointments array after a deletion
    // This is just for demo purpose, is not a database
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
}
