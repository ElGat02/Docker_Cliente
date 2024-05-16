import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './Pages/client/client.component';
import { AddClientComponent } from './clients/add-client/add-client.component';
import { EditClientComponent } from './clients/edit-client/edit-client.component';
import { ListClientsComponent } from './clients/list-clients/list-clients.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: 'add-client', component: AddClientComponent },
  { path: 'edit-client/:id', component: EditClientComponent },
  { path: '', component: ListClientsComponent }
];

@NgModule({
  declarations: [
    
    AppComponent,
    ClientComponent,
    AddClientComponent,
    EditClientComponent,
    ListClientsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
