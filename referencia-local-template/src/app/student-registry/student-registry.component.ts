import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student-registry',
  templateUrl: './student-registry.component.html',
  styleUrls: ['./student-registry.component.css']
})
export class StudentRegistryComponent implements OnInit {

  @Output() aprovedCreated = new EventEmitter<{ name: string, description: string}>();
  @Output() substituteCreated = new EventEmitter<{ name: string, description: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  addApproved = (nameInput: HTMLInputElement, descriptionInput: HTMLInputElement) => {
    this.aprovedCreated.emit(
      {
        name: nameInput.value,
        description: descriptionInput.value
      }
    );
  }

  addSubstitute = (nameInput: HTMLInputElement, descriptionInput: HTMLInputElement) => {
    this.substituteCreated.emit(
      {
        name: nameInput.value,
        description: descriptionInput.value
      }
    );
  }
}
