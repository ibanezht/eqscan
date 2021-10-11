import Unit from "./unit";

class Contact {
  constructor(
    public id: string,
    public name: string,
    public phone: string,
    public email: string,
    public units: Unit[],
  ) {}
}

export default Contact;
