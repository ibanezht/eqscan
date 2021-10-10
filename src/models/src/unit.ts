import UnitType from "./unitType";
import Customer from "./customer";

class Unit {
  id: string;
  dataMatrixStringValue: string;
  unitType: UnitType;
  customer: Customer;

  constructor(
    id: string,
    dataMatrixStringValue: string,
    unitType: UnitType,
    customer: Customer,
  ) {
    this.id = id;
    this.dataMatrixStringValue = dataMatrixStringValue;
    this.unitType = unitType;
    this.customer = customer;
  }
}

export default Unit;
