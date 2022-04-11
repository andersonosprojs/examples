import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked,
  OnDestroy {

  // PROPRIEDADE CUSTOMIZADA:
  // Desta forma posso receber os dados de um estudante
  // externa ao componente.
  // @Input() student: {
  //   type: string,
  //   name: string,
  //   description: string
  // };

  @Input() type: string;

  constructor() {
    console.log("constructor(): chamado");
   }

  ngOnInit(): void {
    console.log("ngOnInit(): chamado");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges(): chamado");
    console.log(changes);
  }

  ngDoCheck() {
    console.log("ngDoCheck(): chamado");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit(): chamado");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked(): chamado");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit(): chamado");
  }
    
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked(): chamado");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy(): chamado");
  }
}
