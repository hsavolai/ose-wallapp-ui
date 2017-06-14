import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WallMessageService } from '../wall-message.service';

@Component({
  selector: 'wall-message-form',
  templateUrl: './wall-message-form.component.html',
  styleUrls: ['./wall-message-form.component.css']
})
export class WallMessageFormComponent implements OnInit {

  constructor(private wallMessageService: WallMessageService) { }

  ngOnInit(): void {
  }

  add(content: string, alias: string): void {
	  content = content.trim();
	  if (!alias) { return; }
	  if (!content) { return; }
	  this.wallMessageService.createMessage(content,alias);
	}
  
}
