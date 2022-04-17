import { UserService } from './../user.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() user: { name: string, status: string };
  @Input() id: number;

  constructor(
    private loggingService: LoggingService,
    private userService: UserService
  ) { }

  onSetTo(status: string) {
    this.userService.updateStatus(this.id, status);
    this.userService.statusUpdate.emit(status);
  }
}
