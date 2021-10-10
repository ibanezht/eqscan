class Contact {
  id: string;
  name: string;
  address: string;
  city: string;
  stateCode: string;
  postalCode: string;

  constructor(
    id: string,
    name: string,
    address: string,
    city: string,
    stateCode: string,
    postalCode: string,
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.city = city;
    this.stateCode = stateCode;
    this.postalCode = postalCode;
  }
}

export default Contact;
