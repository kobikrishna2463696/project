import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Change background after 50px of scrolling
    this.isScrolled = window.scrollY > 50;
  }

  scrollTo(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  } else {
    console.warn(`Section with id "${sectionId}" not found!`);
  }
}
}
