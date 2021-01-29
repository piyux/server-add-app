import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  constructor() { }
  newServerName = '';
  newServerContent ='';
  ngOnInit(): void {
  }
  onAddServer(){
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
  onAddBlueprint(){
    //console.log('debug blueprint');
    this.bluePrintCreated.emit({
      serverName: 'SAMPLE',
      serverContent: 'LOREM TOTEM'
    });
    //console.log(this)
  }
}
