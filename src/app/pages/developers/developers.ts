import { Component, inject, OnInit, 
         ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DeveloperService } from '../../services/developer';

@Component({
  selector: 'app-developers',
  imports: [RouterLink, FormsModule],
  templateUrl: './developers.html',
  styleUrl: './developers.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Developers implements OnInit {
  developerService = inject(DeveloperService);

  // 🆕 search signal
  searchQuery = signal('');

  // 🆕 computed — filters automatically when searchQuery changes
  filteredDevelopers = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const developers = this.developerService.developers();

    if (!query) return developers;

    return developers.filter(dev =>
      dev.name.toLowerCase().includes(query) ||
      dev.company.name.toLowerCase().includes(query) ||
      dev.email.toLowerCase().includes(query)
    );
  });

  ngOnInit() {
    this.developerService.fetchDevelopers();
  }
}
