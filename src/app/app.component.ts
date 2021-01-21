import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [ {type: 'server',name: 'Test' ,content: 'This is First Web Server'} ,
  {type: 'server' , name: 'Test 2' , content: 'This is Second Web Server'}];
  title = 'server-add-app';
  onServerAdded(serverData: {serverName: string,serverContent: string}){
    this.serverElements.push(
      {
        type: 'server',
        name: serverData.serverName,
        content: serverData.serverContent
      }
    );
  }
  onBlueprintAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }
}
