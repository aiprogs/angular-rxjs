import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { DestroyService } from '../../core/services/destroy.service';

@Component({
  selector: 'app-seven',
  templateUrl: './seven.component.html',
  styleUrls: ['./seven.component.scss'],
  providers: [
    DestroyService
  ]
})
export class SevenComponent implements OnInit {
  @ViewChild('clickableButton', {static: true}) clickableButton!: ElementRef;

  constructor(@Inject(DestroyService) private destroy$: Observable<void>) {
  }

  ngOnInit(): void {
    fromEvent(this.clickableButton.nativeElement, 'click').pipe(
      finalize(() => console.log('Clickable Button finalized')),
      takeUntil(this.destroy$),
    ).subscribe(
      r => console.log(r)
    );
  }
}
