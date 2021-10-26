import { gql } from "apollo-server-express";

const schema = gql`
  type Unit {
    id: String
    unitType: String
    contact: Contact
  }

  type Contact {
    id: String
    name: String
    phone: String
    email: String
  }

  type Query {
    unit(id: ID!): Unit
  }

  schema {
    query: Query
  }
`;

export default schema;
