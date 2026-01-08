import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  heroText1 = "Research Conferences"
  heroText2 = "Join our online events this 2026!"

  heroImageUrl= "https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_1080,g_auto/f_auto/q_auto/v1/shutterstock_329662223_ss_non-editorial_3_csm8lw?_a=BAVAZGGf0";

  text1 = "Join our Research Conferences around the Globe";

  place1 = "France";
  place1img = "https://dynamic-media.tacdn.com/media/photo-o/30/42/46/65/caption.jpg?f=webp&w=1000&h=700";
  place1desc = "The largest courty in Western Europe, has long been a gateway between the noperen southern-regions.";
  place1topic = "Architecture and Fine Arts";

  place2 = "Seoul";
  place2img = "https://silversea-discover.imgix.net/2022/12/QCRUa0gV-2asunsetinSeoulskyline_1490190263.jpg?auto=compress%2Cformat&ixlib=php-3.3.1&fit=crop&w=2500&h=920&wpsize=bigger-2500";
  place2desc = "Seoul, the capital of South Korea, is a huge metropolis where modern skyscrapers, high-tech subways and pop culture meet Buddhist temples, palaces and street markets.";
  place2topic = "Humanities and Arts";

  place3 = "San Francisco";
  place3img = "https://upload.wikimedia.org/wikipedia/commons/f/f9/San_Francisco_Downtown_Aerial%2C_August_2025.jpg";
  place3desc = "San Francisco, officially the City and County of San Francisco, is a commercial, financial, and cultural center of Northern California.";
  place3topic = "Science and Technology";

  place4 = "Boston";
  place4img = "https://www.travelandleisure.com/thmb/OxTfa-TTiGTLm_jUvSw2egK7eSs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/boston-massachusetts-BOSTONTG0221-719aef2eeb1c4929b6c839715e34a69e.jpg";
  place4desc = "Boston is the capital and most populous city of the U.S. state of Massachusetts. It serves as the cultural and financial center of New England, a region of the Northeastern United States.";
  place4topic = "Engineering and Tech";

}
