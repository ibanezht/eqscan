import { IResolvers } from "apollo-server-express";
import { Unit } from "models";

const resolvers: IResolvers = {
  Query: {
    async unit(_, { id }, { dataSources }): Promise<Unit | null> {
      const retval: Unit = await dataSources.unitStore.get(id);
      return retval;
    },
  },
};

export default resolvers;
