import { Component, OnInit, OnDestroy } from '@angular/core';
import { FooterService } from '../services/footer.service';
import { HeaderService } from '../services/header.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private footerService: FooterService,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    // Hide the header and footer
    this.headerService.setShowHeader(false);
    this.footerService.setShowFooter(false);

    // Define loginForm
    this.loginForm = new FormGroup({
      Phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[6-9]\\d{9}$')
      ]),
    });
  }

  ngOnDestroy() {
    // Show the header and footer when navigating away from the login page
    this.headerService.setShowHeader(true);
    this.footerService.setShowFooter(true);
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
