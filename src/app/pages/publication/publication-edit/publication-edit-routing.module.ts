import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicationEditComponent } from '@pages/publication/publication-edit/publication-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PublicationEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicationEditRoutingModule { }
