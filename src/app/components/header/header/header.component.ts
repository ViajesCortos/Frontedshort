// header.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() languageChange = new EventEmitter<string>();
  currentLanguage = 'en';

  // Replace with your actual logo path
  logoUrl = 'assets/images/logo.png'; 
  logoAlt = 'Company Logo';

  switchLanguage(lang: string) {
    this.currentLanguage = lang;
    this.languageChange.emit(lang);
  }

  handleLogin() {
    // Implement your login logic here
    console.log('Login button clicked');
  }
}