import { RESTDataSource } from "apollo-datasource-rest";
import StoreOptions from "./store-options";
import { Contact, Unit } from "models";

class UnitStore extends RESTDataSource {
  constructor(storeOptions: StoreOptions) {
    super();
    this.baseURL = storeOptions.url;
  }

  public async getById(id: string): Promise<Unit> {
    return await this.get(`api/units/${id}`);
  }

  public async getContact(unitId: string): Promise<Contact> {
    return await this.get(`api/units/${unitId}/contact`);
  }
}

export default UnitStore;
