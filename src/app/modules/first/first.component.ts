import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  constructor() { }

  ngOnInit(): void {
  }

}
