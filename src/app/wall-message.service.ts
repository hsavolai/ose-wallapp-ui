import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { WallMessage } from './wall-message';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WallMessageService {
  private headers = new Headers({'Content-Type': 'application/json'});
  //private messagesApi = 'api/messages';  // URL to web api
  private messagesApi = '/api/messages';  // URL to web api
  private messagesCache = [];
  messageListUpdate: Subject<WallMessage[]> = new Subject<WallMessage[]>();
  
  constructor(private http: Http) { console.log("Im Here!"); }

  fetchMessages(): void {
	  console.log("Fetch messages!");
	  this.getMessages()
	  //.then(messages => console.log("here it is:"+JSON.stringify(messages)));
      .then(messages => this.updateMessages(messages));
	
  }

  private updateMessages(messages): void {
	  messages = messages.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0).slice().reverse();
	  if (messages.toString() !== this.messagesCache.toString()) {
		console.log("Update view!");
		this.messagesCache = messages;
	    this.messageListUpdate.next(this.messagesCache);
	  }
  }

  private getMessages(): Promise<WallMessage[]> {
	  console.log("Get messages!");
	  return this.http.get(this.messagesApi)
	               .toPromise()
	               .then(this.extractData)
	               .catch(this.handleError);
  }
  
  private extractData(res: Response) {
	    return res.json();
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private createResponse(message: WallMessage): WallMessage {
	  console.log("Create response");
	  this.fetchMessages();
	  return message;
  }
  
  createMessage(content: string, alias: string) : void {
	  console.log("Create message");
	  this.create(content,alias).then(message => this.createResponse(message));
  }
  
  private create(content: string, alias: string): Promise<WallMessage> {
	  let options = new RequestOptions({ headers: this.headers });
	  let body = JSON.stringify({content: content, alias: alias});

	  return this.http.post(this.messagesApi, body, options)
	    .toPromise()
	    .then(this.extractData)
	    .catch(this.handleError);
  }
  
  
  
}