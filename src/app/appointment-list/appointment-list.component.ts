import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent {
  
  // Properties
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = [];

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
      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();      
    }
  }
}
