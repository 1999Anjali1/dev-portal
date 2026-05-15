import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DeveloperService } from '../../services/developer';

@Component({
  selector: 'app-developer-list',
  imports: [],
  templateUrl: './developer-list.html',
  styleUrl: './developer-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush // 🆕 works perfectly with signals
})
export class DeveloperList implements OnInit {
  developerService = inject(DeveloperService);

  ngOnInit() {
    this.developerService.fetchDevelopers();
  }
}
