import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { ThemeToggleComponent } from "./components/theme-toogle/theme-toogle.component";
import { ButtonPageLinkComponent } from "./components/button-page-link/button-page-link.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HomeComponent, ThemeToggleComponent, ButtonPageLinkComponent]
})
export class AppComponent {
  title = 'curriculo-ninja';
}
