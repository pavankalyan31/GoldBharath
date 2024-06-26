import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../services/header.service';
import { FooterService } from '../services/footer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup = new FormGroup({});

  constructor(
    private headerService: HeaderService,
    private footerService: FooterService
  ) {}

  ngOnInit() {
    
    this.headerService.setShowHeader(false);
    this.footerService.setShowFooter(false);

    
    this.registerForm = new FormGroup({
      Business: new FormControl('', Validators.required),
      Person: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[6-9]\\d{9}$')
      ]),
      Shop: new FormControl('', Validators.required),
      PinCode: new FormControl('', Validators.required),
    });
  }

  ngOnDestroy() {
    
    this.headerService.setShowHeader(true);
    this.footerService.setShowFooter(true);
  }

  onSubmit() {
    console.log(this.registerForm);
  }
}
