import { Component, OnDestroy } from '@angular/core';
import { BeatService } from '../../core/services/beat.service';
import { LocksService } from '../../core/services/locks.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnDestroy {

  private beatSub = this.beatSrv.sync$.subscribe(r => console.log('version second', r));

  constructor(public locksService: LocksService,
              private beatSrv: BeatService) {
  }

  ngOnDestroy(): void {
    this.beatSub?.unsubscribe();
  }

}
