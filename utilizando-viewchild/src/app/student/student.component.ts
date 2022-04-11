import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  // PROPRIEDADE CUSTOMIZADA:
  // Desta forma posso receber os dados de um estudante
  // externa ao componente.
  @Input() student: {
    type: string,
    name: string,
    description: string
  };

  constructor() { }

  ngOnInit(): void {
  }

}
