import Company from "./company";

class UnitType {
  id: string;
  name: string;
  company: Company;

  constructor(id: string, name: string, company: Company) {
    this.id = id;
    this.name = name;
    this.company = company;
  }
}

export default UnitType;
