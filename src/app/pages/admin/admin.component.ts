import { Component } from '@angular/core';
import users from '../../../../public/db/users.json';
import { RouterLink } from '@angular/router';

interface User {
  id: number
  username: string
  password: string
  email: string
  role: string
}

@Component({
  selector: 'app-admin',
  imports: [RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  users: Array<User> = users;

}
