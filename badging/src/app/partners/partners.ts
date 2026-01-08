import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  imports: [CommonModule],
  templateUrl: './partners.html',
  styleUrl: './partners.css',
})
export class Partners {

  heroPartners = "https://iated.org/iceri/img/iceri24-035.jpg"
  partners = [
    {
      company: 'Microsoft',
      logo: 'https://www.logo.wine/a/logo/Microsoft/Microsoft-Logo.wine.svg',
      sponsorship: 'Platinum',
      website: 'https://www.microsoft.com/en-ph',
    },

    {
      company: 'Apple, Inc.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      sponsorship: 'Gold',
      website: 'https://www.apple.com/ph/store?afid=p240%7Cgo~cmp-268361412~adg-16280229612~ad-782198283833_kwd-10778630~dev-c~ext-~prd-~mca-~nt-search&cid=aos-ph-kwgo-brand--',
    },

    {
      company: 'Amazon',
      logo: 'https://images.crowdspring.com/blog/wp-content/uploads/2023/07/03162944/amazon-logo-1.png',
      sponsorship: 'Silver',
      website: 'https://www.amazon.com/',
    },

     {
      company: 'Google, Inc.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      sponsorship: 'Bronze',
      website: 'https://www.google.com/',
    },
  ]
}
