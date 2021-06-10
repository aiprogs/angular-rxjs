import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheoryComponent } from './theory.component';

const routes: Routes = [
  {
    path: '',
    component: TheoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TheoryRoutingModule { }
