import { Component } from '@angular/core';
import users from '../../../../public/db/users.json';
import { ActivatedRoute } from '@angular/router';

interface User {
  id: number
  username: string
  password: string
  email: string
  role: string
}


@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  user: any;
  constructor(private route: ActivatedRoute) { }

  getuserDetails() {
    const userId = this.route.snapshot.params['id'];
    // this.user = users[userId];
    this.user = users.find((user: User) => user.id == userId);
  }

}
