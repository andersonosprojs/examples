import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoggingService } from './logging.service';
import { NewUserComponent } from './new-user/new-user.component';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ UserService, LoggingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
