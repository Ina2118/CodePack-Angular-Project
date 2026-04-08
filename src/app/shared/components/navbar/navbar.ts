import { CommonModule } from '@angular/common';
import { Component, HostBinding, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  @HostBinding('class.scrolled') scrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrolled = window.pageYOffset > 20;
  }
}
