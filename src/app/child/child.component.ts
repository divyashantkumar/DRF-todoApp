import { Component, input, InputSignal, signal } from '@angular/core';

interface Data {
  name: string;
}

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  data1 = input();

  name() {
    console.log(this.data1());
  }


}
