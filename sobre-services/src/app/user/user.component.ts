import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ LoggingService ]
})
export class UserComponent {

  @Input() user: { name: string, status: string };
  @Input() id: number;

  @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  constructor(
    private loggingService: LoggingService
  ) { }

  onSetTo(status: string) {
    this.statusChanged.emit({ id: this.id, newStatus: status });
    this.loggingService.logStatusChange(status);
  }

}
