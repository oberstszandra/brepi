import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  readonly pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  @Input() currentPage: number = 0;
  @Output() onPageChange = new EventEmitter<number>();

  handlePageNumberClick(pageNumber: number) {
    if (pageNumber !== this.currentPage) {
      this.onPageChange.emit(pageNumber);
    }
  }

  handleNextPageClick() {
    if (this.currentPage < 9) {
      this.onPageChange.emit(this.currentPage + 1);
    }
  }

  handlePreviousPageClick() {
    if (this.currentPage > 1) {
      this.onPageChange.emit(this.currentPage - 1);
    }
  }
}
