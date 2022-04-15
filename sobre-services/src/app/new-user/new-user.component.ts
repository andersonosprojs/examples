import { LoggingService } from './../logging.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [ LoggingService ]
})
export class NewUserComponent{

  @Output() userCreated = new EventEmitter<{ name: string, status: string }>();

  constructor(
    private loggingService: LoggingService
  ) { }

  onCreateUser(userName: string, userStatus: string) {
    this.userCreated.emit({
      name: userName,
      status: userStatus
    })
    this.loggingService.logStatusChange(userStatus);
  }

}
