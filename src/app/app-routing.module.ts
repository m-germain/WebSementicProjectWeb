import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { RecetteComponent } from './recette/recette.component';
import { GlossaireComponent } from './glossaire/glossaire.component';


const routes: Routes = [
  {
    path: '', component: SearchComponent
  },
  {
    path: 'recette/:name', component: RecetteComponent
  },
  {
    path: 'glossaire/:ingredient', component: GlossaireComponent
  },
  {
    path: '**', redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
