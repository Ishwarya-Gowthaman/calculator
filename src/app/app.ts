import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Calc } from './calc/calc';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, Calc, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  protected readonly title = signal('calculator');
  constructor(private router: Router) {

  }
  
  routerNavigate(path: string): void {
    // This method can be used to navigate programmatically
    // For example, you can use the Angular Router to navigate to a different route
    console.log(`Navigating to ${path}`);
    this.router.navigate([path]);
  }

}
