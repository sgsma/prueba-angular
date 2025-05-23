import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  users: any[] = []; //Arreglo para almacenar los usuarios

  constructor(private UserService: UserService) {}

  // Obtener los 5 primeros usuarios al cargar el componente
  ngOnInit(): void {
    this.UserService.getUsers().subscribe(data => {
      console.log('Recibiendo datos de usuarios desde la API', data)
      this.users = data.slice(0,5) 
    });
  }

  // Mostrar detaller de usuario en consola al requerirlo
  showUserDetails(id: number) {
    this.UserService.getUserById(id).subscribe(user => {
      console.log('Usuario completo:', user)
    })
  }

}
