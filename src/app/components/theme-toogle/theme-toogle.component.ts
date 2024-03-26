import { Component } from '@angular/core';
import {ThemeService} from '../../theme.service';

@Component({
  selector: 'app-theme-toogle',
  standalone: true,
  imports: [],
  templateUrl: './theme-toogle.component.html',
  styleUrl: './theme-toogle.component.css'
})
export class ThemeToggleComponent {
  isDarkMode: boolean;

  constructor(private themeService: ThemeService) {
    this.isDarkMode = this.themeService.isDarkMode();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
  }
}