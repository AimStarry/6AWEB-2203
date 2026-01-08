import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  heroAboutText = 'About the Organization';
  aboutDesc = 'Learn how the team and commitee leadership are shaping the world of conferences, get the latest conference news and updates on our blog, and contact us for guidance.';

  text1 = 'About';
  about1 = 'We believe in transparency, cooperation globally, and the free exchange of talent and ideas. A forum for the sharing of these technical and humanitarian discussions is given for meetings, conferences and other events. We are also committed to creating a secure, constructive and supportive atmosphere for all participants in conferences, activities and meetings who participate in these discussions with us.'

  giftMessage = '';
  showGift = false;

  getFreeGift() {
    this.showGift = true;
    this.giftMessage = "Thank you! Your gift card will be sent in your inbox."
  }

    about2 = 'Conferences are a part of the legacy of this organization and continue today to be a catalyst for creativity. We are committed to developing stratigies that support and expand the conferences activities throughout the world.'
}
