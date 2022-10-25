import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CochesComponent } from './components/coches/coches.component';

const routes: Routes = [
  { path: '', component: CochesComponent },
  { path: '/coches', component: CochesComponent },
  { path: '**', redirectTo: 'coches', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
