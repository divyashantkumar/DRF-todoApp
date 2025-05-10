import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { UserCardComponent } from './user-card/user-card.component';
import users from '../../public/db/users.json';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

// import user from './db/users.json';

@Component({
  selector: 'app-root',
  imports: [
    // FormsModule,
    // ChildComponent,
    // UserCardComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // task = "";



  // taskList: Array<string> = [];
  // isUpdate = false;
  // updateIndex: number | undefined;

  // addTask() {
  //   // add Task
  //   this.taskList.push(this.task);
  //   console.log(this.taskList);

  //   // Clear the Task Input Field
  //   this.task = "";

  // }


  // deleteTask(idx: number) {
  //   this.taskList.splice(idx, 1);
  // }

  // editFunc(index: number) {
  //   this.updateIndex = index;
  //   this.isUpdate = true;
  //   this.task = this.taskList[index]
  // }

  // updateTask() {
  //   const updateTaskIndex:number = this.updateIndex as number;
  //   const updatedTask = this.task;

  //   this.taskList[updateTaskIndex] = updatedTask;

  //   // Clear the Task Input Field
  //   this.task = "";

  //   // Toggle add and update Button
  //   this.isUpdate = false;
  // }



  // dataFormParent = "Data from Parent Component";

  // usersDetails = users;

  constructor(private router: Router) {
  }

  navigateToCourses() {
    this.router.navigate(["/courses"], { queryParams: { id: 'C875', name: 'Rohan' } });
  }





  // deleteUser(event: any) {
  //   console.log("ID: ", event);

  //   this.usersDetails = this.usersDetails.filter(user => user.id !== event);
  // }

  // eventHandler() {
  //   alert("Event Produced");
  // }

}
