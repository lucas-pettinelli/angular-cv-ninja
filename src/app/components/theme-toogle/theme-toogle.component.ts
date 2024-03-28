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
  isBotaoFixo: boolean = false;
  sun: string = 'https://img.icons8.com/ios/100/sun--v1.png';

  constructor(private themeService: ThemeService) {
    this.isDarkMode = this.themeService.isDarkMode();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
  }

  onScroll(event: Event) {
    // Lógica para decidir quando tornar o botão fixo
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (offset > 100) {
      this.isBotaoFixo = true;
    } else {
      this.isBotaoFixo = false;
    }
  }


}