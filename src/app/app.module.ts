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
import { EventBindingComponent } from './event-binding/event-binding.component';
import { GameControlComponent } from './event-binding/game-control/game-control.component';
import { OddComponent } from './event-binding/odd/odd.component';
import { EvenComponent } from './event-binding/even/even.component';
import { BasicHighlightDirective } from './directives-deep-dive/basic-highlight/basic-highlight.directive';
import { DirectivesDeepDiveComponent } from './directives-deep-dive/directives-deep-dive.component';
import { RendererHighlightDirective } from './directives-deep-dive/renderer-highlight/renderer-highlight.directive';
import { HostListenerHighlightDirective } from './directives-deep-dive/host-listener-highlight/host-listener-highlight.directive';
import { HostBindingHighlightDirective } from './directives-deep-dive/host-binding-highlight/host-binding-highlight.directive';
import { UserInputHighlightDirective } from './directives-deep-dive/user-input-highlight/user-input-highlight.directive';
import { ServicesComponent } from './services/services.component';
import { ActiveUsersComponent } from './services/active-users/active-users.component';
import { InactiveUsersComponent } from './services/inactive-users/inactive-users.component';
import { TdFormsComponent } from './td-forms/td-forms.component';



@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DataBindingComponent,
    DirectivesComponent,
    PracticeComponent,
    EventBindingComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighlightDirective,
    DirectivesDeepDiveComponent,
    RendererHighlightDirective,
    HostListenerHighlightDirective,
    HostBindingHighlightDirective,
    UserInputHighlightDirective,
    ServicesComponent, 
    ActiveUsersComponent,
    InactiveUsersComponent,
    TdFormsComponent,
    // Below here is practice
 
  ],
  imports: [
    BrowserModule,
    FormsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
