import Contact from "./contact";

class Customer extends Contact {
  phone: string;
  email: string;

  constructor(
    id: string,
    name: string,
    address: string,
    city: string,
    stateCode: string,
    postalCode: string,
    phone: string,
    email: string,
  ) {
    super(id, name, address, city, stateCode, postalCode);
    this.phone = phone;
    this.email = email;
  }
}

export default Customer;
