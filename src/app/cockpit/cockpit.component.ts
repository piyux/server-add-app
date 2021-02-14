import { isLoweredSymbol } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, OnInit, Output ,ViewChild} from '@angular/core';
import { ServerElementComponent } from '../server-element/server-element.component';
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
  //newServerContent ='';
  @ViewChild('serverContentInput' ,{static:true}) serverContentInput: ElementRef;
  ngOnInit(): void {
  }
  onAddServer(){
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
  onAddBlueprint(){
    //console.log('debug blueprint');
    this.bluePrintCreated.emit({
      serverName: 'SAMPLE',
      serverContent: 'This is sample web server'
    });
    //console.log(this)
  }
}
