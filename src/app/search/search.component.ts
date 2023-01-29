import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public searchValue = '';

  public search(searchValue: string): void {
    console.log(searchValue);
  }
}
