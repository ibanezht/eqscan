import UnitType from "./unit-type";
import Contact from "./contact";

class Unit {
  constructor(
    public id: string,
    public unitType: UnitType,
    public contact: Contact,
  ) {}
}

export default Unit;
