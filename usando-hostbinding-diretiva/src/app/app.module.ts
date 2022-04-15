import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DangerHighLightDirective } from './danger-highlight/danger-highlight.directive';
import { WarningHighlightDirective } from './warning-highlight/warning-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DangerHighLightDirective,
    WarningHighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
