import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateProductCategoryComponent } from './category/create-product-category/create-product-category.component';
import { ViewProductCategoryComponent } from './category/view-product-category/view-product-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CreateProductCategoryComponent,
    ViewProductCategoryComponent,
    DashboardComponent,
    HeaderNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
