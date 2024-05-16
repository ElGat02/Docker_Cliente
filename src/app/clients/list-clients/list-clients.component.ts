import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Model/Client.model';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getClients().subscribe({
      next: (data) => this.clients = data,
      error: (err) => console.error(err),
      complete: () => console.log('Client data loaded')
    });
  }

  deleteClient(id: number | undefined) {
    if (id !== undefined) {
      this.clientService.deleteClient(id).subscribe(() => this.loadClients());
    } else {
      console.error('Client ID is undefined');
    }
  }
  
  editClient(id: number | undefined) {
    if (id !== undefined) {
      // Realiza la navegación o la lógica correspondiente
    } else {
      console.error('Client ID is undefined');
    }
  }
}  
