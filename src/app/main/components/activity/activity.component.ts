import { Component, OnInit } from '@angular/core';
import { CardListService } from '../card-list/service/card-list.service';
import { ICard } from '../../interfaces/card.interface';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit{
  cardList: ICard[] = [];
  resultArray: boolean[] = [];
  cardListLength?: number;
  currentWord?: string;
  stopActivity?: boolean;

  checkForm = this.fb.group({
    check: new FormControl('', Validators.required)
  })

  constructor(
    protected fb: FormBuilder,
    protected cardListService: CardListService
  ) {}

  ngOnInit(): void {
    this.stopActivity = false
    this.cardListService.getCardList().subscribe(cardList => {
      this.cardListLength = cardList.length
      this.cardList = cardList
    })
  }

  checkActivityState(): void {
    if (this.resultArray.length !== this.cardListLength) {
      return;
    }
    this.stopActivity = true;
  }

  nextWord(card: ICard): void {
    const word = this.checkForm.get('check')?.value
    this.resultArray.push(card.en === word)
    this.checkActivityState()
  }

  // prepareResultArray(card: ICard): void {
  //   const word = this.checkForm.get('check')?.value
  //   this.resultArray.push(card.en === word)
  // }

  result(): number {
    return this.resultArray.filter(value => value).length
  }

}
