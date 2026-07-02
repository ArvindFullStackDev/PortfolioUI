import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {

  skillsLeft = [
    'ASP.NET Core & Web API',
    'SQL Server & Entity Framework Core',
    'RESTful API Development'
  ];

  skillsRight = [
    'Clean Architecture & SOLID Principles',
    'Agile & Team Collaboration',
    'Problem Solver'
  ];
}
