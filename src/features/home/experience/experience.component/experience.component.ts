import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  duration: string;
  designation: string;
  company: string;
  icon: string;
  responsibilities: string[];
}


@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
experiences: Experience[] = [

    {
      duration: '2022 - Present',
      designation: 'Senior Software Developer',
      company: 'Riddhi Infosystems Pvt. Ltd.',
      icon: 'bi bi-briefcase',

      responsibilities: [
        'Develop enterprise applications using ASP.NET Core & Angular.',
        'Designed scalable REST APIs and microservices.',
        'Optimized SQL queries and improved application performance.',
        'Mentored junior developers and conducted code reviews.'
      ]
    },

    {
      duration: '2016 - 2017',
      designation: 'Software Developer',
      company: 'Artison Desired Solutions Pvt. Ltd.',
      icon: 'bi bi-code-slash',

      responsibilities: [
        'Developed ASP.NET MVC applications.',
        'Worked with SQL Server and Entity Framework.',
        'Integrated third-party APIs.',
        'Implemented role-based authentication.'
      ]
    },

    // {
    //   duration: '2016 - 2019',
    //   designation: 'Software Engineer',
    //   company: 'Innovative Softwares',
    //   icon: 'bi bi-bar-chart',

    //   responsibilities: [
    //     'Built responsive web applications.',
    //     'Created reusable components.',
    //     'Collaborated in Agile Scrum teams.',
    //     'Improved application performance.'
    //   ]
    // }

  ];

}
