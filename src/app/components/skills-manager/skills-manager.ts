import { Component, Input, Output, EventEmitter, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-skills-manager',
  imports: [],
  templateUrl: './skills-manager.html',
  styleUrl: './skills-manager.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsManager {
  @Input() skills: string[] = [];
  @Output() skillAdded = new EventEmitter<string>();
  @Output() skillRemoved = new EventEmitter<string>();

  newSkill = signal('');

  addSkill() {
    const skill = this.newSkill().trim();
    if (skill) {
      this.skillAdded.emit(skill);
      this.newSkill.set('');
    }
  }

  removeSkill(skill: string) {
    this.skillRemoved.emit(skill);
  }

  updateNewSkill(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.newSkill.set(value);
  }
}