import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }
  newServerName = '';
  newServerContent ='';
  ngOnInit(): void {
  }
  onAddServer(){}
  onAddBlueprint(){}
}
