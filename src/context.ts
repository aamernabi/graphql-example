import { DB } from "./_db.js";

export type DataSourceContext = {
  dataSources: {
    db: DB;
  };
};
