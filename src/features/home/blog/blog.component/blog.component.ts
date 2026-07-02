import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Blog {

  image:string;

  title:string;

  date:string;

  readTime:string;

  link:string;

}
@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {

blogs:Blog[]=[

{

image:'/assets/images/blog1.png',

title:'Clean Architecture in ASP.NET Core',

date:'May 10, 2026',

readTime:'5 min read',

link:'#'

},

{

image:'/assets/images/blog2.png',

title:'Dependency Injection in ASP.NET Core',

date:'Apr 25, 2026',

readTime:'6 min read',

link:'#'

},

{

image:'/assets/images/blog3.png',

title:'SOLID Principles Every Developer Should Know',

date:'Apr 12, 2026',

readTime:'8 min read',

link:'#'

}

];
  
}
