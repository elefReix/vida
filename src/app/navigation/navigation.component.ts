import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  @Input() currentPage: string = ''
  @Output() navigate = new EventEmitter<string>()
  constructor(private router:Router){

  }

   menuOpen = false;

  setPage(page: string) {
    try {
      this.menuOpen = false;
      this.router.navigate([page]);
    } catch (error) {
      console.log(error);
            
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
