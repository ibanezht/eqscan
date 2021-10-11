import { gql } from "apollo-server-express";

const schema = gql`
  type Unit {
    id: String
    dataMatrixStringValue: String
    unitType: UnitType
    customer: Customer
    scanEvents: [ScanEvent]
  }

  type UnitType {
    id: String
    name: String
    company: Company
  }

  type Company {
    id: String
    name: String
    address: String
    city: String
    stateCode: String
    postalCode: String
    code: String
  }

  type Customer {
    id: String
    name: String
    address: String
    city: String
    stateCode: String
    postalCode: String
    phone: String
    email: String
  }

  type ScanEvent {
    id: String
    timezone: String
    latitude: Float
    longitude: Float
    passed: Boolean
  }

  type Query {
    unit(id: ID!): Unit
  }

  schema {
    query: Query
  }
`;

export default schema;
