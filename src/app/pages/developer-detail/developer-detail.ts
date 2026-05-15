import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DeveloperService } from '../../services/developer';

@Component({
  selector: 'app-developer-detail',
  imports: [RouterLink],
  templateUrl: './developer-detail.html',
  styleUrl: './developer-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperDetail implements OnInit {
  developerService = inject(DeveloperService);
  route = inject(ActivatedRoute);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // 🆕 first check local signal — no API call needed
    const localDeveloper = this.developerService.developers()
      .find(d => d.id === id);

    if (localDeveloper) {
      // found locally — use it directly!
      this.developerService.selectedDeveloper.set(localDeveloper);
      this.developerService.isLoading.set(false);
    } else {
      // not found locally — fetch from API
      this.developerService.fetchDeveloperById(id);
    }
  }
}