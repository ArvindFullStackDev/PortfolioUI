import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  activeSection = 'home';

  sections = [
    'home',
    'about',
    'skills',
    'projects',
    'experience',
    'blog',
    'contact'
  ];

 @HostListener('window:scroll', [])
onWindowScroll() {

  const scrollPosition = window.scrollY + 150;

  // Check if user reached bottom of page
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 5
  ) {
    this.activeSection = 'contact';
    return;
  }

  for (const section of this.sections) {

    const element = document.getElementById(section);

    if (element) {

      const top = element.offsetTop;
      const height = element.offsetHeight;

      if (
        scrollPosition >= top &&
        scrollPosition < top + height
      ) {
        this.activeSection = section;
      }
    }
  }
}

  scrollTo(section: string) {

    document.getElementById(section)
      ?.scrollIntoView({

        behavior: 'smooth'

      });

  }


}
