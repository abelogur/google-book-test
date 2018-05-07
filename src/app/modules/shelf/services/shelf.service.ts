import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Shelf} from '../domian/shelf';
import {AbstractListResponse} from '../../../api/abstract-response';

@Injectable()
export class ShelfService {

  constructor(private httpClient: HttpClient) {
  }

  public getAllShelves(): Observable<Shelf[]> {
    return this.httpClient.get<AbstractListResponse<Shelf>>('mylibrary/bookshelves')
      .map(response => response.items);
  }
}