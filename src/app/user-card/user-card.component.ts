import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  deleteCustomEvent: OutputEmitterRef<number | undefined> = output();

  customEvent = output();

  id = input<number>();
  name = input();
  userName = input();
  role = input();


  deleteUser(event: Event) {
    this.deleteCustomEvent.emit(this.id());
  }
}
