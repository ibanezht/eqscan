import { RESTDataSource } from "apollo-datasource-rest";
import StoreOptions from "./store-options";

class UnitStore extends RESTDataSource {
  constructor(storeOptions: StoreOptions) {
    super();
    this.baseURL = storeOptions.url;
  }

  public async getById(id: string): Promise<any> {
    return await this.get(`api/units/${id}`);
  }
}

export default UnitStore;
