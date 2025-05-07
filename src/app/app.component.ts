import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  task = "";

  taskList: Array<string> = [];
  isUpdate = false;
  updateIndex: number | undefined;

  addTask() {
    // add Task
    this.taskList.push(this.task);
    console.log(this.taskList);

    // Clear the Task Input Field
    this.task = "";

  }


  deleteTask(idx: number) {
    this.taskList.splice(idx, 1);
  }

  editFunc(index: number) {
    this.updateIndex = index;
    this.isUpdate = true;
    this.task = this.taskList[index]
  }

  updateTask() {
    const updateTaskIndex:number = this.updateIndex as number;
    const updatedTask = this.task;

    this.taskList[updateTaskIndex] = updatedTask;

    // Clear the Task Input Field
    this.task = "";

    // Toggle add and update Button
    this.isUpdate = false;
  }
}
