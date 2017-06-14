import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {    
    let messages = [
   	  { id: 10, content: 'Kilroy was here!', alias: 'Kilroy', date: '1.2.2015'},
   	  { id: 11, content: 'Rulez ok!', alias: 'Ware dude', date: '2.2.2015'},
   	  { id: 12, content: 'Ken sent me', alias: 'Larry', date: '3.2.2015'},
   	  { id: 13, content: 'Kissa söi kesävoin', alias: 'Kokki kolmonen', date: '4.2.2015'},
   	  { id: 14, content: 'Linux is the best', alias: 'Linus', date: '10.2.2015'},
   	  { id: 15, content: 'Bart!', alias: 'Homer', date: '1.7.2015'},	
   ];
   return {messages}; 
  }
}