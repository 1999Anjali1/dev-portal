import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DeveloperService } from '../../services/developer';

@Component({
  selector: 'app-add-developer',
  imports: [ReactiveFormsModule],
  templateUrl: './add-developer.html',
  styleUrl: './add-developer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddDeveloper {
  router = inject(Router);
  developerService = inject(DeveloperService);

  // 🆕 Reactive Form definition
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),
    companyName: new FormControl('', [
      Validators.required
    ])
  });

  // helper getters — makes template cleaner
  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get phone() { return this.form.get('phone'); }
  get companyName() { return this.form.get('companyName'); }

 onSubmit() {
  if (this.form.valid) {
    const newDeveloper = {
      id: Date.now(),
      name: this.form.value.name!,
      email: this.form.value.email!,
      phone: this.form.value.phone!,
      website: '',
      company: {
        name: this.form.value.companyName!,
        catchPhrase: 'New Developer'
      },
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: ''
      }
    };

    // 🆕 use service method instead of directly updating signal
    this.developerService.addDeveloper(newDeveloper);
    this.router.navigate(['/developers']);
  } else {
    this.form.markAllAsTouched();
  }
}

  onCancel() {
    this.router.navigate(['/developers']);
  }
}
