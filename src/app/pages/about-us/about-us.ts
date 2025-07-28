import { Component } from '@angular/core';
import { SharedModule } from '../../utils/shared';
interface ValueItem {
  icon: string; // SVG markup as string
  iconBg: string; // Bootstrap bg utility class
  iconText: string; // Bootstrap text color class
  title: string;
  desc: string;
}
interface Service {
  color: string;
  icon: string; // SVG markup
  title: string;
  desc: string;
  features: string[];
}
interface TeamMember {
  name: string;
  role: string;
  description: string;
}

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {
  values: ValueItem[] = [
    {
      icon: `<svg ...>...</svg>`, // Insert the SVG code for Innovation
      iconBg: 'bg-primary bg-opacity-10',
      iconText: 'text-primary',
      title: 'Innovation',
      desc: 'We constantly explore new technologies and approaches to solve complex problems.',
    },
    {
      icon: `<svg ...>...</svg>`, // Excellence
      iconBg: 'bg-success bg-opacity-10',
      iconText: 'text-success',
      title: 'Excellence',
      desc: 'We hold ourselves to the highest standards in everything we deliver.',
    },
    {
      icon: `<svg ...>...</svg>`, // Collaboration
      iconBg: 'bg-purple bg-opacity-10',
      iconText: 'text-purple',
      title: 'Collaboration',
      desc: 'We work closely with our clients to ensure solutions meet their unique needs.',
    },
    {
      icon: `<svg ...>...</svg>`, // Integrity
      iconBg: 'bg-warning bg-opacity-10',
      iconText: 'text-warning',
      title: 'Integrity',
      desc: 'We operate with transparency and honesty in all our business dealings.',
    },
  ];
  services: Service[] = [
    {
      color: 'primary',
      icon: `<svg ...>...</svg>`, // Software Development icon SVG (add SVG as in your HTML)
      title: 'Software Development',
      desc: 'Custom software solutions designed to streamline your operations and enhance productivity.',
      features: ['Web Applications', 'Mobile Apps', 'Enterprise Solutions'],
    },
    {
      color: 'purple',
      icon: `<svg ...>...</svg>`, // IT Consulting icon SVG
      title: 'IT Consulting',
      desc: 'Strategic guidance to help you leverage technology for business growth and innovation.',
      features: [
        'Digital Transformation',
        'Technology Roadmaps',
        'Process Optimization',
      ],
    },
    {
      color: 'success',
      icon: `<svg ...>...</svg>`, // Cloud Services icon SVG
      title: 'Cloud Services',
      desc: 'Secure, scalable cloud solutions to power your business and enable remote work.',
      features: [
        'Cloud Migration',
        'Infrastructure as a Service',
        'Backup & Disaster Recovery',
      ],
    },
  ];
  members: TeamMember[] = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      description:
        'With over 20 years of experience in the tech industry, Sarah leads our company vision and strategy.',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      description:
        'Michael oversees our technical direction and ensures we stay at the cutting edge of innovation.',
    },
    {
      name: 'Priya Patel',
      role: 'Chief Operations Officer',
      description:
        'Priya ensures our operations run smoothly and our clients receive exceptional service.',
    },
    {
      name: 'David Rodriguez',
      role: 'Chief Business Officer',
      description:
        'David drives our business development and builds strategic partnerships for growth.',
    },
  ];
}
