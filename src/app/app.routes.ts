import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ControlComponent } from './gastos/control/control.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: ControlComponent },
  { path: 'gastos', component: ControlComponent },
  { path: 'gallery', component: CarouselComponent },
];
