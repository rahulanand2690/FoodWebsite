import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { DishComponent } from './dish/dish.component';
import { DishListComponent } from './dish/dish-list/dish-list.component';
import { DishDetailsComponent } from './dish/dish-details/dish-details.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { DishStartComponent } from './dish/dish-start/dish-start.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ExperimentComponent } from './experiment/experiment.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { CartComponent } from './orders/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    DishComponent,
    DishListComponent,
    DishDetailsComponent,
    HomeComponent,
    OrdersComponent,
    DishStartComponent,
    FooterComponent,
    LoginComponent,
    ExperimentComponent,
    PageNotFoundComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
