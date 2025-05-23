import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //Declarando la variable donde se guarda la URL de la API
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';


  constructor(private http: HttpClient) { }

  // Método que obtiene los usuarios
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
  }

  // Método simulado para enviar datos
  getUserById(id: number): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
