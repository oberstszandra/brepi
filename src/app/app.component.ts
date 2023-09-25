import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { BrepiCardComponent } from './components/brepi-card/brepi-card.component';
import { BeersService } from './services/beers.service';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { BehaviorSubject, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    BrepiCardComponent,
    PaginatorComponent,
  ],
})
export class AppComponent {
  flippedCardId = 0;
  pageNumber$ = new BehaviorSubject(1);

  constructor(private beersService: BeersService) {}

  brepiList$ = this.pageNumber$.pipe(
    switchMap((pageNumber) =>
      this.beersService.getBeersListByPageNumber(pageNumber)
    )
  );

  handleOnCardClick(id: number) {
    this.flippedCardId = id;
  }

  handlePageChange(pageNumber: number) {
    this.pageNumber$.next(pageNumber);
  }
}
