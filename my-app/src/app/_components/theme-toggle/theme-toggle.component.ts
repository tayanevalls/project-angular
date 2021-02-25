import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/_services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {

  theme: string = 'light';

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  toggleTheme() {
    if (this.theme === 'light') {
      this.theme = 'dark';
    } else  {
      this.theme = 'light';
    }

    this.themeService.setTheme(this.theme)
  }

}