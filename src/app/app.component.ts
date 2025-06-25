import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BirthdayComponent } from './birthday/birthday.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BirthdayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ruby';
}
