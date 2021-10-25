import { IResolvers } from "apollo-server-express";
import { Contact, Unit } from "models";

const resolvers: IResolvers = {
  Query: {
    async unit(_, { id }, { dataSources }): Promise<Unit> {
      const retval = await dataSources.unitStore.getById(id);
      return retval;
    },
  },
  Unit: {
    async contact({ id }, _, { dataSources }): Promise<Contact> {
      const retval = await dataSources.unitStore.getContact(id);
      return retval;
    },
  },
};

export default resolvers;
