import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl('', [ Validators.required, Validators.pattern(/\s/) ]),
    email: new FormControl('', [ Validators.required, Validators.email ]),
    password: new FormControl('', [ Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$') ]),
    confirmPassword: new FormControl('', [ Validators.required ])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

}

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password && confirmPassword && password.value === confirmPassword.value ? { confirmPassword: true } : null;
}
