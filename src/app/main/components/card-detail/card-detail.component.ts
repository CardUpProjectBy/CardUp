import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CardListService } from '../card-list/service/card-list.service';
import { ICard, ICardDTO } from '../../interfaces/card.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, take } from 'rxjs';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit, OnDestroy {
  card?: ICard;

  getCardByIdSubscription?: Subscription;

  listForm = this.fb.group({
    ru: new FormControl('', [Validators.required]),
    en: new FormControl('', [Validators.required])
  })

  constructor(
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    protected cardListService: CardListService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.getCardByIdSubscription = this.cardListService.getCardById(Number(id)).subscribe(card => {
        this.card = card
        this.setCardToForm(card)
      })
    }
  }

  ngOnDestroy(): void {
    this.getCardByIdSubscription?.unsubscribe()
  }

  updateCard(): void {
    this.cardListService.updateCard(this.card?.id!, this.prepareFormData()).pipe(take(1)).subscribe()
    this.router.navigate(['/main'])
  }

  cancelUpdate(): void {
    this.router.navigate(['/main'])
  }

  private setCardToForm(card: ICard): void {
    this.listForm.setValue({
      ru: card.ru,
      en: card.en
    })
  }

  private prepareFormData(): ICardDTO {
    return {
      ru: this.listForm.get('ru')?.value!,
      en: this.listForm.get('en')?.value!
    }
  }
}
