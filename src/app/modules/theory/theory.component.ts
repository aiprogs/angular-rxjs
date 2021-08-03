import { Component, OnInit } from '@angular/core';
import { TheoryService } from './theory.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-theory',
  templateUrl: './theory.component.html',
  styleUrls: ['./theory.component.scss']
})
export class TheoryComponent implements OnInit {
  data$!: Observable<any>;

  // You can use simple http response for experiments this.theoryService.mockGitMethod
  constructor(private theoryService: TheoryService) {
  }

  ngOnInit(): void {
  }

}
