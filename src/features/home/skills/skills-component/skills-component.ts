import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills-component.html',
  styleUrl: './skills-component.css',
})
export class SkillsComponent implements AfterViewInit {


  @ViewChild('skillScroll')
  skillScroll!: ElementRef<HTMLDivElement>;

  private isDown = false;
  private startX = 0;
  private scrollLeft = 0;

  ngAfterViewInit(): void {

    const slider = this.skillScroll.nativeElement;

    slider.addEventListener('mousedown', (e) => {

      this.isDown = true;

      slider.classList.add('active');

      this.startX = e.pageX - slider.offsetLeft;

      this.scrollLeft = slider.scrollLeft;

    });

    slider.addEventListener('mouseleave', () => {

      this.isDown = false;

      slider.classList.remove('active');

    });

    slider.addEventListener('mouseup', () => {

      this.isDown = false;

      slider.classList.remove('active');

    });

    slider.addEventListener('mousemove', (e) => {

      if (!this.isDown) return;

      e.preventDefault();

      const x = e.pageX - slider.offsetLeft;

      const walk = (x - this.startX) * 2;

      slider.scrollLeft = this.scrollLeft - walk;

    });

  }
  isMobile = window.innerWidth <= 768;

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }

  skillCategories = [

    {
      title: 'Backend',
      icon: 'bi bi-code-slash',
      skills: [
        'C#',
        'ASP.NET Core',
        'Web API',
        'LINQ',
        'Entity Framework Core'
      ]
    },

    {
      title: 'Frontend',
      icon: 'bi bi-window',
      skills: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3'
      ]
    },

    {
      title: 'Database',
      icon: 'bi bi-database',
      skills: [
        'SQL Server',
        'Stored Procedures',
        'Views',
        'Indexes',
        'Optimization'
      ]
    },

    {
      title: 'Cloud',
      icon: 'bi bi-cloud',
      skills: [
        'Azure',
        'Azure DevOps',
        'App Service',
        'Storage',
        'Key Vault'
      ]
    },

    {
      title: 'Tools',
      icon: 'bi bi-tools',
      skills: [
        'Git',
        'GitHub',
        'Visual Studio',
        'Postman',
        'Swagger'
      ]
    },

    {
      title: 'Architecture',
      icon: 'bi bi-diagram-3',
      skills: [
        'Clean Architecture',
        'SOLID',
        'Repository Pattern',
        'Dependency Injection',
        'CQRS'
      ]
    }

  ];
}
