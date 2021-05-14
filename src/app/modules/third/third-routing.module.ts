import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThirdComponent } from './third.component';

const routes: Routes = [
  {
    path: '',
    component: ThirdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdRoutingModule { }
