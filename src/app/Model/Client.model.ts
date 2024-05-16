export class Client {
  id?: number;
  name: string;
  email: string;
  phone: string;

  constructor(name: string, email: string, phone: string, id?: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}