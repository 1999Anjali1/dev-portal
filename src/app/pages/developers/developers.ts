import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DeveloperService } from '../../services/developer';

@Component({
  selector: 'app-developers',
  imports: [RouterLink],
  templateUrl: './developers.html',
  styleUrl: './developers.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Developers implements OnInit {
  developerService = inject(DeveloperService);

  ngOnInit() {
    this.developerService.fetchDevelopers();
  }
}
