import Contact from "./contact";

class Company extends Contact {
  code: string;

  constructor(
    id: string,
    name: string,
    address: string,
    city: string,
    stateCode: string,
    postalCode: string,
    code: string,
  ) {
    super(id, name, address, city, stateCode, postalCode);
    this.code = code;
  }
}

export default Company;
