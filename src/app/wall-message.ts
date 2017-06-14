export class WallMessage {
  id: number;
  date: string;
  content: string;
  alias: string;
  constructor(content,alias){
	this.content = content;
	this.alias = alias;
  }
}
