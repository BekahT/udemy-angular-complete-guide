import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { WarningAlertComponent } from './components/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PracticeComponent } from './practice/practice.component';
import { CockpitComponent } from './practice/cockpit/cockpit.component';
import { ServerElementComponent } from './practice/server-element/server-element.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { GameControlComponent } from './event-binding/game-control/game-control.component';
import { OddComponent } from './event-binding/odd/odd.component';
import { EvenComponent } from './event-binding/even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DataBindingComponent,
    DirectivesComponent,
    PracticeComponent,
    CockpitComponent,
    ServerElementComponent,
    EventBindingComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
