import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  imports: [],
  templateUrl: './profile-header.html',
  styleUrl: './profile-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileHeader {
  @Input() name = '';
  @Input() role = '';
  @Input() experience = 0;
  @Input() level = '';
  @Input() salaryRange = '';
}
