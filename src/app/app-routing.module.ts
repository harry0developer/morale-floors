import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'products', pathMatch: 'full', component: ProductsComponent },
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  { path: 'contacts', pathMatch: 'full', component: ContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
