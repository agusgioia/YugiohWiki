import { Component,OnInit } from '@angular/core';
import { AllCardsService } from './all-cards.service'
import { CommonModule } from '@angular/common';
interface Card {
  id: number;
  name: string;
  card_images: Array<{ image_url: string }>;
}
@Component({
  selector: 'app-all-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-cards.component.html',
  styleUrl: './all-cards.component.css'
})

export class AllCardsComponent implements OnInit {
  cards: Card[] = [];

  constructor(private allCardsService: AllCardsService) { }

  ngOnInit(): void {
    this.fetchCards();
  }

  async fetchCards() {
    try {
      this.cards = await this.allCardsService.getAllCards();
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  }
}