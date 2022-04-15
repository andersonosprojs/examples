import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    { name: 'José da Silva', status: 'ativo' },
    { name: 'Maria das Dores', status: 'inativo' },
    { name: 'Francisco Pereira', status: 'férias' }
  ]

  onUserCreated(newUser: { name: string, status: string }) {
    this.users.push(newUser);
  }

  onStatusChanged(updatedUser: { id: number, newStatus: string }) {
    this.users[updatedUser.id].status = updatedUser.newStatus;
  }
}
