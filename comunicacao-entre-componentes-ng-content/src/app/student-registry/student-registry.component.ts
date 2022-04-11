import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-student-registry',
  templateUrl: './student-registry.component.html',
  styleUrls: ['./student-registry.component.css']
})
export class StudentRegistryComponent implements OnInit {

  @Output() aprovedCreated = new EventEmitter<{ name: string, description: string}>();
  @Output() substituteCreated = new EventEmitter<{ name: string, description: string}>();

  // Pega a informação direto do DOM
  @ViewChild('studentNameInput') studentNameInput: ElementRef;
  @ViewChild('studentDescriptionInput') studentDescriptionInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  addApproved = () => {
    this.aprovedCreated.emit(
      {
        name: this.studentNameInput.nativeElement.value,
        description: this.studentDescriptionInput.nativeElement.value
      }
    );
  }

  addSubstitute = () => {
    this.substituteCreated.emit(
      {
        name: this.studentNameInput.nativeElement.value,
        description: this.studentDescriptionInput.nativeElement.value
      }
    );
  }
}
