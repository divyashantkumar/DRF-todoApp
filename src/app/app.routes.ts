import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { FsdComponent } from './pages/courses/fsd/fsd.component';
import { DevopsComponent } from './pages/courses/devops/devops.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
// import { ChildComponent } from './child/child.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent
  //   loadComponent: () => import('./pages/home/home.component').then((value) => value.HomeComponent)
  },
  {
    path: 'about',
    title: 'About',
    component: AboutComponent
    // loadComponent: () => import('./pages/about/about.component').then((value) => value.AboutComponent)
  },
  {
    path: 'contact',
    title: 'Contact',
    component: ContactComponent
    // loadComponent: () => import('./pages/contact/contact.component').then((value) => value.ContactComponent)
  },
  {
    path: 'services',
    title: 'Expolore Our Service',
    component: ServicesComponent,
    // loadComponent: () => import('./pages/services/services.component').then((value) => value.ServicesComponent)
  },
  {
    path: 'courses',
    title: 'Get Courses For Free',
    component: CoursesComponent,
    // children: [
    //   {
    //     path: 'fsd',
    //     title: 'Full Stack Development',
    //     component: FsdComponent
    //   },
    //   {
    //     path: 'devops',
    //     title: 'DevOps',
    //     component: DevopsComponent
    //   }
    // ]
  },
  {
    path: 'admin',
    title: 'Admin',
    component: AdminComponent
  },
  {
    path: 'userDetails/:id',
    title: 'Admin',
    component: UserDetailsComponent
  }
];
