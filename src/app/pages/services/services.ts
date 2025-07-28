import { Component } from '@angular/core';
import { SharedModule } from '../../utils/shared';

@Component({
  selector: 'app-services',
  imports: [SharedModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  standalone: true,
})
export class Services {
  services = [
    {
      icon: 'ai',
      title: 'AI Video Creation',
      desc: 'Cinematic videos made by AI with smart scripts, digital actors, and fast editing for scalable results.',
      color: 'primary',
    },
    {
      icon: 'human',
      title: 'Digital Humans & Influencers',
      desc: 'Hyper-realistic avatars for virtual assistants, hosts, and ambassadors that engage your brand 24/7.',
      color: 'info',
    },
    {
      icon: 'voice',
      title: 'AI Voiceovers & Content',
      desc: 'Studio-quality AI voiceovers and content generation in many languages for blogs, ads and more.',
      color: 'warning',
    },
    {
      icon: 'seo',
      title: 'AI Digital Marketing',
      desc: 'Smart blogs, SEO, PPC and campaigns with AI-automation for maximum inbound visibility.',
      color: 'success',
    },
    {
      icon: 'apps',
      title: 'Web & App Development',
      desc: 'Rapid, secure, and scalable web/mobile apps – AI speeds delivery and gives a superior user experience.',
      color: 'danger',
    },
    {
      icon: 'cloud',
      title: 'Cloud & DevOps',
      desc: 'Cloud architecture, VPS hosting, DevOps & continuous deployment managed by AI excellence.',
      color: 'purple',
    },
    {
      icon: 'automation',
      title: 'Scraping & Automation',
      desc: 'AI-powered data extraction and workflow automation tools to save time and fuel new insights.',
      color: 'indigo',
    },
    {
      icon: 'support',
      title: '24/7 AI Support',
      desc: 'Always-on human & AI support: live chat, ticketing, and CRM for rapid service.',
      color: 'teal',
    },
    {
      icon: 'consult',
      title: 'Consulting & Testing',
      desc: 'Business, marketing and technical consulting, plus AI QA for bug-free, optimized systems.',
      color: 'pink',
    },
  ];
}
