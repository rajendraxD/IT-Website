import { Component } from '@angular/core';
import { SharedModule } from '../../utils/shared';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
})
export class ContactUs {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  isSubmitting = false;

  onSubmit(form: any) {
    if (form.invalid) {
      return;
    }
    this.isSubmitting = true;

    // Simulate a server submission with timeout
    setTimeout(() => {
      alert(`Thank you, ${this.formData.name}! Your message has been sent.`);
      this.isSubmitting = false;
      form.resetForm();
    }, 1500);
  }
}
