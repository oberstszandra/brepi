import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Brepi } from './models/brepi';

@Component({
  selector: 'app-brepi-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brepi-card.component.html',
  styleUrls: ['./brepi-card.component.scss'],
})
export class BrepiCardComponent {
  @Input() brepiCard!: Brepi;
  @Input() showDescription = false;
  @Output() onCardClick = new EventEmitter<number>();

  handleCardClick(id: number) {
    this.onCardClick.emit(id);
  }
}
