import { Component } from '@angular/core';
import { SharedModule } from '../../utils/shared';
interface JobOpening {
  title: string;
  location: string;
  experience: string;
  description: string;
  applyLink: string;
}
@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './careers.html',
  styleUrl: './careers.scss',
})
export class Careers {
  jobOpenings: JobOpening[] = [
    {
      title: 'Frontend Developer',
      location: 'Remote / Hyderabad',
      experience: '2 - 4 years',
      description:
        'Develop and maintain web applications using Angular, Bootstrap, and SCSS.',
      applyLink: '#',
    },
    {
      title: 'Backend Developer',
      location: 'Remote / Hyderabad',
      experience: '3 - 5 years',
      description: 'Build and optimize scalable backend services and APIs.',
      applyLink: '#',
    },
    {
      title: 'UI/UX Designer',
      location: 'Remote / Hyderabad',
      experience: '1 - 3 years',
      description:
        'Design intuitive user interfaces and engaging user experiences.',
      applyLink: '#',
    },
    // Add more job listings as needed
  ];
  onSubmit() {
    alert('Thank you for your submission. We will get back to you shortly!');
    // TODO: Implement real form submission logic here (e.g., HTTP request)
  }
}
