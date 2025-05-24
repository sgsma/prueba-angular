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

  
  constructor(private userService: UserService) {} 
  
  //Método del envío del formulario
  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.userService.addUser(form.value).subscribe((response) => {
        console.log('Respuesta del servidor:', response);
        alert('Datos enviados correctamente');
        form.reset();
      });
    } else {
      alert('Por favor completa todos los campos correctamente');
    }
  }
}