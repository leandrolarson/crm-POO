import Attendant from "./Attendant";
import Interaction from "./Interaction";

export default class Lead {
  private id: number;
  private name: string;
  private phone: string;
  private commercialStage: string;
  private responsible: Attendant | null;
  private history: Interaction[];

  constructor(id: number, name: string, phone: string) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.commercialStage = "New";
    this.responsible = null;
    this.history = [];
  }
}
