import { RESTDataSource } from "apollo-datasource-rest";
import StoreOptions from "./store-options";
import { Unit } from "models";

class UnitStore extends RESTDataSource {
  constructor(storeOptions: StoreOptions) {
    super();
    this.baseURL = storeOptions.url;
  }

  public async getById(id: string): Promise<Unit[]> {
    return await this.get(`api/units/${id}`);
  }
}

export default UnitStore;
