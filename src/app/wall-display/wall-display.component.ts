import { Component,OnInit,Injectable } from "@angular/core"; 
import { WallMessage } from '../wall-message';
import { WallMessageService } from '../wall-message.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'wall-display',
  templateUrl: './wall-display.component.html',
  styleUrls: ['./wall-display.component.css'],
})
export class WallDisplayComponent implements OnInit{
	
  public messages;
  private pollDelay=5000;
  private _subscription;

  constructor(private wallMessageService: WallMessageService) {
	  this._subscription = wallMessageService.messageListUpdate.subscribe((value) => { 
	      this.messages = value; 
      });

	  Observable.interval(this.pollDelay).subscribe(() => {
	    wallMessageService.fetchMessages();
	  });

	  //setInterval(() => {
	  //    this.ref.detectChanges();
	  //  }, 5000);
  }

  ngOnInit(): void {
	    this.wallMessageService.fetchMessages();
  }

}

