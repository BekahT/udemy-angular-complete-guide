import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  allowNewServer = false;
  // serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  serverId: number = 10;
  serverStatus: string = 'offline';
  servers = ['TestServer', 'TestServer2'];

  constructor() {setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    // this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
