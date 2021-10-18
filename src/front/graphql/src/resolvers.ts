import { IResolvers } from "apollo-server-express";

const resolvers: IResolvers = {
  Query: {
    async unit(_, { id }, { dataSources }): Promise<any> {
      const { Id, UnitType } = await dataSources.unitStore.getById(id);
      return { id: Id, unitType: UnitType };
    },
  },
};

export default resolvers;
