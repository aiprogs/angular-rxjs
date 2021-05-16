import { Component } from '@angular/core';
import { LocksService } from '../../core/services/locks.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {

  public locks$ = this.locksService.update$;

  constructor(public locksService: LocksService) {
  }

}
