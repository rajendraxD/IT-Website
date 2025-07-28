import { Component } from '@angular/core';
import { SharedModule } from '../../utils/shared';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  navLinks = [
    { path: '', label: 'Home' },
    { path: 'services', label: 'Services' },
    { path: 'about-us', label: 'About' },
    { path: 'contact-us', label: 'Contact' },
    { path: 'careers', label: 'Careers' },
    // { path: 'portfolio', label: 'Portfolio' },
    // { path: 'testimonials', label: 'Testimonials' },
  ];
}
