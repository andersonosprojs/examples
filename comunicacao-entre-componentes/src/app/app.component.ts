import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students = [
    { type: 'approved', name: 'Anderson Silva', description: 'Masculino'},
    { type: 'substitute', name: 'Edna Souza', description: 'Feminino'},
    { type: 'approved', name: 'Nicolas Samuel', description: 'Masculino'}
  ];

  approvedAdded = (student: { name: string, description: string }) => {
    this.students.push({
      type: 'approved',
      name: student.name,
      description: student.description
    });
  }
  substituteAdded = (student: { name: string, description: string }) => {
    this.students.push({
      type: 'substitute',
      name: student.name,
      description: student.description
    });
  }

}
