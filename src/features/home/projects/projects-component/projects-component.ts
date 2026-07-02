import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.css',
})
export class ProjectsComponent {

   projects = [

    {
      title: 'Employee Management System',

      description: 'Enterprise HR management application developed using ASP.NET Core, Angular and SQL Server with secure authentication and role-based authorization.',

      image: '/assets/images/project1.png',

      github: '#',

      liveDemo: '#',

      technologies: [
        'ASP.NET Core',
        'Angular',
        'SQL Server',
        'JWT'
      ]
    },

    {
      title: 'E-Commerce Web API',

      description: 'RESTful API for an e-commerce platform with product catalog, shopping cart, and order management. And Payment integration with Stripe API.',

      image: 'assets/images/project2.png',

      github: '#',

      liveDemo: '#',

      technologies: [
        'C#',
        'ASP.NET Core',
        'EF Core',
        'SQL Server'
      ]
    },

    {
      title: 'Inventory Management System',

      description: 'Inventory tracking platform with reporting, dashboards and stock management.',

      image: 'assets/images/project3.png',

      github: '#',

      liveDemo: '#',

      technologies: [
        'Angular',
        'Web API',
        'Azure',
        'Bootstrap'
      ]
    }

  ];
}
