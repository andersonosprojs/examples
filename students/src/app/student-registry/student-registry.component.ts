import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student-registry',
  templateUrl: './student-registry.component.html',
  styleUrls: ['./student-registry.component.css']
})
export class StudentRegistryComponent implements OnInit {

  @Output() aprovedCreated = new EventEmitter<{ name: string, description: string}>();
  @Output() substituteCreated = new EventEmitter<{ name: string, description: string}>();

  newStudentName = '';
  newStudentDescription = '';

  constructor() { }

  ngOnInit(): void {
  }

  addApproved = () => {
    this.aprovedCreated.emit(
      {
        name: this.newStudentName,
        description: this.newStudentDescription
      }
    );
  }

  addSubstitute = () => {
    this.substituteCreated.emit(
      {
        name: this.newStudentName,
        description: this.newStudentDescription
      }
    );
  }
}
