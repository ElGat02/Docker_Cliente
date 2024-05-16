import { Component } from '@angular/core';
import { Client } from 'src/app/Model/Client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  client: Client = new Client('', '', '');

  constructor(private clientService: ClientService) {}

  addClient() {
    this.clientService.addClient(this.client).subscribe({
      next: (data) => {
        console.log('Client added', data);
        // Navigate back to list or show success message
      },
      error: (err) => console.error('Error adding client', err)
    });
  }
}
