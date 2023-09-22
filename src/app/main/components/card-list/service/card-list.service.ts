import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICard, ICardDTO } from '../../../interfaces/card.interface';

@Injectable()
export class CardListService {
  path: string = 'http://127.0.0.1:3001'

  constructor(
    protected http: HttpClient
  ) { }

  getCardList(): Observable<ICard[]> {
    return this.http.get<ICard[]>(this.path + '/card')
  }

  getCardById(id: number): Observable<ICard> {
    return this.http.get<ICard>(this.path + `/card/${id}`)
  }

  saveCard(card: ICardDTO): Observable<ICard> {
    return this.http.post<ICard>(this.path + '/card', card)
  }

  updateCard(id: number, card: ICardDTO): Observable<ICard> {
    return this.http.patch<ICard>(this.path + '/card' + `/${id}` + '/update', card)
  }

  deleteCard(id: number): Observable<ICard> {
    return this.http.delete<ICard>(this.path + '/card' + `/${id}` + '/delete')
  }
}
