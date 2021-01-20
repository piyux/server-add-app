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
}
