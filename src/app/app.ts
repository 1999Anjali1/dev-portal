// import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { ProfileHeader } from './components/profile-header/profile-header';
// import { SkillsManager } from './components/skills-manager/skills-manager';
// import { DeveloperList } from './components/developer-list/developer-list';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, ProfileHeader, SkillsManager, DeveloperList],
//   templateUrl: './app.html',
//   styleUrl: './app.scss',
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class App {
//   name = signal('Anjali P');
//   role = signal('Full Stack Developer');
//   experience = signal(3);
//   skills = signal([
//     'Angular', 'Node.js', 'PostgreSQL',
//     'Strapi', 'TypeScript', 'REST APIs'
//   ]);

//   salaryRange = computed(() => {
//     const exp = this.experience();
//     if (exp <= 2) return '₹3L - ₹6L';
//     if (exp <= 4) return '₹6L - ₹12L';
//     if (exp <= 6) return '₹12L - ₹18L';
//     return '₹18L+';
//   });

//   level = computed(() => {
//     const exp = this.experience();
//     if (exp <= 2) return '🌱 Junior Developer';
//     if (exp <= 4) return '⚡ Mid-Level Developer';
//     if (exp <= 6) return '🚀 Senior Developer';
//     return '🏆 Tech Lead';
//   });

//   addExperience() {
//     this.experience.update(v => v + 1);
//   }

//   resetExperience() {
//     this.experience.set(3);
//   }

//   onSkillAdded(skill: string) {
//     this.skills.update(current => [...current, skill]);
//   }

//   onSkillRemoved(skill: string) {
//     this.skills.update(current => current.filter(s => s !== skill));
//   }
// }

import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from './services/auth-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  authService = inject(AuthService);
}