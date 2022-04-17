import { UserService } from './../user.service';
import { LoggingService } from './../logging.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent{

  constructor(
    private loggingService: LoggingService,
    private userService: UserService
  ) {
    this.userService.statusUpdate.subscribe(
      (status: string) => alert(`Novo Status: ${status}`)
    );
  }

  onCreateUser(userName: string, userStatus: string) {
    this.userService.createUser(userName, userStatus);
    // this.loggingService.logStatusChange(userStatus);
  }

}
