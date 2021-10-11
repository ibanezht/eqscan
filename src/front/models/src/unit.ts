import Contact from "./contact";

class Unit {
  constructor(
    public id: string,
    public unitType: string,
    public contact: Contact,
  ) {}
}

export default Unit;
