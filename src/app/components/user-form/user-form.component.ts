import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  successMessage = "";

  
  constructor(private UserService: UserService) {} 
  
  //Método del envío del formulario
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.successMessage = 'Información enviada coorectamente';
      console.log('Datos enviados:', form.value);
      form.reset();
    }
  }

}
