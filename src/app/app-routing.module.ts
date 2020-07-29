import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './practice/home/home.component';
import { UsersComponent } from './practice/users/users.component';
import { UserComponent } from './practice/users/user/user.component';
import { ServersComponent } from './practice/servers/servers.component';
import { ServerComponent } from './practice/servers/server/server.component';
import { EditServerComponent } from './practice/servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './practice/page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './practice/servers/edit-server/can-deactivate-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }
  ] },  
  { path: 'servers', 
    canActivateChild: [AuthGuard], 
    component: ServersComponent, 
    children: [
    { path: ':id', component: ServerComponent },
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
  ] },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' } // Must be last route
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}