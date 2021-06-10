import { Component, OnInit } from '@angular/core';
import { TheoryService } from './theory.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-theory',
  templateUrl: './theory.component.html',
  styleUrls: ['./theory.component.scss']
})
export class TheoryComponent implements OnInit {

  // You can use simple http response for experiments this.theoryService.mockGitMethod
  constructor(private theoryService: TheoryService) {
  }

  ngOnInit(): void {
  }

}
