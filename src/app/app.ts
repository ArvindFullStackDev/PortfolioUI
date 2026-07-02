import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../layout/header/header.component/header.component';

import { AboutComponent } from '../features/home/about/about.component/about.component';
import { HeroComponent } from '../features/home/hero/hero.component/hero.component';
import { SkillsComponent } from '../features/home/skills/skills-component/skills-component';
import { ProjectsComponent } from '../features/home/projects/projects-component/projects-component';
import { ExperienceComponent } from '../features/home/experience/experience.component/experience.component';
import { BlogComponent } from '../features/home/blog/blog.component/blog.component';
import { FooterComponent } from '../layout/footer/footer.component/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,HeroComponent,AboutComponent,
    SkillsComponent,ProjectsComponent,ExperienceComponent,BlogComponent,FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio.UI');
}
