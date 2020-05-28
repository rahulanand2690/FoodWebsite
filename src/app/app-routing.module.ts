import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DishComponent } from './dish/dish.component';
import { DishListComponent } from './dish/dish-list/dish-list.component';
import { DishDetailsComponent } from './dish/dish-details/dish-details.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { DishStartComponent } from './dish/dish-start/dish-start.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dish', component: DishComponent,
    children: [
       { path: '', component: DishStartComponent },
      { path: 'dish-list', component: DishListComponent },
      { path: 'dishDetail', component: DishDetailsComponent },
    ],
  },
  { path: 'order', component: OrdersComponent }
  /* {path:'', component:},
  {path:'', component:},
  {path:'', component:},
  {path:'', component:},
  {path:'', component:},
  {path:'', component:}, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
