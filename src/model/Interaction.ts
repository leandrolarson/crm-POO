import Employee from "./Employee";

export default class Interaction {
  private id: number;
  private description: string;
  private date: Date;
  private author: Employee;

  constructor(id: number, description: string, author: Employee) {
    this.id = id;
    this.description = description;
    this.date = new Date();
    this.author = author;
  }
}
