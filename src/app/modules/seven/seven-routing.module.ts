import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SevenComponent } from './seven.component';

const routes: Routes = [
  {
    path: '',
    component: SevenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SevenRoutingModule {
}
