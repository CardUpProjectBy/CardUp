import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardListService } from './service/card-list.service';
import { ICard, ICardDTO } from '../../interfaces/card.interface';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, OnDestroy {
  cardList: ICard[] = [];

  cardListSubscription?: Subscription;
  saveCardSubscription?: Subscription;
  deleteCardSubscription?: Subscription;

  listForm = this.fb.group({
    ru: new FormControl('', [Validators.required]),
    en: new FormControl('', [Validators.required])
  })

  constructor(
    protected fb: FormBuilder,
    protected cardListService: CardListService
  ) {}

  ngOnInit(): void {
    this.downloadAllWords()
  }

  ngOnDestroy(): void {
    this.cardListSubscription?.unsubscribe(),
    this.saveCardSubscription?.unsubscribe()
  }

  saveListForm(): void {
    if (this.listForm.valid) {
      this.cardListService.saveCard(this.prepareFormData()).subscribe(
        () => {
          console.log('Card saved successfully'),
          this.downloadAllWords()
        },
        () => console.log('Card does not saved')
      )
    }
  }

  deleteWord(id: number): void {
    this.deleteCardSubscription = this.cardListService.deleteCard(id).subscribe(
      () => {
        console.log('Card deleted successfully'),
        this.downloadAllWords()
      },
      () => {
        console.log('Card does not deleted')
      }
      )
  }

  private prepareFormData(): ICardDTO {
    return {
      ru: this.listForm.get('ru')?.value!,
      en: this.listForm.get('en')?.value!
    }
  }

  private downloadAllWords(): void {
    this.cardListSubscription = this.cardListService.getCardList().subscribe(cardlist => {
      this.cardList = cardlist
    })
  }

}
