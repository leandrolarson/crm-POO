import Employee from "./Employee";

export default class Manager extends Employee {
  constructor(id: number, name: string) {
    super(id, name);
  }
}
