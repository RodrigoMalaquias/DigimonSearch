import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

  const routes: Routes = [
  {
    path: 'home',
    loadChildren:() => import("./home/home.module").then(m => m.HomeModule)
  },
  { 
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  { 
    path: 'listData',
    loadChildren:() => import("./list-data/list-data.module").then(m => m.ListDataModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
