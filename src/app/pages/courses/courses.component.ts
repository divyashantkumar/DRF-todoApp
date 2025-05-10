import { Component } from '@angular/core';
import { FsdComponent } from './fsd/fsd.component';
import { DevopsComponent } from './devops/devops.component';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-courses',
  imports: [
    // FsdComponent,
    // DevopsComponent,
    // NgClass,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})

export class CoursesComponent {
  constructor(private route: ActivatedRoute) {
  }


  gerParmas() {
    // console.log(this.route);
    // 1.
    // console.log(this.route.snapshot.params['id']);
    // console.log(this.route.snapshot.params['course']);

    // 2.
    // console.log(this.route.snapshot.params['id']);
    // console.log(this.route.snapshot.paramMap.get('id'));

    // 3.
    // this.route.params.subscribe(params => {
    //   console.log(params);
    // })

    // 4.
    // this.route.paramMap.subscribe(params => {
    //   console.log(params.get('id'));
    // })


    // QUERY PARAMs
    // 1.
    // this.route.queryParams.subscribe(qpObject => {
    //   console.log(qpObject)
    // })


    // 2.
    // console.log(this.route.snapshot.queryParams['id']);
  }

  test() {
    console.log("asasd");
  }


}
